import { motion } from "framer-motion";

export default function Logo() {
  const icon = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1
    }
  }

  const handleTransitionEnd = (e: any) => {
    console.log(e);
  }

  return (
    <motion.svg
      whileTap={{
        rotate: 25
      }}
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3090.62 3177.58"
      className="outline-none"
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <motion.path className="cls-1" d="M619.85,1180.71v19.52c-2.91,1.37-5.8,2.76-8.69,4.16l8.69-23.68Z"/>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1
          }}
          strokeWidth={4}
          strokeDasharray="0 1"
          className="cls-2"
          d="M2074.46,2122.85c0,563.18-456.55,1019.73-1019.73,1019.73S35,2686.03,35,2122.85c0-91.61,34.73-1379.39,34.73-1379.39h.08c-.05-2.23-.08-4.47-.08-6.71,0-151.91,123.15-275.06,275.06-275.06s275.06,123.15,275.06,275.06c0,2.24-.03,4.48-.08,6.71h.08v437.25L971.76,221.68l.08,.03c.71-2.11,1.46-4.22,2.23-6.33C1026.4,72.77,1184.43-.42,1327.04,51.91c142.62,52.33,215.8,210.37,163.47,352.98-.77,2.11-1.57,4.2-2.39,6.27l.08,.03-259.34,706.74c480.23,82.63,845.6,501.1,845.6,1004.92Z"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1
          }}
          onTransitionEnd={handleTransitionEnd}
          strokeWidth={4}
          strokeDasharray="0 1"
          className="cls-3" d="M3055.62,2099.36c0,110.73-65.43,206.18-159.73,249.79v235.63h-.05c.03,1.32,.05,2.64,.05,3.97,0,89.9-72.88,162.78-162.79,162.78s-162.78-72.88-162.78-162.78c0-1.33,.02-2.65,.05-3.97h-.05v-210.36h-90.37v210.36h-.05c.03,1.32,.05,2.64,.05,3.97,0,89.9-72.88,162.78-162.79,162.78s-162.78-72.88-162.78-162.78c0-1.33,.02-2.65,.05-3.97h-.05v-210.36h-715.02c-82.08,125.24-223.69,207.97-384.63,207.97-253.8,0-459.55-205.74-459.55-459.54s205.75-459.55,459.55-459.55c139.84,0,265.09,62.46,349.37,161.01h1369.75v.08c2.23-.05,4.47-.08,6.71-.08,151.91,0,275.06,123.14,275.06,275.05Z"
        />
      </g>
    </motion.svg>
  )
}