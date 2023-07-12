"use client";

import { useState } from "react";
import { Review } from "@/mocks/types";
import axios from "@/lib/axios";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[] | null>(null);

  const handleGetReviews = async () => {
    const reviews = await axios
      .get("/reviews")
      .catch((error) => null)
      .then((res): Review[] => {
        if(res && res.hasOwnProperty('data')) console.log("Mock loaded!");
        return res?.data ?? [];
      });
    setReviews(reviews);
  };

  return (
    <div style={{ maxWidth: "786px" }}>
      <button onClick={handleGetReviews}>Load reviews</button>
      {reviews && (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.text}</p>
              <p>{review.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
