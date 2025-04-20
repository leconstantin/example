"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
import Heading from "@tiptap/extension-heading";
import History from "@tiptap/extension-history";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Youtube from "@tiptap/extension-youtube";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Link from "@tiptap/extension-link";

export default function TipTap({
  content,
  onChange,
}: {
  content: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        history: false,
      }),
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
        },
        levels: [1, 2, 3, 4],
      }),
      History.configure({
        newGroupDelay: 1000,
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Youtube.configure({
        controls: false,
        nocookie: true,
      }),
      Color.configure(),
      TextStyle.configure(),
      Link.configure({
        HTMLAttributes: {
          class:
            "text-muted-foreground underline underline-offset-[5px] hover:text-primary transition-colors cursor-pointer",
        },
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[500px] border-input px-3 py-2 w-full bg-transparent text-base shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 md:text-base linear duration-200",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  return (
    <div className="border border-grid border-border rounded-xl min-h-[70vh] p-4 flex flex-col gap-5">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
