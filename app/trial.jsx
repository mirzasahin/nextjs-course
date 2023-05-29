"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Trial = () => {
  const routerRed = useRouter();
  console.log("trial kardeş");
  return (
    <>
      <button onClick={() => routerRed.push('/about')} >Push</button>
      <button onClick={() => routerRed.back()} >Back</button>
      <button onClick={() => routerRed.forward()} >Push</button>
      <button onClick={() => routerRed.refresh()} >Refresh</button>
    </>
  );
};

export default Trial;
