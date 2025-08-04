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

                <div className={`heading-card rounded-lg py-12 px-6 md:px-16
                                 text-center md:mx-2 mx-8 mt-16 bg-dark-tint 
                                 w-11/12 lg:w-7/12 leading-loose
                                 shadow-[0px_0px_15px_5px_rgba(185,185,177,1)]`
                                 }>
                    Hi, I'm Mudasir, and I'm currently studying electrical engineering at the New Jersey Institute of Technology. I'm passionate about all things tech, from robotics and embedded development to IoT, networking, and cybersecurity. Feel free to contact me below!
                </div>
                <div className="contact-card-array flex flex-row items-center mt-8 justify-around min-w-full sm:w-1/3 sm:min-w-0 mb-56">
                    {
                        contactMethodsInfo.map(method => {
                            return (
                                <ContactCard {...method} key={method.id}/>
                            )
                        })
                    }
                </div>

                <Footer />
            </div>
        </main>
    )
}
