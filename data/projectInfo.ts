import type { Project } from "@/types/project"
import GithubLogo from "@/assets/github.png"
import BCACTFV from "@/assets/BCACTF_V.png"
import Titanium from "@/assets/titaniumknights.png"
import NextJS from "@/assets/nextjs.png"
import Tailwind from "@/assets/tailwind.svg"
import Java from "@/assets/java.svg"
import Kotlin from "@/assets/kotlin.png"
import Roadrunner from "@/assets/roadrunner.png"
import OpenCV from "@/assets/OpenCV.png"
import Docker from "@/assets/docker.svg"
import Git from "@/assets/git.svg"
import Python from "@/assets/python.svg"
import Rust from "@/assets/rust.svg"

export const projectInfo : Project[] = [
    {
        name: "BCACTF 5.0",
        desc: "Wrote CTF (capture the flag) challenges for BCACTF 5.0, my high school CTF club's annual cybersecurity competition. As president of the club, I also managed and reviewed other challenge authors' problems to ensure that they were solvable and fun. In addition, I worked with other administrators to secure sponsorships, deploy infrastructure, and respond to support tickets in a timely manner.",
        icon: BCACTFV,
        when: "06/07/2024 - 06/10/2024",
        url: ["https://github.com/BCACTF/bcactf-5.0", "https://5.bcactf.com/"],
        tech: [Docker, Git, Python, Rust],
        techTitle: ["Docker", "Git", "Python", "Java", "Rust"]
    },
    {
        name: "First Tech Challenge - Centerstage",
        desc: "As a member of the Knightmare Robotics (15891) team, I co-led the programming subteam for the 2023-2024 Centerstage<sup>®</sup> challenge. I independently designed and tuned a computer vision algorithm using OpenCV to detect the location of a landmark object, affecting the autonomous path chosen by the robot. In addition, I worked with other programmers to tune the PID control system used by the drivetrain for accurate autonomous movement. I also delivered lessons on PID using the Road Runner library and about the basics of the FTC SDK.",
        icon: Titanium,
        when: "09/09/2023 - 02/25/2024",
        url: ["https://github.com/titanium-knights/knightmares-centerstage-2023", "https://github.com/titanium-knights/knightmares-centerstage-2024"],
        tech: [Java, Kotlin, Roadrunner, OpenCV],
        techTitle: ["Java", "Kotlin", "Roadrunner", "OpenCV"]
    },
    {
        name: "Personal Website",
        desc: "Designed personal website using NextJS and TailwindCSS. For more information, check out the source code on github: https://github.com/mud-ali/website .",
        icon: GithubLogo,
        when: "07/07/2024 - Present",
        tech: [NextJS, Tailwind],
        techTitle: ["NextJS", "TailwindCSS"]
    },
]