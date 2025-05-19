import ClientDestinationDetail from './ClientDestinationDetail';

export function generateStaticParams() {
  return [
    { city: 'mumbai' },
    { city: 'delhi' },
    { city: 'jaipur' },
    { city: 'goa' },
    { city: 'kochi' },
    { city: 'varanasi' },
  ];
}

export default function Page() {
  return <ClientDestinationDetail />;
} 