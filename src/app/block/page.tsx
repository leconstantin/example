"use client";
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Cover from "@/components/block/Cover";
import { Button } from "@/components/ui/button";

export default function page() {
  const [coverUrl, setCoverUrl] = useState<string>();

  const enableCover = async () => {
    // const randomImage = await fetch(
    //   "https://source.unsplash.com/random/landscape"
    // );
    setCoverUrl(
      "https://images.stockcake.com/public/4/b/d/4bd22aab-6c28-4f1a-aca0-e17082dc9e59_large/focused-software-developer-stockcake.jpg"
    );
  };

  const Editor = useMemo(
    () => dynamic(() => import("@/components/block/Editor"), { ssr: false }),
    []
  );

  return (
    <main className="min-h-screen">
      <Cover url={coverUrl} setUrl={setCoverUrl} />
      <div className="flex flex-col px-24 py-10 w-full">
        <div className="group flex flex-col gap-2">
          {!coverUrl && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <Button className="cursor-pointer" onClick={enableCover}>
                Add cover
              </Button>
            </div>
          )}
          <TextareaAutosize
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-3xl font-bold focus:outline-0"
            placeholder="Untitled"
          />
        </div>

        <Editor onChange={() => {}} />
      </div>
    </main>
  );
}
