import { ContactInfo } from "@/types/contactinfo";
import EmailIcon from "@/assets/envelope-regular.svg"
import GithubIcon from "@/assets/github.svg"
import LinkedInIcon from "@/assets/linkedin.svg"

export const contactMethodsInfo: ContactInfo[] = [
    {
        info: "",
        imageLink: EmailIcon,
        url: "mailto:mudxsir@gmail.com",
        urlText: "mudxsir@gmail.com",
        id: 0,
    },
    {
        info: "",
        imageLink: GithubIcon,
        url: "https://www.github.com/mud-ali",
        urlText: "github.com/mud-ali",
        id: 1,
    },
    {
        info: "",
        imageLink: LinkedInIcon,
        url: "https://www.linkedin.com/in/mudasir-ali",
        urlText: "mudasir-ali",
        id: 2,
    }
]