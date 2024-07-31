import type { Project } from "@/types/project"
import GithubLogo from "@/assets/github.png"
import BCACTFV from "@/assets/BCACTF_V.png"
import BCACTFIV from "@/assets/BCACTF_IV.png"
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
import Node from "@/assets/node.svg"
import Postgres from "@/assets/postgre.svg"
import Inventor from "@/assets/inventor.svg"
import Javascript from "@/assets/javascript.svg"
import ReactLogo from "@/assets/react.svg"
import Chrome from "@/assets/chrome.svg"
import Firefox from "@/assets/firefox.svg"
import Handlebars from "@/assets/hbs.svg"
import MDXLogo from "@/assets/mdx.svg"
import AcadSciLogo from "@/assets/acadsci.png"
import NewTabExt from "@/assets/newtab.png"

export const projectInfo : Project[] = [
    {
        name: "BCA NewTab",
        desc: "A browser extension that scrapes the PowerSchool Student Information System used at BCA to create a custom schedule page on the user's new tab.",
        icon: NewTabExt,
        when: "07/09/2024 - Present",
        url: [],
        tech: [Node, Javascript, Handlebars, Firefox, Chrome],
        techTitle: ["NodeJS", "JavaScript", "Handlebars", "Firefox Addons API", "Chrome Extensions API"]
    },
    {
        name: "BCACTF 5.0",
        desc: "Wrote CTF (capture the flag) challenges for BCACTF 5.0, my high school CTF club's annual cybersecurity competition. As president of the club, I also managed and reviewed other challenge authors' problems to ensure that they were solvable and fun. In addition, I worked with other administrators to secure sponsorships, deploy infrastructure, and respond to support tickets in a timely manner.",
        icon: BCACTFV,
        when: "06/07/2024 - 06/10/2024",
        url: [["https://github.com/BCACTF/bcactf-5.0", "Source"], ["https://5.bcactf.com/", "Landing Page"]],
        tech: [Docker, Git, Python, Rust, Postgres],
        techTitle: ["Docker", "Git", "Python", "Rust", "PostgreSQL"]
    },
    {
        name: "First Tech Challenge - Centerstage",
        desc: "As a member of the Knightmare Robotics (15891) team, I co-led the programming subteam for the 2023-2024 Centerstage<sup>®</sup> challenge. I independently designed and tuned a computer vision algorithm using OpenCV to detect the location of a landmark object, affecting the autonomous path chosen by the robot. In addition, I worked with other programmers to tune the PID control system used by the drivetrain for accurate autonomous movement. <br><br>I also delivered lessons on PID using the Road Runner library and about the basics of the FTC SDK. Finally, I also made contributions to the team's website and outreach initiatives.",
        icon: Titanium,
        when: "09/09/2023 - 02/25/2024",
        url: [["https://github.com/titanium-knights/knightmares-centerstage-2023", "Early Season Source"], ["https://github.com/titanium-knights/knightmares-centerstage-2024", "Final Robot Source"], ["https://titanium-knights.github.io", "Team Website"]],
        tech: [Java, Kotlin, Roadrunner, OpenCV],
        techTitle: ["Java", "Kotlin", "Roadrunner", "OpenCV"]
    },
    {
        name: "Academy Scientific Website",
        desc: "A website to display scientific articles published by the Academy Scientific, the only scientific journal at the Bergen County Academies.",
        icon: AcadSciLogo,
        when: "01/23/2024 - Present",
        url: [["https://academyscientific.vercel.app/", "Website"]],
        tech: [NextJS, Node, Tailwind, MDXLogo],
        techTitle: ["NextJS", "NodeJS", "TailwindCSS", "MDX"]
    },
    {
        name: "Recoursive Website",
        desc: "As Co-Webmaster of Recoursive, an organization dedicated to providing free computer science education at local community centers, I worked to design a website to showcase the programs offered by the organization, increasing outreach to community centers and libraries.",
        icon: GithubLogo,
        when: "08/08/2023 - 06/21/2024",
        url: [["https://recoursivetutoring.vercel.app/", "Live Site"],["https://github.com/recoursivetutoring/website", "Source"]],
        tech: [Node, Javascript, ReactLogo],
        techTitle: ["NodeJS", "JavaScript", "React"]
    },
    {
        name: "BCACTF 4.0",
        desc: "Wrote CTF (capture the flag) challenges for BCACTF 4.0, my high school CTF club's annual cybersecurity competition. I also worked with administrators to respond to support requests and deploy infrastructure.",
        icon: BCACTFIV,
        when: "06/09/2023 - 06/12/2023",
        url: [["https://github.com/BCACTF/bcactf-4.0", "Source"], ["https://4.bcactf.com/", "Landing Page"]],
        tech: [Git, Python, Java, Javascript, Docker],
        techTitle: ["Git", "Python", "Java", "JavaScript", "Docker"]
    },
    {
        name: "First Tech Challenge - Powerplay",
        desc: "As a member of the Titanium Knights A (15887) team, I worked with the build and programming subteams for the 2022-2023 Powerplay<sup>®</sup> challenge, gaining experience in various aspects of robotics.",
        icon: Titanium,
        when: "09/20/2022 - 03/12/2023",
        url: [["https://drive.google.com/file/d/1CWHDXrx_E4XXwPtvRncYPMWOEFyYqSBa/view?usp=drive_link", "Render"], ["https://drive.google.com/file/d/1gCX30wZU4HCbwMdHRrbLLThYUo9kNl3G/view?usp=drive_link","Picture"], ["https://github.com/titanium-knights/team-a-2022-2023","Code"]],
        tech: [Inventor, Java, Roadrunner],
        techTitle: ["Autodesk Inventor Professional", "Java", "Roadrunner", ]
    },
    {
        name: "Personal Website",
        desc: "Designed personal website using NextJS and TailwindCSS. Implemented blog feature from scratch using MDX. Check out the source below or check out the other pages on this site.",
        icon: GithubLogo,
        when: "07/07/2024 - Present",
        url: [["https://www.github.com/mud-ali", "Source"], ["https://mudasir.vercel.app/", "Homepage"]],
        tech: [Node, NextJS, Tailwind],
        techTitle: ["NodeJS", "NextJS", "TailwindCSS"]
    },
]