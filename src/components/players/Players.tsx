import { use, useState } from "react";
import type { Iplayer } from "../../types/player";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProps {
    playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {

    const players = use(playersPromise);

    const [buttonType, setbuttonType] = useState("Available");  // It holds Data, just like a variable does !  [state , set state]  !

    // console.log(test);
    const handleUpdateBtnType = (type : "Available" | "Selected") => {
        setbuttonType(type)
    }

    return (
        <div className="container mx-auto">
            {/* Heading Text */}
            <div className="flex justify-between gap-4 mb-2">
                {/* left text */}
                <h2 className="font-bold text-xl">Available Players</h2>

                {/* Right Text  */}
                <div>
                    <button
                        onClick={() => handleUpdateBtnType("Available")}
                        className={`btn ${buttonType === "Available" ? "btn-success" : ""} rounded-r-none`}
                    >
                        Available
                    </button>

                    <button
                        onClick={() => handleUpdateBtnType("Selected")}
                        className={`btn ${buttonType === "Selected" ? "btn-success" : ""} rounded-l-none`}
                    >
                        Selected
                    </button>
                </div>
            </div>


            {/* Players card section */}
            <AvailablePlayers players={players} />
        </div>
    );
};

export default Players;