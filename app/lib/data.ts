import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  LatestIncident,
  Phishing,
} from './definitions';
import { formatCurrency } from './utils';

export async function fetchPhishing() {
  try {
    const data = await sql<Phishing>`SELECT * FROM Organisational`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestIncidents() {
  try {
    const data = await sql<LatestIncident>`
      SELECT department.dept, department.dept_name, technical.type, technical.severity
      FROM technical
      JOIN department ON department.dept = technical.dept
      ORDER BY technical.severity DESC`;

    const latestIncidents = data.rows.map((invoice) => ({
      ...invoice,
    }));
    return latestIncidents;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invcidents.');
  }
}

export async function fetchCardData() {
  try {
    const incidentCountPromise = sql`SELECT COUNT(*) FROM technical`;
    const secCulturePromise = sql`SELECT AVG(sec_culture) FROM organisational`;
    const severityPromise = sql`SELECT
         AVG(severity) FROM technical`;

    const data = await Promise.all([
      incidentCountPromise,
      secCulturePromise,
      severityPromise,
    ]);

    const numberOfIncidents = Number(data[0].rows[0].count ?? '0');
    const avgSecurity = Number(data[1].rows[0].count ?? '0');
    const avgIncidentSeverity = Number(data[2].rows[0].count ?? '0');
    

    return {
      numberOfIncidents,
      avgSecurity,
      avgIncidentSeverity,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}



export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}
