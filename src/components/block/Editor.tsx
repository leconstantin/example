"use client";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { uploadFiles } from "@/utils/uploadthing";

interface EditorProps {
  onChange: () => void;
  initialContent?: string;
  editable?: boolean;
}
export default function Editor({
  onChange,
  initialContent,
  editable,
}: EditorProps) {
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: async (file) => {
      const [res] = await uploadFiles("imageUploader", { files: [file] });
      return res.url;
    },
  });
  return (
    <div className="-mx-[54px] my-4">
      <BlockNoteView
        editor={editor}
        editable={editable}
        theme="light"
        onChange={onChange}
      />
    </div>
  );
}
