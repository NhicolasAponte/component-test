import SummaryCard from "@/components/cards/SummaryCard";

export default function ProductLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex">
        <section className="w-1/5 p-2">
            <div>
                product nav bar 
            </div>
        </section>
        <section className="w-full p-2">
         {children}
        </section>
        <section className="w-1/5 p-2">
            <SummaryCard/>
        </section>
    </main>);
}
