import Image from "next/image";
import styles from "./page.module.css";
import axios from "@/lib/axios";
import { Book } from '@/mocks/types'
import Reviews from "@/components/Reviews";

export const revalidate = 5;

export default async function Home() {
  const book = await axios
    .get("http://my.backend/book")
    .catch((error) => null)
    .then((res): Book => {
      return res?.data ?? {'title': 'Failed to retrieve book.'};
    });

  if (!book.title.startsWith("Failed")) {
    console.log("Mock loaded!");
  }
  return (
    <main className={styles.main}>
      <div>
        {book.imageUrl && (
          <Image src={book.imageUrl} alt={book.title} width={250} height={400} />
        )}
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        <Reviews />
      </div>
    </main>
  );
}
