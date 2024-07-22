import LDModes from "./comps/ldModes";
import Link from "next/link";
import UserInterface from "./comps/userInterface";

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full">
            <div className="header-parts w-1/5">
                <LDModes />
            </div>

            <Link href="/" className="text-2xl hover:scale-110 transition-all">Home</Link>

            <div className="header-parts h-full flex gap-4 w-1/5 justify-end items-center">
                <UserInterface />
            </div>
        </header>
    )
}