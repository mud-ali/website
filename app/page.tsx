import { ContactCard } from "@/components/ContactCard"
import { contactMethodsInfo } from "@/data/contactMethodsInfo"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Home() {
    return (
        <main
            className="min-h-screen h-full bg-background-hue font-head text-text-hue"
        >
            <Header />
            <div className="content flex flex-col items-center justify-between md:px-32 pt-20 md:pt-24 pb-4">
                <h1 className="text-6xl font-semibold mb-4">Mudasir Ali</h1>

                <div className={`heading-card rounded-lg py-12 px-16 text-center mx-2 mt-16 bg-dark-tint
                                 w-full lg:w-7/12 leading-loose shadow-[0px_0px_15px_5px_rgba(185,185,177,1)]`}>
                    Hi, I'm Mudasir, and I'm currently studying engineering at the Bergen County Academies in New Jersey. I'm passionate about everything from electrical engineering and robotics to web development and cybersecurity.
                </div>
                <div className="contact-card-array flex flex-row items-center mt-8 sm:mt-0 justify-around w-1/2 mb-8">
                    {
                        contactMethodsInfo.map(method => {
                            return (
                                <ContactCard {...method} />
                            )
                        })
                    }
                </div>

                <Footer />
            </div>
        </main>
    )
}
