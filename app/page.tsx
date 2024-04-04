"use client";

import { useQuery } from "react-query";

import {
  DataTable,
  ErrorState,
  LoadingState,
} from "@/components/data-table/data-table";

import { columns } from "@/components/data-table/columns";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";

async function fetchTags() {
  const res = await fetch(
    "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
  );
  if (!res.ok) throw new Error("Api Error");
  return res.json();
}

interface DataView {
  isLoading: boolean;
  error: any;
  data: any;
}

function DataView({ isLoading, error, data }: DataView) {
  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState />;
  }

  return <DataTable columns={columns} data={data.items} />;
}

export default function Home() {
  const { data, isLoading, error } = useQuery("tags", fetchTags, {
    staleTime: Infinity,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container h-screen mx-auto py-10">
        <Label className="text-[32px]">Stack Exchange Tags</Label>
        <DataView isLoading={isLoading} error={error} data={data} />
      </div>
    </main>
  );
}
