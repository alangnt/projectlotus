import MusicPlaylist from "./comps/music";
import Timer from "./comps/timer";

export default function Main() {

    return (
        <main className="flex flex-col justify-between text-center">
            <Timer />

            <MusicPlaylist />
        </main>
    )
}