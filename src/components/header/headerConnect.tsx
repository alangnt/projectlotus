import LDModes from "./comps/ldModes";
import Link from "next/link";

export default function HeaderConnect() {
    return (
        <header className="flex justify-between items-center w-full h-min p-4">
            <LDModes />

            <Link href="/" className="text-2xl hover:scale-110 transition-all">Home</Link>
        </header>
    )
}