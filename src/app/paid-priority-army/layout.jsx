import Head from "next/head";
import Scripts from "@/shared/components/scripts/Scripts";


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <Scripts />
      </Head>
      <>
        <main>{children}</main>
      </>
    </>
  )
}