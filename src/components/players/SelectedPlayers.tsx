import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";

interface ISelectedPlayersProps {
    selectedPlayers: Iplayer[];
    setselectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const SelectedPlayers = ({
    setselectedPlayers,
    selectedPlayers
} : ISelectedPlayersProps) => {
    return (
        <div>
            selected players
        </div>
    );
};

export default SelectedPlayers;