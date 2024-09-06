import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { department, organisational, users, individual, technical} from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id int PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      job_title TEXT,
      dept int
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password, job_title, dept)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.job_title},${user.dept})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  return insertedUsers;
}

async function seedOrganisational() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS organisational (
      dept int PRIMARY KEY,
      sec_culture int,
      phishing_fails int,
      CONSTRAINT fk_organisational
      FOREIGN KEY(dept) 
      REFERENCES department(dept)
    );
  `;

  const insertedOrganisational = await Promise.all(
    organisational.map(async (organisation) => {
      return client.sql`
        INSERT INTO organisational (dept, sec_culture, phishing_fails)
        VALUES (${organisation.dept}, ${organisation.sec_culture}, ${organisation.phishing_fails})
        ON CONFLICT (dept) DO NOTHING;
      `;
    }),
  );
  return insertedOrganisational;
}

async function seedDepartment() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS department (
      dept int PRIMARY KEY,
      dept_name varchar(30),
      manager_id int,
      CONSTRAINT fk_manager
      FOREIGN KEY(manager_id) 
      REFERENCES users(id)
    );
  `;

  const insertedDepartment = await Promise.all(
    department.map(async (dept) => {
      return client.sql`
        INSERT INTO department (dept, dept_name, manager_id)
        VALUES (${dept.dept}, ${dept.dept_name}, ${dept.manager_id})
        ON CONFLICT (dept) DO NOTHING;
      `;
    }),
  );
  return insertedDepartment;
}

async function seedIndividual() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS individual (
      id int PRIMARY KEY,
      training_date date,
      workload int,
      stress int,
      sec_awareness int,
      CONSTRAINT fk_individual
      FOREIGN KEY(id) 
      REFERENCES users(id)
    );
  `;

  const insertedIndividual = await Promise.all(
    individual.map(async (indiv) => {
      return client.sql`
        INSERT INTO individual (id, training_date, workload, stress, sec_awareness)
        VALUES (${indiv.id},${indiv.training_date},${indiv.workload},${indiv.stress},${indiv.sec_awareness})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  return insertedIndividual;
}

async function seedTechnical() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS technical (
      incident_id int PRIMARY KEY,
      type varchar(30),
      severity int,
      response_time int,
      dept int,
      CONSTRAINT fk_technical
      FOREIGN KEY(dept) 
      REFERENCES department(dept)
    );
  `;

  const insertedTechnical = await Promise.all(
    technical.map(async (tech) => {
      return client.sql`
        INSERT INTO technical (incident_id, type, severity, response_time, dept)
        VALUES (${tech.incident_id},${tech.type},${tech.severity},${tech.response_time},${tech.dept})
        ON CONFLICT (incident_id) DO NOTHING;
      `;
    }),
  );
  return insertedTechnical;
}


export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedDepartment();
    await seedOrganisational();
    await seedIndividual();
    await seedTechnical();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
