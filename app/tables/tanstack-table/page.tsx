import TanStackTable from "@/components/tables/tstack-table";
import { invoiceColumns } from "@/components/tables/invoice-columns";

export default async function TanStackTablePage() {
    const { invoices } = await import("@/lib/placeholder-data");

    return (
        <main className="container flex flex-col items-center w-full">
            <div>
                <h1 className="text-2xl font-mono">TanStack Table</h1>
            </div>
            <TanStackTable columns={invoiceColumns} data={invoices}/>
        </main>
    )
}