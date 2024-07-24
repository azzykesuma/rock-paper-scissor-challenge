import { useContext } from "react";
import pentagon from "../assets/images/bg-pentagon.svg";
import gameConfig from "../lib/gameConfig";
import { motion } from "framer-motion";
import { GameStatus } from "../App";
import { allPossibleChoices } from "../../Types";

const MainGameInterface = () => {
    const {setStep, setPlayerChoice} = useContext(GameStatus)
    const onPlayerSelect = (name: allPossibleChoices) => {
        setStep('housepick')
        if(setPlayerChoice) {
            setPlayerChoice(name)
        }
    }
  return (
    <motion.section className="mt-16 my-24"
    initial={{x: '-100vw', opacity: 0}}
    animate={{x: 0, opacity: 1}}
    exit={{x: '-100vw', opacity: 0}}
    >
      <div className="w-64 md:w-[450px] mx-auto relative">
        <img src={pentagon} alt="pentagon background image"  className="w-full" />
        <div>
          {gameConfig.map((item) => (
            <motion.button key={item.name}
            whileTap={{scale: 0.9}}
            className={`${item.className}  w-[75px] h-[75px] md:w-[130px] md:h-[130px] flex justify-center items-center shadow-lg `}
            onClick={() => onPlayerSelect(item.name as allPossibleChoices)}
            >
              <div className="bg-white rounded-full flex justify-center items-center w-14 h-14 md:w-[100px] md:h-[100px]">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-10  object-contain"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MainGameInterface;
