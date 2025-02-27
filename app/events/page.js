import Image from "next/image";
import Link from 'next/link'

import Header from './../layouts/header'
import Footer from './../layouts/footer'

export default function Home() {
  const imageStyle = {
        objectFit: "cover",

    }

  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-[#E9E4D9]">
      <div className="bg-[#DF8C6A]--">
        <Header />

        <div className="custom-container my-[100px]">
          <h3 className="text-8xl">This is the events page</h3>
        </div>
      </div>  	
        <Footer />
    </div>
  );
}
