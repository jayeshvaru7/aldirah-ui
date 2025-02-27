import localFont from 'next/font/local'
import "./globals.css";

export const metadata = {
  title: "Dirah Destination",
  description: "Aldirah destination welcomes you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}

        <link rel="stylesheet" href="/css/custom.css" />
      </body>
    </html>
  );
}
