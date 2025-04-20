"use client";
import React from "react";
import { SiteHeader } from "./site-header";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import TipTap from "./tiptap";
import { toast } from "sonner";
const formSchema = z.object({
  title: z.string().min(5, { message: "hey title is not to long enough" }),
  content: z.string(),
});

type TformSchema = z.infer<typeof formSchema>;

export default function ContentEditor() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "Delete this default content",
    },
  });
  const onSubmit = (data: TformSchema) => {
    toast.success(
      <div>
        <strong>You submitted the following values:</strong>
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    );
  };
  return (
    <>
      <main className="shadow-lg bg-white rounded-lg max-w-5xl mx-auto min-h-[400px] ring-3 ring-secondary w-full">
        <SiteHeader />
        <Form {...form}>
          <form
            className="space-y-6 p-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Main title for your content"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <TipTap content={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </main>
    </>
  );
}
