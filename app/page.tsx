import ChatApp from "./ChatApp";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div
        className="h-[32rem] w-full bg-slate-300 dark:bg-slate-800 landing pt-36 px-6
      "
      >
        <div className="max-w-prose mx-auto">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-serif">
            Hello! 👋
          </h1>
          <h2 className="pt-1.5">
            {"I'm Benon. You can try my Moyai chat project below 😀 👇"}
          </h2>
        </div>
      </div>
      <h1 className="text-center text-9xl select-none">🗿</h1>
      <h3 className="text-center scroll-m-20 text-2xl font-semibold tracking-tight">
        Moyai
      </h3>
      <ChatApp />
    </main>
  );
}
