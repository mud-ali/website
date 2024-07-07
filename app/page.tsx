import { projectInfo } from "@/data/projectInfo"
import { Project } from "@/components/Project"

export default function Home() {
    return (
        <main
            className="flex min-h-screen h-full flex-col items-center justify-between pt-24 pb-4 bg-background-hue font-quicksand text-text-hue px-32"
        >
            <h1 className="text-6xl font-semibold mb-4">Mudasir Ali</h1>

            <div className="min-h-[80vh] h-full bg-dark-tint border-0 w-2/3 mt-16 py-8 rounded-lg shadow-2xl shadow-accent-hue">
                <h2 className="block ml-12 text-4xl text-blue-300 underline font-roboto">
                    Projects
                </h2>
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
                >with ❤️</a>
            </div>
        </main>
    )
}
