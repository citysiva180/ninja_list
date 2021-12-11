import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja"></meta>
      </Head>
      <div className={styles.row}>
        <h1 className={styles.title}>Home Page</h1>
        <div className={styles.column}>
          {" "}
          <p className={styles.text}>
            A ninja or shinobi was a covert agent or mercenary in feudal Japan.
            The functions of a ninja included espionage, deception, and surprise
            attacks.
          </p>
          <p className={styles.text}>
            If you are a fan of ninjas, you will be pleased to know that ninjas
            were indeed real. ... Shinobi lived in Japan between the 15th and
            17th Centuries. They were in two areas of Japan: Iga and Koga. The
            regions surrounding these two villages were ruled by samurai.
          </p>
        </div>
        <div className={styles.column}>
          <p className={styles.text}>
            Image result for Ninja Ninjas are often portrayed in movies as evil
            assassins who are paid to do the dirty work of a no-good villain. In
            reality, they were everyday people who were often harassed by the
            ruling class in Japan over 400 years ago
          </p>
        </div>

        <Link href="/ninjas">
          <a className={styles.btn}>Ninja List Articles</a>
        </Link>
      </div>
    </>
  );
}
