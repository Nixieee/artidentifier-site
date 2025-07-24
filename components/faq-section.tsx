"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="pricing" className="bg-accent/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Frequently asked questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about artwork identification.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-base font-medium">
                How accurate is the artwork identification?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We use advanced AI technology trained on millions of artwork images to provide highly accurate identifications. For well-known artworks and established artists, the accuracy is typically 90%+. For lesser-known or contemporary pieces, we provide the closest matches and detailed information to help you narrow down the identification. Our system continuously improves as more users contribute to our database.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-medium">
                What information does the art identifier app provide about artworks?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our app provides comprehensive information about identified artworks including the artist's name, biographical details, the art movement or style, historical period, techniques used, and cultural significance. You'll also learn about the artist's influences, other notable works, and the context in which the piece was created.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-medium">
                What types of artworks can the app identify?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our identifier app can identify a wide range of artworks including paintings, sculptures, prints, drawings, photographs, ceramics, textiles, decorative arts, and many other art forms. Our database includes works from various periods and styles, from ancient art to contemporary pieces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base font-medium">
                How do I take the best photo for identification?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For best results, take photos in good natural lighting, against a plain background. Capture the entire item and include multiple angles if possible. For items with marks, signatures, or hallmarks, take close-up photos of these details as they can be crucial for accurate identification. Avoid shadows, glare, and blurry images.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base font-medium">
                Can I use this art identifier app offline?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The core identification feature requires an internet connection to access our AI system. However, you can save identified artworks to your device by tapping the save button, and these saved items can then be viewed offline with all the information we provided, including artist details and historical context.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-base font-medium">
                How is my data and privacy protected?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We take your privacy seriously. The app processes photos locally and sends them to OpenAI's API for identification purposes only. We do not store your photos or maintain a database of user images. The app does not require accounts, and we have no access to what you photograph. All data remains on your device unless you choose to save specific identifications locally.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 