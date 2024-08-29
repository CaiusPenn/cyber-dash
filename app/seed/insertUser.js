const { Client } = require('pg');
const bcrypt = require('bcrypt');

// Replace with your actual PostgreSQL connection string
const connectionString = "postgres://default:aFTvBnXei30z@ep-weathered-forest-a77p6wz1.ap-southeast-2.aws.neon.tech:5432/verceldb?sslmode=require"; 

async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

async function insertUser(username, password) {
  const hashedPassword = await hashPassword(password);

  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();

    const query = 'INSERT INTO users (username, password) VALUES ($1, $2)';
    await client.query(query, [username, hashedPassword]);

    console.log('User inserted successfully');
  } catch (err) {
    console.error('Error inserting user:', err);
  } finally {
    await client.end();
  }
}

// Insert a user (replace 'admin' with the desired username and password)
insertUser('admin', 'admin').catch(console.error);
