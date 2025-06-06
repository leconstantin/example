import { cn } from "@/lib/utils";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import React from "react";

interface CoverProps {
  url?: string;
  setUrl: (_: string) => void;
}

export default function Cover({ url, setUrl }: CoverProps) {
  return (
    <div className={cn("relative w-full h-[35vh] bg-muted", !url && "hidden")}>
      {!!url && (
        <>
          <Image
            src={url}
            alt="Cover"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute w-[20%] h-[20%] right-0 bottom-0 group flex justify-center items-center">
            <UploadButton
              className="w-fit opacity-0 group-hover:opacity-100 transition-opacity ut-allowed-content:hidden ut-button:bg-neutral-200 ut-button:hover:bg-neutral-300 ut-button:text-neutral-800 ut-button:transition-colors"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                console.log("Upload completed. Files: ", res);
                setUrl(res[0].ufsUrl);
              }}
              onUploadError={(error: Error) => {
                console.log("Upload ERROR. Details: ", error.message);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
