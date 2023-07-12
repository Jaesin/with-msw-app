import Image from "next/image";
import styles from "./page.module.css";
import { Book, Review } from "../../mocks/types";

export default async function Home() {
  const handleGetReviews = () => {
    // Client-side request are mocked by `mocks/browser.ts`.
    const reviews = fetch("/reviews").then((res) => res.json());
  };

  // Server-side requests are mocked by `mocks/server.ts`.
  console.log(`[Home] Process ID: ${process.pid}`);
  const res = await fetch("http://my.backend/book", { cache: 'no-store' });
  const book = res.ok
    ? await res.json()
    : {
        title: "Failed to load mock data",
        imageUrl: "",
        description: "",
      };
  if (book.title.startsWith("Failed")) {
    console.log("[Home] Failed to load mock data");
  }

  return (
    <main className={styles.main}>
      <div>
        {book.imageUrl && (
          <Image
            src={book.imageUrl}
            alt={book.title}
            width="250"
          />
        )}
        <h1>{book.title}</h1>
        <p>{book.description}</p>
      </div>
    </main>
  );
}
