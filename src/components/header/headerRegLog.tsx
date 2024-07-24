import LDModes from "./comps/ldModes";
import UserInterface from "./comps/userInterface";

import Link from "next/link";

export default function HeaderRegLog() {
    return (
        <header className="flex justify-between items-center w-full h-2/10 pr-4 pl-2">
            <div className="header-parts">
                <LDModes />
            </div>

            <div className="text-center">
                <Link href="/" className="text-2xl hover:scale-110 transition-all">Home</Link>
            </div>
        </header>
    )
}