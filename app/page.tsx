"use client"

import { redirect } from "next/navigation";

export default function Root() {
  redirect("/explore");
  return null;
}