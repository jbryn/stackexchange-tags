"use client";

import { useQuery } from "react-query";

async function fetchTags() {
  const res = await fetch(
    "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  );
  if (!res.ok) throw new Error("Api Error");
  return res.json();
}

export default function Home() {
  const { data, status } = useQuery("tags", fetchTags);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <ul>
        {qu.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
    </main>
  );
}
