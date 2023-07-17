import { motion } from "framer-motion";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import Image from "next/image";
import { setPageOne, setPageTwo, setPageThree } from "@/store/reducers/pageReducer";
import { useDispatch } from "react-redux";

export default function ContentTwo() {
  const dispatch = useDispatch();

  const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const handleShowReel = () => {
    dispatch(setPageThree(true));
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
                  right: "-100%"
                },
                visible: {
                  right: 0
                }
              }}
              transition={{
                delay: 0.5,
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
            delay: 0.5
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
                delay: 0.5,
                ease: "easeIn"
              }}
            />
          </motion.div>
        })]}
        <motion.div
          className="absolute top-0 left-28 w-2/3 tagline text-5xl text-white flex"
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
          <div className="c2-tag-bottom">
            blends bold creativity with cutting-edge technology to craft experiences that people talk about, long after the lights go out.
            <button className="c2-button" onClick={handleShowReel}>
              <span>View our showreel</span>
              <FaArrowRightLong className="c2-button-arrow" size={18} />
            </button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="absolute bottom-10 right-14">
        <div className="absolute w-full h-full flex items-center justify-center" style={{zIndex: 2}}>
          {/* <FaStar size={18} className="text-white" /> */}
          <Image src={"/logo-2-svg.svg"} width={30} height={30} alt="" />
        </div>
        <FaStar size={98} className="spin-star text-primary" />
      </motion.div>
    </div>
  </>);
}