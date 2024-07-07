import { ContactCard } from "@/components/ContactCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { contactMethodsInfo } from "@/data/contactMethodsInfo"

export default function Contact() {
    return (
        <main
            className="min-h-screen h-full bg-background-hue font-quicksand text-text-hue"
        >
            <Header />
            <div className="content flex flex-col items-center justify-around px-32 pt-24 pb-4">
                <div className="heading-card rounded-lg py-12 px-24 mt-16 bg-dark-tint w-7/12 leading-loose">
                    Hi, I'm Mudasir, and I'm currently studying engineering at the Bergen County Academies in New Jersey. I'm passionate about everything from electrical engineering and robotics to web development and cybersecurity.
                </div>
                <div className="contact-card-array flex flex-row justify-center w-5/6">
                    {
                        contactMethodsInfo.map(method => {
                            return (
                                <ContactCard {...method} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </main>
    )
}