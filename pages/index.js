import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Disc Connection</title>
        <meta name="description" content="Salg af golf discs og udstyr til disc golf ultimate freestyle DDC guts" />
        <link rel="icon" href="/DC_logo_new.ico" />
      </Head>

      <main>
        <h1>Welcome to our Exam Project - 4th Semester</h1>

        <h3>
          Go to <Link href="/productList">product list</Link>
        </h3>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
