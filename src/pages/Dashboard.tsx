"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Pencil, Trash } from "lucide-react";
import CreateBlogDialog from "@/components/modules/Dashboard/CreateBlogDialog";
import { useGetMeQuery, useUpdateUserMutation } from "@/redux/features/auth.api";
import FullPageLoader from "@/components/FullPageLoader";
import { toast } from "sonner";
import type { IUpdateUserInfo } from "@/types/auth.types";
import { useGetBlogsQuery } from "@/redux/features/blog.api";
import { Link } from "react-router";

export default function DashboardPage() {
    const { data, isFetching } = useGetMeQuery();
    const { data: blogs, isFetching: blogsLoading } = useGetBlogsQuery({});
    const [updateProfile, { isLoading: profileUpdateLoading }] = useUpdateUserMutation();
    const [picture, setPicture] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [designation, setDesignation] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (data?.data.email) {
            setName(data.data.name);
            setEmail(data.data.email);
            setDesignation(data.data.designation);
            setPicture(data.data.picture || "");
        }
    }, [data])

    if (isFetching) {
        return <FullPageLoader />
    }

    const handleSaveChanges = async () => {
        const updateInfo: IUpdateUserInfo = {
            _id: data!.data._id,
            email,
            name,
            picture,
            designation,
        }

        if (password) {
            updateInfo.password = password;
        }

        try {
            const response = await updateProfile(updateInfo).unwrap();
            if (response.success) {
                toast.success(response.message);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error(error)
            toast.error(error?.data?.message || error.message)
        }
    }

    return (
        <section className="min-h-screen bg-background text-foreground px-6 py-10">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

                <Tabs defaultValue="profile" className="w-full">
                    <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="blogs">Blogs</TabsTrigger>
                    </TabsList>

                    {/* Profile Tab */}
                    <TabsContent value="profile">
                        <Card>
                            <CardHeader>
                                <CardTitle>Edit Profile</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-5">
                                {/* Picture Upload */}
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="picture">Picture</Label>
                                    <Input className="placeholder:text-white/20" id="picture" placeholder="Cloud hosted image link" value={picture} onChange={e => setPicture(e.target.value)} />
                                </div>

                                {
                                    picture && (
                                        <img src={picture} alt={name} />
                                    )
                                }

                                {/* Name */}
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} />
                                </div>

                                {/* Designation */}
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="designation">Designation</Label>
                                    <Input id="designation" placeholder="Web Developer" value={designation} onChange={e => setDesignation(e.target.value)} />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} autoComplete="off" />
                                </div>

                                {/* Password */}
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} autoComplete="off" />
                                </div>

                                <Button className="w-full" disabled={profileUpdateLoading} onClick={handleSaveChanges}>Save Changes</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Blogs Tab */}
                    <TabsContent value="blogs">
                        <Card>
                            <CardHeader className="flex justify-between items-center">
                                <CardTitle>Your Blogs</CardTitle>
                                <CreateBlogDialog isLoading={isFetching} />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {
                                    blogsLoading ? <p>Loading...</p> : (
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {blogs?.data.length ? blogs?.data.map(blog => (
                                                <div className="p-4 rounded-lg border bg-muted text-muted-foreground flex flex-col gap-3">
                                                    <img src={blog.thumbnail} alt={blog.title} className="rounded-md"/>
                                                    <p>{blog.title}</p>
                                                    <div className="flex flex-wrap gap-3">
                                                        <Link to={`/blog/${blog.slug}`}>
                                                            <Button size="icon" variant="outline"><Eye /></Button>
                                                        </Link>
                                                        <Button size="icon" variant="outline"><Pencil /></Button>
                                                        <Button size="icon" variant="outline"><Trash /></Button>
                                                    </div>
                                                </div>
                                            )) : <p>No Blog Found</p>}
                                        </div>
                                    )
                                }
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
