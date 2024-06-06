import TanStackTable from "@/components/tables/tstack-table";

export default function TanStackTablePage() {
    return (
        <main className="container flex flex-col items-center">
            <div>
                <h1 className="text-2xl font-mono">TanStack Table</h1>
            </div>
            <TanStackTable />
        </main>
    )
}