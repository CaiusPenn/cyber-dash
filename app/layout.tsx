import { ChakraProvider } from "@chakra-ui/react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phishing Phighters',
  description: 'Sociotechnical Macroergonomic Dashboard',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
