import LDModes from "./comps/ldModes";
import UserInterface from "./comps/userInterface";

import Link from "next/link";

export default function HeaderConnect() {
    return (
        <header className="flex justify-between items-center w-full h-2/10">
            <div className="header-parts">
                <LDModes />
            </div>

            <div className="text-center grow">
                <Link href="/" className="text-2xl hover:scale-110 transition-all">Home</Link>
            </div>

            <div className="header-parts h-full flex justify-end">
                <UserInterface />
            </div>
        </header>
    )
}