import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";

export default function applyMockAdapter(axiosInstance: AxiosInstance) {
  const mock = new MockAdapter(axiosInstance);

  mock.onGet("http://my.backend/book").reply(200, {
    title: "Lord of the Rings",
    imageUrl: "/book-cover.jpg",
    description:
      "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
  });
  mock.onGet("/reviews").reply(200, [
    {
      id: "60333292-7ca1-4361-bf38-b6b43b90cb16",
      author: "John Maverick",
      text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!",
    },
    {
      id: "60333292-7ca1-4361-bf38-b6b43b90cb15",
      author: "Jay Mul",
      text: "Issa good book",
    },
  ]);
}
