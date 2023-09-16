"use client";

import Hero from "@/libs/components/hero/Hero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { useEffect, useState } from "@/libs/hooks/hooks";
import dynamic from "next/dynamic";

const Direction = dynamic(() =>
  import("@/libs/components/ourDirections/Direction", {
    loading: () => <></>,
  })
);
const Response = dynamic(() => import("@/libs/components/response/Response"));
const AboutCompany = dynamic(() =>
  import("@/libs/components/about_company/AboutCompany", {
    ssr: false,
    loading: () => <p></p>,
  })
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    const scrollY = document.body.style.top;
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }, []);
  return (
    <>
      <Hero />
      <ContactPanel type={"home"} />
      {isClient && (
        <>
          <Direction />
          <AboutCompany type={"family"} />
          <Response type={"family"} />
        </>
      )}
    </>
  );
}
