"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import TagInput from "@/components/TagInput";
import ButtonLoader from "@/components/ButtonLoader";
import type { Tag } from "emblor";
import { PlusSquare } from "lucide-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useAddBlogMutation } from "@/redux/features/blog.api";

// ✅ Zod schema
const createBlogZodSchema = z.object({
    title: z
        .string({ error: "Title is required" })
        .min(5, { message: "Title must be at least 5 characters" })
        .max(150, { message: "Title cannot exceed 150 characters" }),
    content: z
        .string({ error: "Content is required" })
        .min(20, { message: "Content must be at least 20 characters" }),
    tags: z.array(z.string()).optional(),
    thumbnail: z.string().url("Thumbnail must be an url"),
});

type BlogFormValues = z.infer<typeof createBlogZodSchema>;

export default function CreateBlogDialog({ isLoading }: { isLoading: boolean }) {
    const [open, setOpen] = useState(false);
    const [tags, setTags] = useState<Tag[]>([]);
    const [addBlog, {isLoading: addBlogLoading}] = useAddBlogMutation();

    const form = useForm<BlogFormValues>({
        resolver: zodResolver(createBlogZodSchema),
        defaultValues: {
            title: "",
            content: "",
            thumbnail: ""
        },
    });

    const onSubmit = async (data: BlogFormValues) => {
        const blogData = {
            ...data,
            tags: tags.map((tag) => tag.text),
        };


        console.log("Submitting blog data:", blogData);

        try {
            const response = await addBlog(blogData).unwrap();

            if (response.success) {
                toast.success("Blog added successfully!");
                setOpen(false);
                form.reset();
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("Failed to add blog:", error);
            toast.error(error?.data?.message || "Failed to add blog");
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button disabled={isLoading}><PlusSquare /> Add Blog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[700px] max-h-[calc(100vh-40px)] overflow-y-auto ">
                <DialogHeader>
                    <DialogTitle>Add Blog</DialogTitle>
                    <DialogDescription>Write your blog and click Add when you&apos;re done.</DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {/* Title */}
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter blog title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Content (Rich Text Editor) */}
                            <div>
                                <FormField
                                    control={form.control}
                                    name="content"
                                    render={({ field }) => (
                                        <FormItem className="mb-20">
                                            <FormLabel>Content</FormLabel>
                                            <FormControl>
                                                <ReactQuill
                                                    theme="snow"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    placeholder="Start writing your blog..."
                                                />
                                            </FormControl>
                                            <FormMessage className="mt-12" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Tags */}
                            <TagInput tags={tags} setTags={setTags} label="Tags" />

                            {/* Thumbnail */}
                            <FormField
                                control={form.control}
                                name="thumbnail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter thumbnail link" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit" disabled={isLoading || addBlogLoading}>
                                    {isLoading ? <ButtonLoader /> : "Add Blog"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
