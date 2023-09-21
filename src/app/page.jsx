"use client";

import Hero from "@/libs/components/hero/Hero";
import Direction from "@/libs/components/ourDirections/Direction";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { useEffect, useState } from "@/libs/hooks/hooks";

import dynamic from "next/dynamic";

const Response = dynamic(() => import("@/libs/components/response/Response"));
const AboutCompany = dynamic(() =>
  import("@/libs/components/about_company/AboutCompany")
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsClient(true), 3000);
    setIsLoad(true);

    const scrollY = document.body.style.top;
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }, []);

  return (
    <>
      <Hero type={"home"} />

      {isClient && (
        <>
          <ContactPanel type={"home"} />
          <Direction />

          <AboutCompany type={"family"} />
          <Response type={"family"} />
        </>
      )}
    </>
  );
}
