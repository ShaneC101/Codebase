"use client";

import CircleLoader from "@/components/circle-loader";
import CommonLayout from "@/components/common-layout";
import ManageAccounts from "@/components/manage-accounts";
import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";
import PageLoader from "next/dist/client/page-loader";
import { useContext } from "react";
import { GlobalContext, useEffect } from "../context";

export default function Browse() {
  const { 
  loggedInAccount,
  mediaData,
  setMediaData,
  setPageLoader,
  pageLoader,
 } = useContext(GlobalContext);

  const { data: session } = useSession();

  console.log(session, "session");


  if (session === null) return <UnauthPage />;
  if (loggedInAccount === null) return <ManageAccounts />;
  if (PageLoader) return <CircleLoader/>

  console.log(mediaData);

  return (
    <main className="flex min-h-screen flex-col">
       <CommonLayout mediaData={mediaData} />
    </main>
  )
  
}
