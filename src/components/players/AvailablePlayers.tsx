import type { Iplayer } from "../../types/player";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players } : {players : Iplayer[]}) => {
    return (
        <div className="grid grid-cols-3 gap-7 mt-8">
            {
                players.map((player: Iplayer, idx : number) => {
                    return <PlayerCard key={idx} player={player} />
                })
            }
        </div>
    );
};

export default AvailablePlayers;