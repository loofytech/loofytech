import { motion } from "framer-motion";
import { FaCaretDown } from "react-icons/fa6";

export default function ContentThree() {
  const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (<>
    <div className="overflow-hidden absolute w-full h-screen bg-transparent" style={{zIndex: 3}}>
      <motion.div
        className="h-1/2 flex"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[...Array(10).fill(undefined).map((e: any, i: number) => {
          return (
            <div key={i} style={{width: "10%"}} className="bg-transparent relative overflow-hidden">
              <motion.div
                className="w-full h-full absolute bg-white"
                variants={{
                  hidden: {
                    right: "-99%"
                  },
                  visible: {
                    right: 0
                  }
                }}
                transition={{
                  ease: "easeInOut"
                }}
              />
            </div>
          );
        })]}
      </motion.div>
      <motion.div
        className="h-1/2 flex"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[...Array(10).fill(undefined).map((e: any, i: number) => {
          return (
            <div key={i} style={{width: "10%"}} className="bg-transparent relative overflow-hidden">
              <motion.div
                className="w-full h-full absolute bg-white"
                variants={{
                  hidden: {
                    left: "-99%"
                  },
                  visible: {
                    left: 0
                  }
                }}
                transition={{
                  ease: "easeInOut"
                }}
              />
            </div>
          );
        })]}
      </motion.div>
    </div>
    <div className="text-black w-full h-full absolute overflow-hidden p-16" style={{zIndex: 4}}>
      <div className="w-full h-full relative">
        <div className="absolute s-wrap w-32 text-center h-32 rounded-full leading-4 border-primary flex items-center justify-center px-2">
          <span>Requirement gathering and analysis</span>
          <div className="sl-right">
            <FaCaretDown className="absolute" style={{right: "-10.5px", top: "7%"}} size={24} />
          </div>
        </div>
        <div className="absolute s-wrap-2 w-32 text-center h-32 rounded-full leading-4 border-primary flex items-center justify-center px-2">
          <span>Design</span>
          <div className="sl-right">
            <FaCaretDown className="absolute" style={{right: "-10.5px", top: "7%"}} size={24} />
          </div>
        </div>
        <div className="absolute s-wrap-3 w-32 text-center h-32 rounded-full leading-4 border-primary flex items-center justify-center px-2">
          <span>Implementasi</span>
          <div className="sl-right">
            <FaCaretDown className="absolute" style={{right: "-10.5px", top: "7%"}} size={24} />
          </div>
        </div>
        <div className="absolute s-wrap-4 w-32 text-center h-32 rounded-full leading-4 border-primary flex items-center justify-center px-2">
          <span>Integration & testing</span>
          <div className="sl-right">
            <FaCaretDown className="absolute" style={{right: "-10.5px", top: "7%"}} size={24} />
          </div>
        </div>
        <div className="absolute s-wrap-5 w-32 text-center h-32 rounded-full leading-4 border-primary flex items-center justify-center px-2">
          <span>Verification</span>
          <div className="sl-right">
            <FaCaretDown className="absolute" style={{right: "-10.5px", top: "7%"}} size={24} />
          </div>
        </div>
        <div className="absolute s-wrap-6 w-32 text-center h-32 rounded-full leading-4 border-primary flex items-center justify-center px-2">
          <span>Operation & maintenance</span>
          <div className="sl-right-last">
            <FaCaretDown className="absolute" style={{right: "-10.5px", top: "7%"}} size={24} />
          </div>
        </div>
      </div>
    </div>
  </>);
}