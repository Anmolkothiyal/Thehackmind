import { ourWorkMap } from '@/app/_constants';
import OurWorkClient from './OurWorkClient';

export async function generateStaticParams() {
  // Generate static paths for all possible `website` values
  return ourWorkMap.map((el) => ({
    website: el.title,  // This is expected to be a string
  }));
}

export default async function OurWork({ params }: { params: Promise<{ website: string }> }) {
  // Await the params since they're now a Promise in Next.js 15+
  const { website } = await params;
  
  // Find the data for the website based on the `website` param.
  const data = ourWorkMap.find((el) => website === el.title);

  // If no matching data is found, show an error.
  if (!data) {
    return <div>Error: Internal Server Error. Please try again.</div>;
  }

  // Pass the data to the client component
  return <OurWorkClient data={data} />;
}