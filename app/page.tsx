import { projectInfo } from "@/data/projectInfo"
import { Project } from "@/components/Project"

export default function Home() {
  return (
    <main 
        className="flex min-h-screen flex-col items-center justify-between p-24 bg-background-hue font-quicksand text-text-hue px-32"
    >
        <h1 className="text-6xl font-semibold mb-4">Mudasir Ali</h1>

        <div className="h-[80vh] border-red-500 border-4 w-2/3 mt-16">
            {projectInfo.map(proj => {
                return (
                    <Project {...proj} />
                )
            })}
        </div>


    </main>
  )
}
