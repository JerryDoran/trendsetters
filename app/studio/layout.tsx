import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'TrendSetters',
  description: 'Ecommerce website for fashion',
};

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
