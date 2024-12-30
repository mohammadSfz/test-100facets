import Journey from "@/components/Journey";

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center h-14 text-2xl font-bold">
        Opening Cards
      </header>
      <main className="container mx-auto p-3 sm:p-0">
        <Journey />
      </main>
    </>
  );
}
