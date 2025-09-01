"use client";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { IBlog } from "@/types/blog.types";
import { createExcerpt } from "@/lib/utils";

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut", // ✅ fixed
        },
    },
};

export default function BlogCard({ blog }: { blog: IBlog }) {
    const { title, slug, content, thumbnail } = blog;
    const excerpt = createExcerpt(content, 20);

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <Card className="rounded-2xl overflow-hidden shadow-lg">
                {thumbnail && (
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-48 object-cover"
                    />
                )}

                <CardContent className="p-4 space-y-2">
                    <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{excerpt}</p>

                    <Link to={`/blog/${slug}`}>
                        <Button variant="outline" size="sm" className="mt-2">
                            Read more
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </motion.div>
    );
}
