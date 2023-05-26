import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Link href="/about">Yönlendirme 1</Link>
      <Link href="/about?name=mirza&surname=sahin">Yönlendirme 2</Link>{" "}
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
        src="https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={500}
        height={500}
      ></Image>
    </div>
  );
};

export default Page;
