import localFont from 'next/font/local'

export const metadata = {
  title: "Dirah Destination",
  description: "Aldirah destination welcomes you!",
};

export default async function RootLayout({ children }) {

  return (
    <div lang="ar" dir="rtl">
          {children}
    </div>
  );
}
