import { motion } from "framer-motion";

export default function ContentTwo() {
  const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (<>
    <div className="overflow-hidden absolute w-full h-screen bg-transparent" style={{zIndex: 2}}>
      <motion.div className="h-1/3 flex relative overflow-hidden" variants={container} initial="hidden" animate="visible">
        {[...Array(10).fill(undefined).map((a: any, i: number) => {
          return <motion.div
            key={i}
            style={{width: "10%"}}
            className="overflow-hidden h-full relative"
          >
            <motion.div
              className="w-full h-full bg-white absolute"
              variants={{
                hidden: {
                  top: "-100%",
                  right: "-100%"
                },
                visible: {
                  top: 0,
                  right: 0
                }
              }}
              transition={{
                delay: 0 + i / 10,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        })]}
        <motion.div
          className="absolute bottom-0 left-28 tagline text-5xl text-black"
          variants={{
            hidden: {
              bottom: "-20%"
            },
            visible: {
              bottom: 0
            }
          }}
          transition={{
            delay: 0.8
          }}
        >
          We believe in breaking boundaries. Everything we do
        </motion.div>
      </motion.div>
      <motion.div className="h-2/3 flex relative overflow-hidden" variants={container} initial="hidden" animate="visible">
        {[...Array(10).fill(undefined).map((a: any, i: number) => {
          return <motion.div
            key={i}
            style={{width: "10%"}}
            className="overflow-hidden h-full relative"
          >
            <motion.div
              className="w-full h-full bg-black absolute"
              variants={{
                hidden: {
                  bottom: "-100%",
                  left: "-100%"
                },
                visible: {
                  bottom: 0,
                  left: 0
                }
              }}
              transition={{
                delay: 0 + i / 10,
                ease: "easeIn"
              }}
            />
          </motion.div>
        })]}
        <motion.div
          className="absolute top-0 left-28 w-2/3 tagline text-5xl text-white"
          variants={{
            hidden: {
              top: "-30%"
            },
            visible: {
              top: 0
            }
          }}
          transition={{
            delay: 0.8
          }}
        >
          blends bold creativity with cutting-edge technology to craft experiences that people talk about, long after the lights go out.
        </motion.div>
      </motion.div>
    </div>
  </>);
}