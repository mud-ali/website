import { projectInfo } from "@/data/projectInfo"
import { Project } from "@/components/Project"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Home() {
    return (
        <main
            className="min-h-screen h-full bg-background-hue font-quicksand text-text-hue"
        >
            <Header />
            <div className="content flex flex-col items-center justify-between md:px-32 pt-20 md:pt-24 pb-4">
                <h1 className="text-6xl font-semibold mb-4">Mudasir Ali</h1>

                <h2 className="block md:ml-12 mt-20 text-4xl uppercase text-blue-300 font-roboto text-center md:text-left w-2/3" id="projects">
                    Projects
                </h2>
                <div className={`sm:min-h-[80vh] h-full bg-dark-tint border-0 w-full sm:w-2/3 mt-4 pt-4 sm:py-8
                                rounded-md md:rounded-lg shadow-0 shadow-accent-hue`}>
                    {projectInfo.map(proj => {
                        return (
                            <Project {...proj} />
                        )
                    })}
                </div>

                <Footer />
            </div>
        </main>
    )
}
