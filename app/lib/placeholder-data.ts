// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: 4001,
    name: 'User4',
    email: 'user4@nextmail.com',
    password: '123456',
    job_title: 'manager',
    dept: 309
  },
  {
    id: 5001,
    name: 'User5',
    email: 'user5@nextmail.com',
    password: '123456',
    job_title: 'manager',
    dept: 401
  },
  {
    id: 1001,
    name: 'User1',
    email: 'user1@nextmail.com',
    password: '123456',
    job_title: 'manager',
    dept: 521
  },
];

const department = [
  {
    dept: 521,
    dept_name: 'HR',
    manager_id: 1001,
  },
  {
    dept: 401,
    dept_name: 'Accounting',
    manager_id: 5001,
  },
  {
    dept: 309,
    dept_name: 'IT',
    manager_id: 4001,
  },
];

const organisational = [
  { dept: 521, sec_culture:6, phishing_fails: 7 },
  { dept: 401, sec_culture:6, phishing_fails: 1 },
  { dept: 309, sec_culture:4, phishing_fails: 4 },
];

const individual = [
  {id:4001,training_date:'2019-10-30',workload:5, stress:5, sec_awareness:9},
  {id:5001,training_date:'2022-11-03',workload:9, stress:4, sec_awareness:3},
  {id:1001,training_date:'2024-01-30',workload:7, stress:2, sec_awareness:9},
];

const technical = [
  {incident_id:1100, type:'Phishing', severity:2, response_time:2, dept:521},
  {incident_id:2100, type:'Data Breach', severity:9, response_time:17, dept:401},
  {incident_id:3400, type:'Phishing', severity:2, response_time:6, dept:309},
];

export { users, department, organisational, individual, technical};
