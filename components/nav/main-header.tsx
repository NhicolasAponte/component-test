import Link from "next/link";
import { ThemeToggle } from "../themes/ThemeToggle";
import { HomeRoute } from "@/lib/routes";

export default function MainHeader() {
    return (
        <section className="flex justify-between m-2 border-b-2 p-2">
            <Link href={HomeRoute.href}>
                <h1 className="text-2xl">Components</h1>
            </Link>
            <ThemeToggle />
        </section>
    )
}