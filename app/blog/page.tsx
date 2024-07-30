import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ReactNode } from "react"
import { blogPostsList } from "@/data/blogPostsList"
import { PostPreview } from "@/components/PostPreview"

export default function Blog() : ReactNode {
    return (
        <main className="min-h-screen h-full bg-background-hue font-head text-text-hue">
            <Header />
            <div id="top" className="text-center mt-24 mb-12">
                <h1 className="text-3xl mb-4 font-extrabold font-body">
                    Blog
                </h1>
                <p>
                    CTF writeups. thoughts.
                </p>
            </div>
            <div className="blog-preview-container min-h-screen w-5/6 lg:w-3/6 mx-auto rounded-xl">
                {
                    blogPostsList.map((postData, i)=>{
                        return (
                            <PostPreview {...postData} key={i}/>
                        )
                    })
                }
            </div>
            <Footer />
        </main>
    )
} 