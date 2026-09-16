import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
    playersPromise: Promise<Iplayer[]>;
    coin: number;
    setcoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setcoin }: PlayersProps) => {

    const players = use(playersPromise);

    const [buttonType, setbuttonType] = useState<"Available" | "Selected">("Available");  // It holds Data, just like a variable does !  [state , set state]  !

    // console.log(test);
    // const handleUpdateBtnType = (type : "Available" | "Selected") => {
    //     setbuttonType(type)
    // }

    const [selectedPlayers, setselectedPlayers] = useState<Iplayer[]>([]);

    return (
        <div className="container mx-auto">
            {/* Heading Text */}
            <div className="flex justify-between gap-4 mb-2">
                {/* left text */}
                <h2 className="font-bold text-xl">{buttonType === "Available" ? "Available Players" : "Selected Players"}</h2>

                {/* Right Text  */}
                <div>
                    <button
                        onClick={() => setbuttonType("Available")}
                        className={`btn ${buttonType === "Available" ? "btn-success" : ""} rounded-r-none`}
                    >
                        Available
                    </button>

                    <button
                        onClick={() => setbuttonType("Selected")}
                        className={`btn ${buttonType === "Selected" ? "btn-success" : ""} rounded-l-none`}
                    >
                        Selected
                    </button>
                </div>
            </div>


            {/* Players card section */}
            {buttonType === "Available" ? (
                <AvailablePlayers
                    players={players}
                    coin={coin}
                    setcoin={setcoin}  // All of these props are passed as an object !
                    selectedPlayers={selectedPlayers}
                    setselectedPlayers={setselectedPlayers}
                />
            ) : (
                <SelectedPlayers
                    coin={coin}
                    setcoin={setcoin}  // All of these props are passed as an object !
                    selectedPlayers={selectedPlayers}
                    setselectedPlayers={setselectedPlayers}
                />
            )}
        </div>
    );
};

export default Players;