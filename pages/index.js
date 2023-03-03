import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import products from "../products.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Jelly Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 width={180} height={37} priority className={styles.mainTitle}>
            Space Jelly Shop
          </h1>
          <p className={inter.className}>
            The best space jellyfish swag on the universe!
          </p>
        </div>
        <ul className={styles.grid}>
          {products.map((product) => {
            const { title, price, image, description, id } = product;
            return (
              <li className={styles.card} key={id}>
                <a
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image} alt={title} style={{ maxWidth: "100%" }} />
                  <h2 className={inter.className}>
                    {title}
                    <span>-&gt;</span>
                  </h2>
                  <p>${price}</p>
                  <p className={inter.className}>{description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
