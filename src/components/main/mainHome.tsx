import MusicPlaylist from "./comps/music";
import Timer from "./comps/timer";

export default function Main() {

    return (
        <main className="flex flex-col justify-between text-center grow gap-4">
            <Timer />

            <MusicPlaylist />
        </main>
    )
}