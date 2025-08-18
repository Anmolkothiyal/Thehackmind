import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Service',
    default: 'Service',
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
