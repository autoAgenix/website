import { motion } from "framer-motion";
// import { ChevronDownIcon } from "@heroicons/react/20/solid"; // Heroicons for the down icon

const AnimatedText = ({text}) => {


  return (
    <div className="flex flex-col items-center justify-center absolute bottom-1 left-0 right-0">
      {/* Text Animation */}
      <motion.h2
        className="text-md font-light tracking-tight leading-none"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        {text}
      </motion.h2>

      {/* Downward Icon Animation */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDownIcon className="w-6 h-6 text-white mt-2" />
      </motion.div> */}
    </div>
  );
};

export default AnimatedText ;
