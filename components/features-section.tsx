import { Camera, Search, Sparkles, Clock, Database, BookOpen } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="features" className="bg-accent/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Everything you need to identify and learn about artworks
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered platform makes artwork identification effortless, so you can focus on building your collection.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Camera className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Instant Identification</CardTitle>
              <CardDescription>
                Identify artworks with just a photo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our advanced AI can recognize thousands of artworks, from paintings and sculptures to prints and decorative arts.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Database className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Artist Information</CardTitle>
              <CardDescription>
                Learn about the artists behind the works.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Discover detailed information about artists, their techniques, influences, and artistic movements they belonged to.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Sparkles className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Historical Context</CardTitle>
              <CardDescription>
                Learn the story behind your artworks.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Discover the historical period, style, and cultural significance of your artworks with detailed information.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Clock className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Collection Management</CardTitle>
              <CardDescription>
                Organize and track your art collection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Save your favorite identified artworks locally on your device by tapping the save button, keeping photos, descriptions, and historical information accessible anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}