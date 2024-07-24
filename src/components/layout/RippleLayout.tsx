import { ReactNode } from "react";
import { motion } from "framer-motion";
const RippleLayout = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  const staggerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      className="rounded-full p-7 bg-cyan-start bg-opacity-5 transform -translate-x-10 md:translate-x-1 w-fit relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="rounded-full p-4 bg-cyan-start bg-opacity-5 w-fit"
        variants={staggerVariants}
      >
        <motion.div
          className="rounded-full p-2 bg-cyan-start bg-opacity-10 w-fit"
          variants={staggerVariants}
        >
          <motion.div
            className={`rounded-full w-[120px] h-[120px] md:w-[250px] md:h-[250px] flex justify-center items-center shadow-2xl bg-gradient-to-br from-${name}-start to-${name}-end relative`}
            variants={staggerVariants}
          >
            <div
            className="bg-white rounded-full p-5 w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex items-center justify-center"
            >{children}</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RippleLayout;
