import { projectInfo } from "@/data/projectInfo"
import { Project } from "@/components/Project"
import { Header } from "@/components/Header"

export default function Home() {
    return (
        <main
            className="min-h-screen h-full bg-background-hue font-quicksand text-text-hue"
        >
            <Header />
            <div className="content flex flex-col items-center justify-between px-32 pt-24 pb-4">
                <h1 className="text-6xl font-semibold mb-4">Mudasir Ali</h1>

                <h2 className="block ml-12 mt-20 text-4xl uppercase text-blue-300 font-roboto text-left w-2/3" id="projects">
                    Projects
                </h2>
                <div className="min-h-[80vh] h-full bg-dark-tint border-0 w-2/3 mt-4 py-8 rounded-lg shadow-0 shadow-accent-hue">
                    {projectInfo.map(proj => {
                        return (
                            <Project {...proj} />
                        )
                    })}
                </div>

                <div id="footer" className="mt-32 mb-0">
                    &copy; 2024 Mudasir Ali. Made <a
                        href="https://www.github.com/mud-ali/website"
                        className="text-accent-hue underline"
                    >with ❤️</a>.
                </div>
            </div>
        </main>
    )
}
