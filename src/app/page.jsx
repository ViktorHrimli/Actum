"use client";

import Hero from "@/libs/components/hero/Hero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { useEffect, useState, useClient } from "@/libs/hooks/hooks";

import dynamic from "next/dynamic";

const Direction = dynamic(() =>
  import("@/libs/components/ourDirections/Direction")
);
const Response = dynamic(() => import("@/libs/components/response/Response"));
const AboutCompany = dynamic(() =>
  import("@/libs/components/about_company/AboutCompany")
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  let isFristRender = true;

  if (typeof window !== "undefined") {
    isFristRender = JSON.parse(sessionStorage.getItem("hero_page") || true);
  }

  useEffect(() => {
    if (isFristRender) {
      setTimeout(() => setIsClient(true), 3000);

      const scrollY = document.body.style.top;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    } else {
      setIsClient(true);
    }
  }, []);

  return (
    <>
      <Hero type={"home"} />
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
