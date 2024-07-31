import { projectInfo } from "@/data/projectInfo"
import { Project } from "@/components/Project"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function Home() {
    return (
        <main
            className="min-h-screen h-full bg-background-hue font-head text-text-hue"
        >
            <Header />
            <div className="content flex flex-col items-center justify-between md:px-32 pt-20 md:pt-24 pb-4">
                <h2 className="lg:block lg:ml-12 mt-8 text-4xl uppercase text-blue-300 font-body text-center lg:text-left w-2/3" id="projects">
                    Projects {/*<span className="text-sm">[Work in progress - more projects will be added soon!]</span>*/}
                </h2>
                <div className={`sm:min-h-[80vh] h-full bg-dark-tint w-full lg:w-5/6 my-4 pt-4 sm:py-8
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
