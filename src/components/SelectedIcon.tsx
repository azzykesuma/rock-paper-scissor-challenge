import RippleLayout from "./layout/RippleLayout";
import DetermineWinner from "../lib/helper";
import { useContext } from "react";
import { GameStatus } from "../App";

type selectedPlayerChoiceProps = {
  selectedPlayerChoice:
    | {
        name: string;
        icon: string;
      }
    | undefined;
  className: string;
};

const SelectedIcon = ({
  selectedPlayerChoice,
  className,
}: selectedPlayerChoiceProps) => {
  const { houseChoice, playerChoice } = useContext(GameStatus);
  const resultText = DetermineWinner(playerChoice, houseChoice);
  console.log("resultText", resultText);

  return (
    <div className={`relative mx-auto ${className}`}>
      {playerChoice && (
        <p className="text-white hidden md:block text-center mb-8 -top-16">
          YOU PICKED
        </p>
      )}
      {resultText === "YOU WIN" ? (
        <RippleLayout name={selectedPlayerChoice?.name || ""}>
          <img
            src={selectedPlayerChoice?.icon}
            alt="selected icon"
            className="object-contain  md:w-32"
          />
        </RippleLayout>
      ) : (
        <div
          className={`rounded-full w-[120px] h-[120px] md:w-[300px] md:h-[300px] flex justify-center items-center shadow-2xl bg-gradient-to-br from-${selectedPlayerChoice?.name}-start to-${selectedPlayerChoice?.name}-end relative`}
        >
          <div className="bg-white rounded-full p-5 w-[100px] h-[100px] md:w-[250px] md:h-[250px] flex items-center justify-center">
            <img
              src={selectedPlayerChoice?.icon}
              alt="selected icon"
              className="object-contain md:w-32"
            />
          </div>
        </div>
      )}
      <p className={`absolute ${resultText === 'YOU WIN' ? 'bottom-4 left-10' : '-bottom-7  left-6'}  text-white text-sm text-center md:hidden`}>
        YOU PICKED
      </p>
    </div>
  );
};

export default SelectedIcon;
