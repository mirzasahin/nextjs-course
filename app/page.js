import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Roboto } from "next/font/google";
import { cookies } from "next/headers";
import Trial from "./trial";
import { redirect } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchData1 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

// const fetchData2 = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

const Page = async () => {
  await sleep(3000);
  const newCookies = cookies();
  // console.log(newCookies.getAll());
  let nav1 = false;

  const data1 = await fetchData1();

  // const data2 = await fetchData2();

  console.log(data1[0].name);

  // const resultData = await Promise.all([data1, data2]);

  // console.log("Result Çıktısı", resultData[0][0].name.common);

  if (nav1) {
    redirect("about");
  }

  return (
    <div>
      <Link className={inter.className} href="/about">
        Yönlendirme 1
      </Link>
      <Link className={roboto.className} href="/about?name=mirza&surname=sahin">
        Yönlendirme 2
      </Link>{" "}
      {/* alttaki işlem ile bu işlem aynı. */}
      <Link
        href={{
          pathname: "/about",
          query: {
            name: "mirza",
          },
        }}
      >
        Yönlendirme 3
      </Link>
      <Image
        alt="photo"
        src="https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={500}
        height={500}
      ></Image>
      <Trial />
    </div>
  );
};

export default Page;
