"use client";

import Hero from "@/libs/components/hero/Hero";
import Direction from "@/libs/components/ourDirections/Direction";
import AboutCompany from "@/libs/components/about_company/AboutCompany";
import Response from "@/libs/components/response/Response";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { useState, useEffect } from "@/libs/hooks/hooks";

export default function Home() {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoad(true), 3200);

    document.body.style.overflow = "hidden";

    return () => {
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 4000);
    };
  }, []);
  return (
    <>
      <Hero />
      {isLoad && (
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
