import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background-hue font-head text-text-hue">
            <Header />
            <div className="mt-48 flex flex-col justify-center items-center px-12 text-center border-0 border-red-300">
                <h1 className="break-words text-4xl font-mono mb-8">
                    404 - Page Not Found
                </h1>
                <p>
                    Looking for something else? Go <Link href="/" className="text-accent-hue underline">home</Link>.
                </p>
            </div>
            <Footer/>
        </main>
    )
}