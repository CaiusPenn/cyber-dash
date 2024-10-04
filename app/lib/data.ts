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
      ORDER BY severity DESC`;

    const latestIncidents = data.rows.map((invoice) => ({
      ...invoice,
    }));
    return latestIncidents;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invcidents.');
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