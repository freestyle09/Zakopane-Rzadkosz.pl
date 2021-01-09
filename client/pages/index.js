import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Siema</h1>
        <p>{counter}</p>

        <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}
