// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
    {
      id: 4001,
      email: 'user4@nextmail.com',
      password: '123456',
      department_id: 309,
      username: 'Mary Jane'
    },
    {
      id: 5001,
      email: 'user5@nextmail.com',
      password: '123456',
      department_id: 401,
      username: 'John Doe'
    },
    {
      id: 1001,
      email: 'user1@nextmail.com',
      password: '123456',
      department_id: 521,
      username: 'Jane Doe'
    },
    {
      id: 2001,
      email: 'user2@nextmail.com',
      password: '123456',
      department_id: 521,
      username: 'Jerry Doe'
    },
    {
      id: 3001,
      email: 'user3@nextmail.com',
      password: '123456',
      department_id: 521,
      username: 'Michael Doe'
    },
    {
      id: 6001,
      email: 'user6@nextmail.com',
      password: '123456',
      department_id: 521,
      username: 'Glen Doe'
    },
  ];
  
  const departments = [
    {
      id: 521,
      name: 'HR',
      manager_id: 1001,
    },
    {
      id: 401,
      name: 'Accounting',
      manager_id: 5001,
    },
  ];

  const incidents = [
    {
      id: 97650,
      severity: 6,
      time: '2024-05-11',
    },
    {
      id: 23419,
      severity: 2,
      time: '2024-07-21',
    },
    {
      id: 90113,
      severity: 4,
      time: '2024-01-16',
    },
    {
        id: 11113,
        severity: 7,
        time: '2024-01-16',
      },
    {
      id: 73241,
      severity: 9,
      time: '2024-03-08',
    },
    {
      id: 11234,
      severity: 1,
      time: '2023-12-11',
    }, {
      id: 88742,
      severity: 4,
      time: '2024-06-13',
    }, {
      id: 76152,
      severity: 3,
      time: '2024-09-16',
    },{
        id: 16052,
        severity: 4,
        time: '2024-09-16',
      }
  ];

  const social = [
    {
      id: 4001,
      training: true,
      phishing_fail: 2,
      phishing_pass: 7,
      stress: 8,
      workload: 4,
    },
    {
      id: 5001,
      training: true,
      phishing_fail: 9,
      phishing_pass: 2,
      stress: 2,
      workload: 3,
    },
    {
      id: 1001,
      training: false,
      phishing_fail: 3,
      phishing_pass: 2,
      stress: 6,
      workload: 4,
    }
  ];

  const organisational = [
    {
      id: 98172,
      date: '2024-08-11',
      violations: 0,
    },
    {
      id: 22819,
      date: '2024-07-23',
      violations: 0,
    },
    {
      id: 93222,
      date: '2024-01-15',
      violations: 3,
    },
    {
      id: 12571,
      date: '2024-09-10',
      violations: 1,
    },
    {
      id: 54261,
      date: '2023-12-30',
      violations: 5,
    },
    {
      id: 43217,
      date: '2024-04-02',
      violations: 1,
    }
  ];

  const technical = [
    {
      date: '2022-12-13',
      patch_coverage_ratio: 88,
      patch_deployment_time: 25,
      pending_patch_count: 3,
      os_patch_coverage_ratio: 18,
      os_patch_deployment_time: 21,
      os_pending_patch_count: 1,
      mfa:20 ,
      admin_ratio: 2,
      app_control_alerts: 34,
    },
    {
      date: '2024-01-11',
      patch_coverage_ratio: 98,
      patch_deployment_time: 35,
      pending_patch_count: 1,
      os_patch_coverage_ratio: 8,
      os_patch_deployment_time: 12,
      os_pending_patch_count: 4,
      mfa:13 ,
      admin_ratio: 4,
      app_control_alerts: 14,
    },{
      date: '2023-07-29',
      patch_coverage_ratio: 78,
      patch_deployment_time: 31,
      pending_patch_count: 12,
      os_patch_coverage_ratio: 15,
      os_patch_deployment_time: 11,
      os_pending_patch_count: 5,
      mfa:7 ,
      admin_ratio: 5,
      app_control_alerts: 14,
    },{
      date: '2024-02-23',
      patch_coverage_ratio: 91,
      patch_deployment_time: 46,
      pending_patch_count: 5,
      os_patch_coverage_ratio: 13,
      os_patch_deployment_time: 41,
      os_pending_patch_count: 8,
      mfa:11 ,
      admin_ratio: 9,
      app_control_alerts: 12,
    },{
      date: '2023-08-03',
      patch_coverage_ratio: 84,
      patch_deployment_time: 38,
      pending_patch_count: 8,
      os_patch_coverage_ratio: 76,
      os_patch_deployment_time: 32,
      os_pending_patch_count: 5,
      mfa:67 ,
      admin_ratio: 9,
      app_control_alerts: 19,
    }
  ];

  export { users, departments, incidents, social, organisational, technical};
  