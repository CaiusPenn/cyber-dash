import { sql } from '@vercel/postgres';
import {Organisational,
  Incident,
} from './definitions';
import { number } from 'zod';

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

export async function IncidentsbyDate(){
  try{
    const data = await sql`SELECT time,COUNT(*)
    FROM INCIDENTS
    GROUP BY TIME
    ORDER BY TIME`;

    const count = data.rows;
    return count;
  }catch(error){
    console.error('Database error',error);
    throw new Error ('Failed to fetch incidents by date');
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
    const osPatchCoveragePromise = sql`SELECT AVG(os_patch_coverage_ratio) from technical`;
    const osPatchDeploymentPromise = sql`SELECT AVG(os_patch_deployment_time) from technical`;
    const osPendingPatchPromise = sql`SELECT SUM(os_pending_patch_count) from technical`;
    
    

    const data = await Promise.all([
      patchCoveragePromise,
      patchDeploymentPromise,
      pendingPatchPromise,
      osPatchCoveragePromise,
      osPatchDeploymentPromise,
      osPendingPatchPromise


    ]);

    console.log(data);

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
    const uniqueUsersPromise = sql`SELECT DISTINCT user_id FROM ANSWERS`;
    const data = await uniqueUsersPromise;
    const uniqueUsersCount = (data.rowCount);
    const uniqueUsers = (data.rows ?? '0');
    return {uniqueUsers,uniqueUsersCount};

  } catch(error) {
    console.error('Databse error: ',error);
    throw new Error('Failed to fetch unique users');
  }
}

export async function fetchCategories(){
  try{
    const uniqueCategoriesPromise = sql`SELECT DISTINCT category FROM QUESTIONS`;
    const data = await uniqueCategoriesPromise;

    const uniqueCategories = (data.rows ?? '0');
    return uniqueCategories;

  } catch(error) {
    console.error('Databse error: ',error);
    throw new Error('Failed to fetch unique users');
  }
}

export async function fetchScores(){
  try{
    const answersPromise = sql`SELECT * FROM answers join questions on questions.id=answers.question_id order by user_id`;
    const usersTemp = await fetchUniqueUsers();
    const users = (usersTemp.uniqueUsers);
    const categories = await fetchCategories();
    let score = new Map;
    let category = new Map;

    for (let i =0; i<categories.length; i++){
      category.set(categories[i].category,0);
    }

    for (let i=0; i<users.length; i++){
      score.set(users[i].user_id,0);
    }
    const data = await answersPromise;
    const negScored = [1,2,4,6,7,9,11,12,14,16,18,21,
      22,24,25,26,30,32,34,37,38,40,41,
      44,47,50,52,54,55,56,62
    ];
    const answers = (data.rows ?? '0');

    for (let j = 0;j < users.length; j++){
      let user = users[j].user_id;
      let tempScore = 0;
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].user_id == user){
          if (negScored.includes(Number(answers[i].question_id))){
            tempScore = tempScore + -1*(Number(answers[i].answer));
          }
          else{
            tempScore = tempScore + Number(answers[i].answer);
          }
        }
      }
      score.set(user,tempScore);
    }

    for (let j = 0;j < categories.length; j++){
      let cat = categories[j].category;
      let tempScore = 0;
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].category == cat){
          if (negScored.includes(Number(answers[i].question_id))){
            tempScore = tempScore + -1*(Number(answers[i].answer));
          }
          else{
            tempScore = tempScore + Number(answers[i].answer);
          }
        }
      }
      category.set(cat,tempScore);
    }
  
    return {score,category};

  } catch(error) {
    console.error('Databse error: ',error);
    throw new Error('Failed to fetch answers');
  }
}

export async function fetchStress(){
  try{
    const stressPromise = sql`SELECT avg(answer),department_id 
    from answers join users on users.id=answers.user_id 
    where question_id=64 group by(department_id)`;
    const data = await stressPromise;

    const stress = (data.rows ?? '0');
    let stressData = new Map();
    
    for (let i = 0;i<stress.length; i++){
      stressData.set(String(stress[i].department_id),Number(stress[i].avg));
    }
    return stressData;

  } catch(error) {
    console.error('Databse error: ',error);
    throw new Error('Failed to fetch stress');
  }
}