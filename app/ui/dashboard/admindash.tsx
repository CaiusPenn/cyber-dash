import { Card } from '@/app/ui/dashboard/cards';
import { fetchPhishing, fetchLatestIncidents, fetchCardData } from '@/app/lib/data';
import { cookies } from 'next/headers';

export default async function adminDashboard(){
    const name = cookies().get('name')?.value
    const latestInvoices = await fetchLatestIncidents();
    const {
    numberOfIncidents,
      avgSecurity,
      avgIncidentSeverity,
  } = await fetchCardData();
    return(
        <main>
        <h1 className={` mb-4 text-xl md:text-2xl`}>
          Welcome {name}
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {<Card title="Total Incidents" value={numberOfIncidents} type="collected" /> }
          {<Card title="Average Security Security" value={avgSecurity} type="invoices" />}
          { <Card
            title="Average Incient Severity"
            value={avgIncidentSeverity}
            type="customers"
          /> }
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        </div>
      </main>
    );
}

