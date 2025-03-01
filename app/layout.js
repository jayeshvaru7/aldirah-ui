import localFont from 'next/font/local'
import "./globals.css";

export const metadata = {
  title: "Dirah Destination",
  description: "Aldirah destination welcomes you!",
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en" dir="ltr">
      <body >
          {children}

        <link rel="stylesheet" href="/css/custom.css" />
      </body>
    </html>
  );
}
