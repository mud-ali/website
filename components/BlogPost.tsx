import { Blogpost } from "@/types/blogpost";
import { promises as fs } from "fs";
import { cwd } from "process";
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight';
import "@/styles/blogPost.css"
import "@/styles/highlight-js/github-dark.css"

const options = {
    mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
    }
}

export default async function BlogPost(post: Blogpost) {
    let content;
    try {
        content = await fs.readFile(`${cwd()}/data/posts/${post.content}`, {encoding: 'utf8'});
    } catch (err) {
        content = post.content
    }

    return (
        <div>
            <div id="top" className="text-center mt-24 mb-8">
                <h1 className="text-3xl mb-4 font-extrabold font-body text-white">
                    {post.title}
                </h1>
                <p className="w-full md:w-7/12 mx-auto">
                    {post.description}
                </p>
            </div>
            <div className="bg-dark-tint w-11/12 md:w-7/12 mx-auto px-4 pt-6 mb-8">
                <div className="mdx-container">
                    <MDXRemote source={content} options={options}/>
                </div>
                <div className="flex pt-8 pb-6">
                    {
                        post.tags.length > 0 && <p className="text-white">Tags: </p>
                    }
                    
                    {
                        post.tags.map((tag, i) => {
                            return (
                                <p key={i}>
                                    <span className="ml-2 text-accent-hue hover:">{tag}</span>
                                    {i !== post.tags.length - 1 ? "," : ""}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}