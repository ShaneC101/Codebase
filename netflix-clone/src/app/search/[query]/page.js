"use client";

import ManageAccounts from "@/components/manage-accounts";
import UnauthPage from "@/components/unauth-page";
import { GlobalContext } from "@/app/context";
import { useSession } from "next-auth/react";
import { useContext } from "react";

export default function Search() {
  const { loggedInAccount } = useContext(GlobalContext);

  const {data: session} = useSession();

  if(session === null) return <UnauthPage />;
  if (loggedInAccount === null) return <ManageAccounts />;

  return <div>Search</div>;
}
