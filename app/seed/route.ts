import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import {departments, users, incidents, social, organisational, technical} from '@/app/lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`DROP TABLE IF EXISTS users CASCADE;`
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id int PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      department_id int
    );
  `;
  await client.sql`COMMIT`;
  

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, username, email, password, department_id)
        VALUES (${user.id}, ${user.username},${user.email}, ${hashedPassword},${user.department_id})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  return insertedUsers;
}


async function seedDepartment() {
  await client.sql`DROP TABLE IF EXISTS departments CASCADE;`
  await client.sql`
    CREATE TABLE IF NOT EXISTS departments (
      id int PRIMARY KEY,
      name varchar(30),
      manager_id int,
      CONSTRAINT fk_manager
      FOREIGN KEY(manager_id) 
      REFERENCES users(id)
    );
  `;
  const insertedDepartment = await Promise.all(
    departments.map(async (dept) => {
      return client.sql`
        INSERT INTO departments (id, name, manager_id)
        VALUES (${dept.id}, ${dept.name}, ${dept.manager_id})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  return insertedDepartment;
}

async function seedIncident() {
  await client.sql`DROP TABLE IF EXISTS incidents CASCADE;`
  await client.sql`
    CREATE TABLE IF NOT EXISTS incidents (
      id int PRIMARY KEY,
      severity int,
      time date
    );
  `;
  const insertedIncident = await Promise.all(
    incidents.map(async (inc) => {
      return client.sql`
        INSERT INTO incidents (id, severity, time)
        VALUES (${inc.id}, ${inc.severity}, ${inc.time})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  return insertedIncident;
}

async function seedSocial() {
  await client.sql`DROP TABLE IF EXISTS social CASCADE;`
  await client.sql`
    CREATE TABLE IF NOT EXISTS social (
      id int PRIMARY KEY,
      training boolean,
      phishing_fail int,
      phishing_pass int,
      stress int, 
      workload int
    );
  `;
  const insertedSocial = await Promise.all(
    social.map(async (soc) => {
      return client.sql`
        INSERT INTO social (id, training, phishing_fail, phishing_pass, stress, workload)
        VALUES (${soc.id}, ${soc.training}, ${soc.phishing_fail},${soc.phishing_pass},${soc.stress},${soc.workload})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  return insertedSocial;
}

async function seedOrganisational() {
  await client.sql`DROP TABLE IF EXISTS organisational CASCADE;`
  await client.sql`
    CREATE TABLE IF NOT EXISTS organisational (
      id int PRIMARY KEY,
      date date,
      violations int
    );
  `;
  const insertedOrganisational = await Promise.all(
    organisational.map(async (org) => {
      return client.sql`
        INSERT INTO organisational (id, date, violations)
        VALUES (${org.id}, ${org.date}, ${org.violations})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  return insertedOrganisational;
}

async function seedTechnical() {
  await client.sql`DROP TABLE IF EXISTS technical CASCADE;`
  await client.sql`
    CREATE TABLE IF NOT EXISTS technical (
      date date,
      patch_coverage_ratio int,
      patch_deployment_time int,
      pending_patch_count int,
      os_patch_coverage_ratio int,
      os_patch_deployment_time int,
      os_pending_patch_count int,
      mfa int,
      admin_ratio int,
      app_control_alerts int
    );
  `;
  await client.sql`COMMIT`;

  const insertedTechnical = await Promise.all(
    technical.map(async (tech) => {
      return client.sql`
        INSERT INTO technical (date, patch_coverage_ratio, patch_deployment_time, pending_patch_count, os_patch_coverage_ratio,os_patch_deployment_time, os_pending_patch_count,mfa ,admin_ratio, app_control_alerts)
        VALUES (${tech.date}, ${tech.patch_coverage_ratio}, ${tech.patch_deployment_time}, ${tech.pending_patch_count},${tech.os_patch_coverage_ratio},${tech.os_patch_deployment_time},${tech.os_pending_patch_count},${tech.mfa}, ${tech.admin_ratio}, ${tech.app_control_alerts});
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
    await seedIncident();
    await seedSocial();
    await seedOrganisational();
    await seedTechnical();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}