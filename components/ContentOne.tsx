import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function ContentOne() {
  const [processing, setProcessing] = useState<boolean>(true);
  const [pageTwo, setPageTwo] = useState<boolean>(false);

  const container = {
    // hidden: { left: "-100%" },
    visible: {
      // left: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const handleTabLogo = () => {
    setPageTwo(!pageTwo);
  }

  useEffect(() => {
    setTimeout(() => setProcessing(false), 3000);
  }, []);

  return (<>
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="w-28 h-28 shadow-lg bg-black border-2 relative border-primary flex items-center justify-center rounded-full">
        <Image
          src={"/logo-2-small.png"}
          width={75}
          height={77}
          alt="logo"
          className=""
        />
        <div className="absolute w-2/3 h-2/3 rounded-full bg-primary animate-ping" style={{zIndex: -1}}></div>
      </div>
      <span className="text-2xl">LOOFYTECH</span>
    </div>
    {!processing && <motion.div variants={container} initial="hidden" animate="visible" className="w-full h-full wrapper-one overflow-hidden">
      <motion.div
        className="w-1/2 h-full absolute bg-black"
        variants={{
          hidden: {left: "-100%"},
          visible: {left: 0}
        }}
      />
      <motion.div
        className="w-1/2 h-full absolute bg-black"
        variants={{
          hidden: {right: "-100%"},
          visible: {right: 0}
        }}
      />
      <motion.div
        className="absolute top-10 left-10 w-24 h-24"
        variants={{
          hidden: {top: "-100%"},
          visible: {top: "2.5rem"}
        }}
        transition={{
          delay: 1.5
        }}
        onTap={handleTabLogo}
      >
        <Logo />
      </motion.div>
      <motion.div
        variants={{
          hidden: {x: 150, y: 220, opacity: 0},
          visible: {x: 150, y: 200, opacity: 1}
        }}
        style={{zIndex: 2}}
        className="text-white tagline text-8xl font-semibold relative"
      >
        <span className="text-primary">M</span>agical & measurable
      </motion.div>
      <motion.div
        variants={{
          hidden: {x: 150, y: 220, opacity: 0},
          visible: {x: 150, y: 200, opacity: 1}
        }}
        style={{zIndex: 2}}
        className="text-white tagline text-8xl font-semibold relative"
      >
        <span className="text-primary">S</span>hared immersive
      </motion.div>
      <motion.div
        variants={{
          hidden: {x: 150, y: 220, opacity: 0},
          visible: {x: 150, y: 200, opacity: 1}
        }}
        style={{zIndex: 2}}
        className="text-white tagline text-8xl font-semibold relative"
      >
        <span className="text-primary">E</span>xperiences
      </motion.div>
    </motion.div>}
  </>);
}