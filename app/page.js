import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld from "@/components/helloWorld";

export default function Home() {
  return (
    <main className={styles.main}>
      <HelloWorld />
    </main>
  );
}
