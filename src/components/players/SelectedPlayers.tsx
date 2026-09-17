import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayersProps {
    coin: number;
    setcoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setselectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const SelectedPlayers = ({
    setselectedPlayers,
    selectedPlayers,
    coin,
    setcoin
}: ISelectedPlayersProps) => {

    const handleRemovePlayer = (CurrentPlayer: Iplayer) => {

        const restPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !== CurrentPlayer.playerName);

        setselectedPlayers(restPlayers);

        setcoin(coin + CurrentPlayer.Price);
    }

    return (
        <div className="grid grid-cols-1 gap-7 mt-8">
            {

                (!selectedPlayers.length) ? (
                   <h2 className="font-bold text-3xl my-10 text-center text-red-500">No selected Players</h2>
                ) : (
                    selectedPlayers.map((player: Iplayer, idx: number) => {
                        return (
                           <SelectedPlayerCard
                                key={idx}
                                player={player}
                                handleRemovePlayer={handleRemovePlayer}
                            />
                        )

                    })
                )
            }
        </div>
    );
};

export default SelectedPlayers;