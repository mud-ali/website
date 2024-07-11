import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default function Contact() {
    return (
        <main
            className="min-h-screen h-full bg-background-hue font-quicksand text-text-hue"
        >
            <Header />
            <div className="content px-6 sm:mt-16 h-screen">
                <iframe
                    src="/Resume_1.pdf"
                    className="w-full h-full"
                >
                </iframe>
            </div>
            <Footer />
        </main>
    )
}