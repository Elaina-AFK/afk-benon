import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <main className="w-full mt-24">
      <section className="flex mt-3 px-3 group">
        <h4 className="w-1/3 text-right pr-16 border-r-2 scroll-m-20 text-xl font-semibold tracking-tight group-hover:border-primary transition-colors">
          Profile
        </h4>
        <div className="w-full pl-3">
          <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-prose">
            {
              "Hi! 👋 My name is Benon. I'm currently working on my website project despite the fact that I have no ideas what to show. I really like programming but lots of my coding projects remain unfinished. Therefore, I decide to make my own website which no need to be perfect."
            }
          </p>
        </div>
      </section>
      <section className="flex mt-16 px-3 group">
        <h4 className="w-1/3 text-right pr-16 border-r-2 scroll-m-20 text-xl font-semibold tracking-tight group-hover:border-primary transition-colors">
          Technology and Languages
        </h4>
        <div className="w-full pl-3">
          <ul>
            <li className="leading-7 [&:not(:first-child)]:mt-6">
              <b className="mr-2">Langauges: </b>
              HTML, CSS, JavaScript, TypeScript, Python, Java, C
            </li>
            <li className="leading-7 [&:not(:first-child)]:mt-6">
              <b className="mr-2">Have tried langauges: </b>
              Ruby, Rust(very interesting), Haskell
            </li>
            <li className="leading-7 [&:not(:first-child)]:mt-6">
              <b className="mr-2">Frameworks: </b>
              React, Next.js
            </li>
            <li className="leading-7 [&:not(:first-child)]:mt-6">
              <b className="mr-2">Tools: </b>
              Firebase, Git, Github, TailwindCSS
            </li>
          </ul>
        </div>
      </section>
      <Accordion
        type="single"
        className="my-16 mx-auto max-w-prose px-3"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>What is my favorite quotes?</AccordionTrigger>
          <AccordionContent>
            <p className="mt-6 border-l-2 pl-6 italic">
              {'"Nothing changes if nothing changes."'}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What is my favorite way to learn coding?
          </AccordionTrigger>
          <AccordionContent>
            Clash of code in{" "}
            <a href="https://www.codingame.com/home" className="text-primary">
              Codingame
            </a>
            .
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How did you make whis website?</AccordionTrigger>
          <AccordionContent>
            I made this with Next.js(Typescript, TailwindCSS), Shadcn
            components, and hosting with Firebase.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
