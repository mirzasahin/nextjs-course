"use client"
import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  
  const pathname = usePathname();
  
  console.log(pathname);
  const routerRed = useRouter();
  return (
    <div>
      Page About
      <button onClick={() => routerRed.back()}>Back</button>
    </div>
  );
};

export default Page;

