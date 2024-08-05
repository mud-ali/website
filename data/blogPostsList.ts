import type { Blogpost } from "@/types/blogpost"

export const blogPostsList : Blogpost[] = [
    {
        title: "First blog post",
        description: "A quick test of the blog post system",
        url: "/blog/hello-world",
        date: "7/29/2024",
        tags: ["test", "hello"],
        content: "one.mdx"
    },
    {
        title: "EVM - The Basics (Blockchain)",
        description: "CTF writeup for n00bzCTF 2024",
        url: "/blog/evm-basics",
        date: "8/04/2024",
        tags: ["blockchain", "reverse engineering", "n00bzctf", "ctf"],
        content: "evm-basics.mdx"
    },
    {
        title: "EVM - Conditions (Blockchain)",
        description: "CTF writeup for n00bzCTF 2024",
        url: "/blog/evm-conditions",
        date: "8/04/2024",
        tags: ["blockchain", "reverse engineering", "n00bzctf", "ctf"],
        content: "evm-conditions.mdx"
    },
].toReversed()