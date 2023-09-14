"use client";

import Hero from "@/libs/components/hero/Hero";
import Direction from "@/libs/components/ourDirections/Direction";
import AboutCompany from "@/libs/components/about_company/AboutCompany";
import Response from "@/libs/components/response/Response";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

import { useState, useEffect } from "@/libs/hooks/hooks";
import dynamic from "next/dynamic";

// const Hero = dynamic(() => import("@/libs/components/hero/Hero"));
// const Direction = dynamic(() =>
//   import("@/libs/components/ourDirections/Direction")
// );
// const Response = dynamic(() => import("@/libs/components/response/Response"));
// const AboutCompany = dynamic(() =>
//   import("@/libs/components/about_company/AboutCompany")
// );

export default function Home() {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoad(true), 3700);

    const scrollY = document.body.style.top;
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }, []);
  return (
    <>
      {/* <Hero /> */}
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

// export default function Home() {

//   const [isLoad, setIsLoad] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setIsLoad(true), 3800);

//     document.body.style.overflow = "hidden";

//     return () => {
//       setTimeout(() => {
//         document.body.style.overflow = "auto";
//       }, 3500);
//     };
//   }, []);
//   return (
//     <>
//       <Hero />
//       {isLoad && (
//         <>
//           <ContactPanel type={"home"} />
//           <Direction />
//           <AboutCompany type={"family"} />
//           <Response type={"family"} />
//         </>
//       )}
//     </>
//   );
// }
