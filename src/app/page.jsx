"use client";

import Hero from "@/libs/components/hero/Hero";
import Direction from "@/libs/components/ourDirections/Direction";
import AboutCompany from "@/libs/components/about_company/AboutCompany";
import Response from "@/libs/components/response/Response";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { useState, useEffect } from "@/libs/hooks/hooks";

export default function Home() {
  const [isEndAnimation, setisEndAnimation] = useState(false);
  useEffect(() => setTimeout(() => setisEndAnimation(true)), 3000);
  return (
    <>
      <Hero />
      {isEndAnimation && (
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
