import { useParams, Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useGetBlogsQuery } from "@/redux/features/blog.api";
import DOMPurify from "dompurify";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import myImage from "@/assets/images/margub-murshed-image.png";
import { useGetMargubQuery } from "@/redux/features/auth.api";

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BlogDetails() {
    const { slug } = useParams<{ slug: string }>();
    const { data:blogsData, isFetching:blogsLoading } = useGetBlogsQuery({ slug });
    const { data: margubData, isFetching:margubLoading } = useGetMargubQuery();

    const blog = blogsData?.data?.[0];


    if (blogsLoading || margubLoading) {
        return <p className="text-center py-10">Loading...</p>;
    }


    const cleanContent = DOMPurify.sanitize(blog!.content, {
        ALLOWED_TAGS: [
            "p", "br", "b", "i", "u", "strong", "em",
            "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6",
            "pre", "code", "span", "div"
        ],
        ALLOWED_ATTR: ["class", "href", "alt", "src"], // keep class for code blocks
    });





    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto py-12 px-6 overflow-hidden"
        >
            {blog!.thumbnail && (
                <img
                    src={blog!.thumbnail}
                    alt={blog!.title}
                    className="w-full object-cover rounded-2xl shadow-primary shadow-md mb-6"
                />
            )}

            <h1 className="text-3xl md:text-4xl font-bold mb-3">{blog!.title}</h1>
            <p className="mb-6 bg-pri">
                <Badge><Calendar />{format(new Date(blog!.createdAt), "MMMM d, yyyy, hh:mm a")}</Badge>
            </p>

            <div className="prose prose-lg max-w-none blog-content" dangerouslySetInnerHTML={{ __html: cleanContent }} />

            <div className="bg-primary p-5 rounded-md w-fit mx-auto mt-10">
                <h3 className="text-center text-2xl font-semibold mb-5">Author</h3>
                <div className="flex flex-col items-center">
                    <img src={margubData?.data.picture || myImage} alt={margubData?.data.name}  className="w-32 rounded-full bg-accent mx-auto border-4 border-accent mb-3"/>
                    <h4 className="text-2xl font-bold">{margubData?.data.name}</h4>
                    <Badge variant="outline" className="bg-background mt-2">{margubData?.data.designation}</Badge>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <Link to="/">
                    <Button variant="outline">← Back to home</Button>
                </Link>
            </div>
        </motion.section>
    );
}
