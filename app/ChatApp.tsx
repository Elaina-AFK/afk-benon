"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { sendUserPrompt } from "./actions";
import showdown from "showdown";

const converter = new showdown.Converter();
converter.setOption("noHeaderId", true);
converter.setOption("headerLevelStart", 3);
converter.setOption("strikethrough", true);
converter.setOption("tables", true);
function makeHtml(text: string) {
  return converter.makeHtml(text ?? "<h1>Error output!</h1>");
}

export default function ChatApp() {
  const [inputValue, setInput] = useState("");
  const [submitValue, setSubmit] = useState("");
  const [outputValue, setOutput] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setSubmit(inputValue);
    setInput("");
    await sendUserPrompt(new FormData(e.currentTarget), (text) => {
      setOutput(makeHtml(text));
      setPending(false);
    });
  };

  return (
    <section className="mx-auto px-3 my-6">
      <div className="flex flex-col max-w-prose mx-auto">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          You :
        </h4>
        <p className="mx-3 leading-7 [&:not(:first-child)]:mt-6 max-w-prose break-words">
          {submitValue}
        </p>
      </div>
      <div className="flex flex-col mt-6 max-w-prose mx-auto">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Moyai :
        </h4>
        <div className="mx-3 leading-7 [&:not(:first-child)]:mt-6 max-w-prose break-words [&_*_code]:overflow-x-scroll [&_*_*]:block">
          {outputValue && <Typewriter text={outputValue} />}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 max-w-prose mx-auto">
        <p className="text-center mb-2">Try ask Moyai some questions!</p>
        <Textarea
          maxLength={400}
          name="user-input"
          value={inputValue}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <Button type="submit" className="w-full mt-5" disabled={pending}>
          Send!
        </Button>
      </form>
    </section>
  );
}

function Typewriter({ text }: { text: string }) {
  return (
    <TypewriterComponent
      options={{
        delay: 15,
        strings: text,
        autoStart: true,
        loop: false,
      }}
    />
  );
}
