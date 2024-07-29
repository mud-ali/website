import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ReactNode } from "react"
import { blogPostsList } from "@/data/blogPostsList"
import BlogPost from "@/components/BlogPost"

export default function Blog({ params }: { params: { slug: string } }): ReactNode {
    for (let i=0;i<blogPostsList.length;i++) {
        if (blogPostsList[i].url === `/blog/${params.slug}`) {
            return (
                <main className="min-h-screen h-full bg-background-hue font-head text-text-hue">
                    <Header />
                        <BlogPost {...blogPostsList[i]}/>
                    <Footer />
                </main>
            )
        }
    }
    return (
        <main className="min-h-screen h-full bg-background-hue font-head text-text-hue">
            <Header />
            <div id="top" className="text-center my-24">
                <h1 className="text-3xl mb-4 font-extrabold font-body text-white">
                    404
                </h1>
                <p>
                    This post does not exist. Check the URL or go back <a href="/blog" className="text-accent-hue underline">home</a>.
                </p>
            </div>
            <Footer />
        </main>
    )
}