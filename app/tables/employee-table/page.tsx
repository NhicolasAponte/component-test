import { employeeColumns } from "@/components/tables/employee-columns";
import TanStackTable from "@/components/tables/tstack-table";

export default async function EmployeeTable() {

    const { employees } = await import("@/lib/placeholder-data");
    // map over employees and add a field full-name which is first and last name concatenated 
    const tableData = employees.map((employee) => {
        return {
            ...employee,
            full_name: `${employee.first_name} ${employee.last_name}`
        }
    })
    return (
        <main className="container flex flex-col items-center w-full">
            <h1>Employee Table</h1>
            <TanStackTable columns={employeeColumns} data={tableData}/>
        </main>
    )
}