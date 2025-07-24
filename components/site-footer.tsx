import Link from "next/link"
import { BookOpen } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-accent/20">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-primary/90">Art Identifier</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center">
            Identify and learn about artworks and art pieces with our AI-powered platform.
          </p>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ArtIdentifier.app . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}