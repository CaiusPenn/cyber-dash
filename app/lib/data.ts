import { sql } from '@vercel/postgres';
import {Organisational,
  Incident,
} from './definitions';

export async function fetchPhishing() {
  try {
    const data = await sql<Organisational>`SELECT * FROM Organisational`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestIncidents() {
  try {
    const data = await sql<Incident>`
      SELECT *
      FROM incidents
      ORDER BY time DESC`;

    const latestIncidents = data.rows.map((invoice) => ({
      ...invoice,
    }));
    return latestIncidents;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest incidents.');
  }
}

export async function fetchIncidentsSeverity() {
  try {
    const data = await sql<Incident>`
      SELECT severity, COUNT(*)
      FROM incidents
      GROUP BY severity`;

    const incidentSeverity = data.rows.map((invoice) => ({
      ...invoice,
    }));
    return incidentSeverity;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest incidents.');
  }
}


export async function fetchPolicy() {
  try {
    const data = await sql<Organisational>`
      SELECT *
      FROM organisational
      ORDER BY date DESC`;

    const latestPolicies = data.rows.map((policy) => ({
      ...policy,
    }));
    return latestPolicies;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest policies.');
  }
}



export async function fetchTechnicalData() {
  try {
    const patchCoveragePromise = sql`SELECT AVG(patch_coverage_ratio) from technical`;
    const patchDeploymentPromise = sql`SELECT AVG(patch_deployment_time) from technical`;
    const pendingPatchPromise = sql`SELECT SUM(pending_patch_count) from technical`;
    const osPatchCoveragePromise = sql`SELECT AVG(patch_coverage_ratio) from technical`;
    const osPatchDeploymentPromise = sql`SELECT AVG(patch_deployment_time) from technical`;
    const osPendingPatchPromise = sql`SELECT SUM(pending_patch_count) from technical`;
    
    

    const data = await Promise.all([
      patchCoveragePromise,
      patchDeploymentPromise,
      pendingPatchPromise,
      osPatchCoveragePromise,
      osPatchDeploymentPromise,
      osPendingPatchPromise


    ]);

    const patchCoverage = Number(data[0].rows[0].avg ?? '0');
    const patchDeployment = Number(data[1].rows[0].avg ?? '0');
    const pendingPatch = Number(data[2].rows[0].sum ?? '0');
    const osPatchCoverage = Number(data[3].rows[0].avg ?? '0');
    const osPatchDeployment = Number(data[4].rows[0].avg ?? '0');
    const osPendingPatch = Number(data[5].rows[0].sum ?? '0');
    

    return {
      patchCoverage,
      patchDeployment,
      pendingPatch,
      osPatchCoverage,
      osPatchDeployment,
      osPendingPatch,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchChartData(){
  try {
    const mfaPromise = sql`SELECT to_char(date,'DD-MM-YYYY'),mfa from technical order by date`;
    const adminRatioPromise = sql`SELECT to_char(date,'DD-MM-YYYY'),admin_ratio from technical order by date`;
    const appContolPromise = sql`select to_char(date,'DD-MM-YYYY'),app_control_alerts from technical order by date`;
    
    const data = await Promise.all([
        mfaPromise,
      adminRatioPromise,
      appContolPromise
    ]);
    
    const mfa = (data[0].rows?? '0');
    const adminRatio = (data[1].rows?? '0');
    const appControl = (data[2].rows?? '0');
    return {
        mfa,
      adminRatio,
      appControl
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchUniqueUsers(){
  try{
    const uniqueUsersPromise = sql`SELECT count(DISTINCT user_id) FROM ANSWERS`;
    const data = await uniqueUsersPromise;

    const uniqueUsers = (data.rows ?? '0');
    return uniqueUsers;

  } catch(error) {
    console.error('Databse error: ',error);
    throw new Error('Failed to fetch unique users');
  }
}