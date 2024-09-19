import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Phishing Phighters',
  description: 'Sociotechnical Macroergonomic Dashboard',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
