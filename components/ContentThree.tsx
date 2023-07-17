import { motion } from "framer-motion";

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
                    right: "-9%"
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
                    left: "-9%"
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
  </>);
}