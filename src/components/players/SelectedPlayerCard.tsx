import { TbTrash } from "react-icons/tb";
import type { Iplayer } from "../../types/player";

interface ISelectedPlayerCardProps {
    player: Iplayer;
    handleRemovePlayer: (CurrentPlayer: Iplayer) => void;
}

const SelectedPlayerCard = ({
    player,
    handleRemovePlayer,
} : ISelectedPlayerCardProps) => {


    return (
        <div className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl py-2 px-4">
            {/* Left side */}
            <div className="flex gap-2 items-center">
                <img src={player.image} alt="" className="h-[40px] w-[40px]" />

                <div>
                    <h2 className="font-bold text-2xl">{player.playerName}</h2>
                    <p>{player.playerType}</p>
                </div>
            </div>

            {/* Right side */}
            <span
                className="text-red-500 font-bold cursor-pointer"
                onClick={() => handleRemovePlayer(player)}
            >
                <TbTrash />
            </span>
        </div>
    );

};

export default SelectedPlayerCard;