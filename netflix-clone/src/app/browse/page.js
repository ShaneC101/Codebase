"use client";

import CircleLoader from "@/components/circle-loader";
import ManageAccounts from "@/components/manage-accounts";
import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";
import PageLoader from "next/dist/client/page-loader";
import { useContext } from "react";
import { GlobalContext } from "../context";

export default function Browse() {
  const { loggedInAccount } = useContext(GlobalContext);
  const { data: session } = useSession();

  if (session === null) return <UnauthPage />;
  if (loggedInAccount === null) return <ManageAccounts />;
  if (PageLoader) return <CircleLoader/>

  return <div>Browse</div>;
}
