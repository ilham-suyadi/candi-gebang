/* eslint-disable @next/next/no-async-client-component */
"use client";

import Link from "next/link";
import { Blog } from "../../lib/api";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default async function DetailPage() {
  const queryParams = useSearchParams();
  const id: any = queryParams.get("id");
//   const posts: Blog[] = await Blog();

  console.log(id);

  return (
    <div className="bg-white py-4">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          Blogs
        </h2>
        <p className="mt-2 text-sm leading-8 text-gray-600">Ditulis Oleh:</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-2"></div>
    </div>
  );
}
