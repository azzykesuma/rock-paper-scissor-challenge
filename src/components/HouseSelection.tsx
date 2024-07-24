import { useContext, useEffect, useState } from "react";
import gameConfig from "../lib/gameConfig";
import { motion } from "framer-motion";
import { GameStatus } from "../App";
import { allPossibleChoices } from "../../Types";
import DetermineWinner from "../lib/helper";
import RippleLayout from "./layout/RippleLayout";

const HouseSelection = ({className} : {className:string}) => {
  const listImages = gameConfig.map((icon) => icon.icon);
  const { setHouseChoice, houseChoice, playerChoice } = useContext(GameStatus);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const resultText = DetermineWinner(playerChoice, houseChoice);

  useEffect(() => {
    function imageLoop() {
      let index = 0;
      let lastIndex = -1;
      const interval = setInterval(() => {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * listImages.length);
        } while (randomIndex === lastIndex);

        setVisibleIndex(randomIndex);
        lastIndex = randomIndex;

        index++;
        if (index === Math.floor(1000 / 100)) {
          clearInterval(interval);
          if (setHouseChoice) {
            setHouseChoice(gameConfig[randomIndex].name as allPossibleChoices);
          }
        }
      }, 200);
    }

    imageLoop();
  }, [listImages.length, setHouseChoice]);

  return (
    <motion.div
      className={`mx-auto md:static md:right-0 md:mx-auto ${className} relative`}
    >
      <p className="hidden md:block text-white text-center mb-8">
        {!houseChoice ? "HOUSE IS PICKING..." : "THE HOUSE PICKED"}
      </p>
      {resultText === "YOU LOSE" ? (
        <RippleLayout
          name={gameConfig[visibleIndex].name}
        
        >
          {gameConfig.map((icon, index) => (
            <motion.img
              key={icon.name}
              src={icon?.icon}
              alt="selected icon"
              className={`object-contain md:w-32 ${
                index === visibleIndex ? "visible" : "hidden"
              }`}
            />
          ))}
        </RippleLayout>
      ) : (
        gameConfig.map((icon, index) => (
          <motion.div
            key={icon.name}
            className={`rounded-full w-[120px] h-[120px] md:w-[300px] md:h-[300px] flex justify-center items-center shadow-2xl bg-gradient-to-br from-${icon?.name}-start to-${icon?.name}-end relative`}
            style={{ display: index === visibleIndex ? "flex" : "none" }}
          >
            <div className="bg-white rounded-full p-5 w-[100px] h-[100px] md:w-[250px] md:h-[250px] flex items-center justify-center">
              <motion.img
                src={icon?.icon}
                alt="selected icon"
                className={` object-contain md:w-32 ${
                  index === visibleIndex ? "visible" : "hidden"
                }`}
              />
            </div>
          </motion.div>
        ))
      )}
      <p
        className={`absolute ${
          resultText === "YOU LOSE" ? "bottom-4 -left-8" : "-bottom-7  left-0"
        }  text-white text-sm text-center md:hidden w-full`}
      >
       {!houseChoice ? "HOUSE IS PICKING..." : "THE HOUSE PICKED"}
      </p>
    </motion.div>
  );
};

export default HouseSelection;
