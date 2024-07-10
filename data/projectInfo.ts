import type { Project } from "@/types/project"
import GithubLogo from "@/assets/github.png"
import BCACTFV from "@/assets/BCACTF_V.png"
import Titanium from "@/assets/titaniumknights.png"

export const projectInfo : Project[] = [
    {
        name: "BCACTF 5.0",
        desc: "Wrote CTF (capture the flag) challenges for BCACTF 5.0, my high school CTF club's annual cybersecurity competition. As president of the club, I also managed and reviewed other challenge authors' problems to ensure that they were solvable and fun. In addition, I worked with other administrators to secure sponsorships, deploy infrastructure, and respond to support tickets in a timely manner. <br /> <br /> Special thanks to Google Cloud (https://cloud.google.com/ ), Binary Ninja (https://binary.ninja/ ), TryHackMe (https://tryhackme.com/ ), and the New Jersey Cybersecurity and Communications Integration Cell (https://www.cyber.nj.gov/home-njccic ) for sponsoring this event.",
        icon: BCACTFV,
        when: "June 7th - June 10th, 2024"
    },
    {
        name: "First Tech Challenge - Centerstage",
        desc: "As a member of the Knightmare Robotics (15891) team, I co-led the programming subteam for the 2023-2024 Centerstage<sup>®</sup> challenge. I independently designed and tuned a computer vision algorithm using OpenCV to detect the location of a landmark object, affecting the autonomous path chosen by the robot. In addition, I worked with other programmers to tune the PID control system used by the drivetrain for accurate autonomous movement. I also delivered lessons on PID using the Road Runner library and about the basics of the FTC SDK.",
        icon: Titanium,
        when: "September 9th, 2023 - February 25th, 2024"
    },
    {
        name: "Website",
        desc: "Designed personal website using NextJS and TailwindCSS. For more information, check out the source code on github: https://github.com/mud-ali/website .",
        icon: GithubLogo,
        when: "July 7th, 2024 - Present"
    },
]