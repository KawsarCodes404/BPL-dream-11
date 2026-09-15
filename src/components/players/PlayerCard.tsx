// import { FaUser } from "react-icons/fa";
// import type { Iplayer } from "../../types/player";

// const PlayerCard = ({player} : {player : Iplayer}) => {
//     return (
//         <div className="card bg-base-100 shadow-sm">

//             <figure>
//                 <img
//                     src={player.image}
//                     alt="Shoes" className="h-80 w-90" />
//             </figure>

//             <div className="card-body space-y-3">

//                 <h2 className="card-title">
//                     <FaUser />
//                     {player.playerName}
//                 </h2>


//                 <div className="flex justify-between gap-4 items-center">

//                     <p className="font-bold">{player.origin}</p>

//                     <button className="btn">{player.playerType}</button>
//                 </div>

//                 <div className="divider" />

//                 <h2 className="font-bold text-2xl">Rating</h2>


//                 <div className="flex justify-between gap-4 items-center">

//                     <p className="font-bold">{player.BattingStyle}</p>

//                     <button className="btn">{player.BowlingStyle}</ button>
//                 </div>


//                 <div className="card-actions justify-between items-center">
//                     <h2 className="font-bold text-2xl">${player.Price}</h2>

//                     <button className="btn ">Choose Player</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PlayerCard;




import { FaUser } from "react-icons/fa";
import type { Iplayer } from "../../types/player";

const PlayerCard = ({ player }: { player: Iplayer }) => {
    return (
        <div className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Player Image */}
            <figure className="px-4 pt-4">
                <img
                    src={player.image}
                    alt={player.playerName}
                    className="h-72 w-full rounded-xl"
                />
            </figure>

            {/* Player Information */}
            <div className="card-body p-5">
                {/* Name */}
                <div className="flex items-center gap-2">
                    <FaUser className="text-primary" />
                    <h2 className="card-title text-xl">
                        {player.playerName}
                    </h2>
                </div>

                {/* Origin & Player Type */}
                <div className="flex items-center justify-between mt-2">
                    <p className="text-base-content/70">
                        {player.origin}
                    </p>

                    <span className="badge badge-primary badge-outline">
                        {player.playerType}
                    </span>
                </div>

                <div className="divider my-2"></div>

                {/* Rating */}
                <h3 className="font-semibold text-lg">
                    Rating
                </h3>

                <div className="flex items-center justify-between mt-1">
                    <div>
                        <p className="text-sm text-base-content/60">
                            Batting
                        </p>
                        <p className="font-medium">
                            {player.BattingStyle}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-sm text-base-content/60">
                            Bowling
                        </p>
                        <p className="font-medium">
                            {player.BowlingStyle}
                        </p>
                    </div>
                </div>

                {/* Price & Button */}
                <div className="card-actions flex items-center justify-between mt-5">
                    <div>
                        <p className="text-sm text-base-content/60">
                            Price
                        </p>
                        <p className="text-2xl font-bold">
                            ${player.Price}
                        </p>
                    </div>

                    <button className="btn btn-primary">
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
