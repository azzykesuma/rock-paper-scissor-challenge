import { motion } from "framer-motion";
import { useContext } from "react";
import { ModalContext } from "../App";
import closeIcon from "../assets/images/icon-close.svg";
import imageRules from "../assets/images/image-rules-bonus.svg";

const DialogRules = () => {
  const { setOpen } = useContext(ModalContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <motion.dialog
        initial={{ opacity: 0, }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        className="bg-white h-screen w-full md:h-[450px] md:w-[450px] md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 p-7 flex flex-col justify-between items-center md:rounded"
        open
      >
        <div className="flex justify-center md:justify-between w-full">
          <h2 className="font-bold text-lg text-darkText md:text-2xl">RULES</h2>
          <button className="hidden md:block" onClick={() => setOpen(false)}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
        <img src={imageRules} alt="rules of the game" />
        <button className="block md:hidden" onClick={() => setOpen(false)}>
          <img src={closeIcon} alt="close icon" />
        </button>
      </motion.dialog>
    </motion.div>
  );
};

export default DialogRules;
