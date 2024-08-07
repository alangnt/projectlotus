import LDModes from "./comps/ldModesHome";
import UserInterface from "./comps/userInterface";

export default function HeaderHome() {
    return (
        <header className="flex justify-between items-center w-full h-2/10">
            <div className="header-parts">
                <LDModes />
            </div>

            <div className="text-center grow">
                <h1 className="text-6xl header-title">Project Lotus</h1>
            </div>

            <div className="header-parts h-full flex justify-end">
                <UserInterface />
            </div>
        </header>
    )
}