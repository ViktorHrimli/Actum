"use client";

import { useState } from "@/libs/hooks/hooks";

import Hero from "@/libs/components/hero/Hero";
import Direction from "@/libs/components/ourDirections/Direction";
import AboutCompany from "@/libs/components/about_company/AboutCompany";
import Response from "@/libs/components/response/Response";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import { useEffect } from "react";

export default function Home() {
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsStart(true), 1500);
  }, []);

  return (
    <>
      <ContactPanel type={"home"} />
      <Hero />
      {isStart && (
        <>
          <Direction />
          <AboutCompany type={"family"} />
          <Response type={"family"} />
        </>
      )}
    </>
  );
}
