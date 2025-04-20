import { Editor } from "@tiptap/react";
import { Toggle } from "./ui/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Bold,
  ChevronDown,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Italic,
  Link,
  List,
  ListOrdered,
  ListTodo,
  Redo2,
  Strikethrough,
  Undo2,
} from "lucide-react";
import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

type Props = {
  editor: Editor | null;
};
export default function Toolbar({ editor }: Props) {
  if (!editor) return null;

  return (
    <div className="border border-input bg-transparent rounded bg-white">
      <div className="flex gap-1 p-1">
        <Toggle
          size="sm"
          pressed={editor.isActive("undo")}
          onPressedChange={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo2 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("redo")}
          onPressedChange={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo2 className="h-4 w-4" />
        </Toggle>
        <Separator orientation="vertical" />
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>H</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <Toggle
                      size="sm"
                      pressed={editor.isActive("heading", { level: 1 })}
                      onPressedChange={() =>
                        editor.chain().focus().toggleHeading({ level: 1 }).run()
                      }
                      className="flex items-center gap-2"
                    >
                      <Heading1 className="h-4 w-4" />
                      <p className="text-nowrap">Heading 1</p>
                    </Toggle>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Toggle
                      size="sm"
                      pressed={editor.isActive("heading", { level: 2 })}
                      onPressedChange={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                      }
                    >
                      <Heading2 className="h-4 w-4" />
                      <p>Heading 2</p>
                    </Toggle>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Toggle
                      size="sm"
                      pressed={editor.isActive("heading", { level: 3 })}
                      onPressedChange={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                      }
                    >
                      <Heading3 className="h-4 w-4" />
                      <p>Heading 3</p>
                    </Toggle>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <Toggle
                      size="sm"
                      pressed={editor.isActive("heading", { level: 4 })}
                      onPressedChange={() =>
                        editor.chain().focus().toggleHeading({ level: 4 }).run()
                      }
                    >
                      <Heading4 className="h-4 w-4" />
                      <p>Heading 4</p>
                    </Toggle>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="ghost">
              H
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem></DropdownMenuItem>
            <DropdownMenuItem>
              <Toggle
                size="sm"
                pressed={editor.isActive("heading")}
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
              >
                <Heading2 className="h-4 w-4" />
                <p>Heading 2</p>
              </Toggle>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Toggle
                size="sm"
                pressed={editor.isActive("heading")}
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
              >
                <Heading3 className="h-4 w-4" />
                <p>Heading 3</p>
              </Toggle>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Toggle
                size="sm"
                pressed={editor.isActive("heading")}
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
              >
                <Heading4 className="h-4 w-4" />
                <p>Heading 4</p>
              </Toggle>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
