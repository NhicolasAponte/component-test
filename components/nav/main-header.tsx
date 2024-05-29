import { ThemeToggle } from "../themes/ThemeToggle";

export default function MainHeader() {
    return (
        <section className="flex justify-between m-2 border-b-2 p-2">
            <div>
                <h1 className="text-2xl">Components</h1>
            </div>
            <ThemeToggle />
        </section>
    )
}