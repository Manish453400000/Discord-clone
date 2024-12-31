import {RedirectToSignIn} from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs/server"

import { db } from "./db"
import { redirect } from "next/navigation";

export const initialProfile = async() => {
  const user = await currentUser();

  if(!user){
    return redirect("/sign-up");
  }
}