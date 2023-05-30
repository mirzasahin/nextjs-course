"use client";
import React from "react";
import styles from "./page.module.css";

const Page = () => {
  console.log(process.env.API_KEY);
  return (
    <>
      <div className={styles.container}>Road</div>
      <div className={`${styles["container-two"]} ${styles["lg-size"]}`}>Road</div>
    </>
  );
};

export default Page;
