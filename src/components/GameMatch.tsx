import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gameConfig from "../lib/gameConfig";
import { GameStatus } from "../App";
import SelectedIcon from "./SelectedIcon";
import HouseSelection from "./HouseSelection";
import Info from "./Info";

const GameMatch = () => {
  const { playerChoice, houseChoice } = useContext(GameStatus);
  const selectedPlayerChoice = gameConfig.find(
    (item) => item.name === playerChoice
  );

  return (
    <motion.section
      className="mt-16 mb-20  md:mx-auto  md:mt-20"
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100vw", opacity: 0 }}
    >
      <motion.div
        className={`grid gap-2 grid-cols-2 grid-rows-[100px_200px] md:grid-rows-1 items-center relative md:w-2/3 md:mx-auto ${
          houseChoice
            ? "md:grid-cols-3"
            : "md:grid-cols-2 md:grid-rows-2"
        }`}
        layout
        transition={{ duration: 0.3 }}
      >

        <SelectedIcon
          selectedPlayerChoice={selectedPlayerChoice}
          className="order-1"
        />
        <HouseSelection className="order-2 md:order-3" />
        <AnimatePresence>
          {houseChoice && (
            <motion.div
              layout
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="order-3 md:col-span-1 col-span-2 md:order-2"
            >
              <Info />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default GameMatch;
