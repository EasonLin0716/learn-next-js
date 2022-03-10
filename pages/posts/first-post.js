import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Image
        src="/images/starlord.jpg"
        height={400}
        width={400}
        alt="star lord"
      />
      <p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </p>
    </>
  );
}
