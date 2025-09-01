import BlogCard from "@/components/BlogCard";
import { useGetBlogsQuery } from "@/redux/features/blog.api";

const Blogs = () => {
    const { data, isFetching } = useGetBlogsQuery({});
    const blogs = data?.data;
    return (
        <section className="min-h-screen bg-primary text-background px-6 py-10" id="blogs">
            <div className="space-y-10">
                <div className="text-center space-y-5">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center text-white">
                        My Blogs
                    </h1>
                    <p className="w-fit rounded-md bg-background text-foreground px-5 py-2 text-center mx-auto mt-3">
                            Read the latest blogs I've written.
                        </p>
                </div>
                {
                    isFetching ? <p>Loading...</p> : (
                        <div className="container mx-auto">
                            {blogs?.length ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                                    {blogs?.map(blog => <BlogCard blog={blog} />)}
                                </div>
                            ) : <p className="text-center">No blogs found</p>}
                        </div>
                    )
                }
            </div>
        </section >
    );
};

export default Blogs;