"use client";

import { useQuery } from "react-query";

import { DataTable } from "@/components/data-table/data-table";

import { columns } from "@/components/data-table/columns";

async function fetchTags() {
  const res = await fetch(
    "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  );
  if (!res.ok) throw new Error("Api Error");
  return res.json();
}

export default function Home() {
  const { data, isLoading } = useQuery("tags", fetchTags, {
    staleTime: Infinity,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto py-10">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <DataTable columns={columns} data={data.items} />
        )}
      </div>
    </main>
  );
}
