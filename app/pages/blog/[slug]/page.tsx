import React from "react";
import formatDate from "@/app/functions/formatDate";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import blogimg from '../../../assets/images/blog.jpg'
import Link from "next/link";
async function getData(slug: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PORT}/api/blog/view/${slug}`,
    {}
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_PORT}/api/blog/view/${slug}`,
    {}
  ).then((res) => res.json());
  const post = data?.data[0];
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    openGraph: {
      images: [post?.image, ...previousImages],
    },
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const data = await getData(params?.slug);
  const post = data?.data[0];
  const publishedAt = formatDate(new Date(post?.publishedAt));

  return (
    <div className="px-4 lg:px-0 lg:w-11/12 m-auto pt-6 lg:pt-12 pb-28 border-b">
      <div className="bg-gray-50  rounded-xl lg:rounded-xl py-2   lg:py-5 relative shadow-sm ">
        <div className="bg-white  rounded-3xl invisible lg:visible   ml-3    px-2 p-1 w-fit text-sm lg:text-md absolute">
          <p>Home / Blog</p>
        </div>

        <h2 className="text-center  text-xl lg:text-3xl text-gray-600 font-bold">
          Blog
        </h2>
      </div>
      <div className=" mt-10 lg:mt-24 lg:w-9/12 m-auto grid lg:grid-cols-3 lg:gap-20">
        <div className="lg:col-span-2">
        <h1 className="font-bold text-2xl text-center"> {post?.title}</h1>
        <h6 className="text-center mt-3 text-gray-600">
          {publishedAt} | Admin
        </h6>

        <div className="mt-10">
          <img
            src={post?.image}
            alt="Best Tajweed Course Online, Quran Classes, Noorify Quran Class,GCC Quran Learning,Global Quran Academy,Global Online quran, Online Tajweed,Lady quran teacher"
            className="m-auto"
          />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: post?.content }}
          className="mt-10"
        />
        </div>
        <div className="mt-10">
          <Image src={blogimg?.src} width={400} height={100} alt=""/>
          <Link href={"/pages/register"}>
                <button className="bg-emerald-500 w-full mt-1   p-1 px-3 rounded-sm text-white  hover:scale-105  transition ease-linear duration-100 cursor-poin">
                  Register Now
                </button>
              </Link>
        </div>
      </div>    
    </div>
  );
}

// export async function generateStaticParams() {
//   const posts = await fetch(
//     `${process.env.NEXT_PUBLIC_PORT}/api/publishedBlog`,
//     {}
//   ).then((res) => res.json());

//   return posts?.data?.map((post: any) => ({
//     slug: post.slug,
//   }));
// }
