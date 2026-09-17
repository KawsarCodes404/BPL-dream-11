import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import PlayerCard from "./PlayerCard";

interface IAvailablePlayersProps {
    players: Iplayer[];
    coin: number;
    setcoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setselectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const AvailablePlayers = ({
    players,
    coin,
    setcoin,
    setselectedPlayers,
    selectedPlayers
}: IAvailablePlayersProps) => {
    return (
        <div className="grid grid-cols-3 gap-7 mt-8">
            {
                players.map((player: Iplayer, idx: number) => {
                    return (
                      <PlayerCard
                         key={idx}
                         player={player}
                         coin={coin}
                         setcoin={setcoin}
                         selectedPlayers={selectedPlayers}
                         setselectedPlayers={setselectedPlayers}
                      />)

                })
            }
        </div>
    );
};

export default AvailablePlayers;