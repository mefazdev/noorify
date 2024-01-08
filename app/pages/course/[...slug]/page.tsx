import React from "react";
import Component from "./Component";
import Highlight from "@/app/Highlight";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title:
      params?.slug[0]?.toUpperCase()?.replace(/-/g, " ") +
      " | Noorifiy Online Academy",
     description: params?.slug[1].replace(/%20/g, " ").replace(/%2c/g, ','),
  };
}
export default async function page({ params }: { params: { slug: string } }) {
  const slug = params?.slug[0];

  return (
    <div>
      <div className="pt-10 lg:pt-16   border-gray-300 ">
        <Component slug={slug} />
      </div>
      <Highlight />
    </div>
  );
}
