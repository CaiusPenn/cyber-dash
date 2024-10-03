export type User = {
  id: number;
  email: string;
  password: string;
  dept: number;
  username: string;
};

export type Department = {
id: number;
name: string;
manager_id: number;
};

export type Incident = {
id: number
severity: number;
time: Date;
};

export type Social = {
id: number;
training: Boolean;
phishing_fail: number;
phishing_pass: number;
stress: number;
workload: number;
};

export type Organisational = {
id: number;
date: Date;
violations: number;
};

export type Technical = {
date: Date;
patch_coverage_ratio: number;
patch_deployment_time: number;
pending_patch_count: number;
os_patch_coverage_ratio: number;
os_patch_deployment_time: number;
os_pending_patch_count: number;
mfa: number;
admin_ratio: number;
app_control_alerts: number;
};