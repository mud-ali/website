import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"

export default function Resume() {
    return (
        <main
            className="min-h-screen h-full bg-background-hue font-head text-text-hue"
        >
            <Header />
            <div className="content px-6 sm:mt-16 h-screen mb-4">
                <iframe
                    src="/Resume_1.pdf"
                    className={`w-2/3 h-full mx-auto rounded-2xl shadow-[0px_0px_5px_1px_rgba(185,185,177,1)]
                                hover:shadow-[0px_0px_10px_5px_rgba(195,185,177,1)] duration-500`}
                >
                </iframe>
            </div>
            <Footer />
        </main>
    )
}