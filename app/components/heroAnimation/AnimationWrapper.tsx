import { useState, useEffect } from "react";
// import { animate, timeline } from "motion";
import { WalletIcon, TransactionIcon, CollectionIcon } from "./icons";
import { motion, AnimatePresence } from "motion/react";

interface SequenceDataProps {
  title: string;
  icon: () => JSX.Element;
  colors: {
    icon: () => JSX.Element;
    borderColor: string;
    bgColor: string;
    gradientColor: string;
    cellBgGradient: string;
    circuitLineColor: string;
  };
}

const SequenceLogoSVG = () => {
  return (
    <svg
      width="106"
      height="90"
      viewBox="0 0 106 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="13" y="12.8582" width="80" height="64.2838" rx="14" fill="black" />
      <rect
        x="14"
        y="13.8582"
        width="78"
        height="62.2838"
        rx="13"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
      <g filter="url(#filter0_dd_497_13209)">
        <rect
          x="20.6073"
          y="20.3659"
          width="64.7854"
          height="49.2684"
          rx="11.3227"
          stroke="black"
          strokeWidth="0.98458"
          shapeRendering="crispEdges"
        />
        <path
          d="M22.0996 58.8818L22.0996 31.1186C22.0996 26.0558 26.4548 21.8583 31.9457 21.8583H74.0543C79.5452 21.8583 83.9004 26.0558 83.9004 31.1186V58.8818C83.9004 63.9445 79.5452 68.1421 74.0543 68.1421H31.9457C26.4548 68.1421 22.0996 63.9445 22.0996 58.8818Z"
          fill="#170B32"
          stroke="url(#paint0_linear_497_13209)"
          strokeWidth="2"
        />
        <path
          d="M37.0498 32.9291C37.0498 31.2625 35.6216 29.9114 33.8598 29.9114C32.098 29.9114 30.6697 31.2625 30.6697 32.9291C30.6697 34.5958 32.098 35.9469 33.8598 35.9469C35.6216 35.9469 37.0498 34.5958 37.0498 32.9291Z"
          fill="url(#paint1_linear_497_13209)"
        />
        <path
          d="M37.0498 32.9291C37.0498 31.2625 35.6216 29.9114 33.8598 29.9114C32.098 29.9114 30.6697 31.2625 30.6697 32.9291C30.6697 34.5958 32.098 35.9469 33.8598 35.9469C35.6216 35.9469 37.0498 34.5958 37.0498 32.9291Z"
          fill="url(#paint2_linear_497_13209)"
        />
        <path
          d="M37.0498 32.9291C37.0498 31.2625 35.6216 29.9114 33.8598 29.9114C32.098 29.9114 30.6697 31.2625 30.6697 32.9291C30.6697 34.5958 32.098 35.9469 33.8598 35.9469C35.6216 35.9469 37.0498 34.5958 37.0498 32.9291Z"
          fill="url(#paint3_linear_497_13209)"
        />
        <path
          d="M37.0498 32.9291C37.0498 31.2625 35.6216 29.9114 33.8598 29.9114C32.098 29.9114 30.6697 31.2625 30.6697 32.9291C30.6697 34.5958 32.098 35.9469 33.8598 35.9469C35.6216 35.9469 37.0498 34.5958 37.0498 32.9291Z"
          fill="#7537F9"
        />
        <path
          d="M37.0498 57.0518C37.0498 55.3851 35.6216 54.0341 33.8598 54.0341C32.098 54.0341 30.6697 55.3851 30.6697 57.0518C30.6697 58.7184 32.098 60.0695 33.8598 60.0695C35.6216 60.0695 37.0498 58.7184 37.0498 57.0518Z"
          fill="#7537F9"
        />
        <path
          d="M75.3303 44.9999C75.3303 43.3333 73.902 41.9822 72.1402 41.9822C70.3784 41.9822 68.9502 43.3333 68.9502 44.9999C68.9502 46.6666 70.3784 48.0177 72.1402 48.0177C73.902 48.0177 75.3303 46.6666 75.3303 44.9999Z"
          fill="url(#paint4_linear_497_13209)"
        />
        <path
          d="M75.3303 44.9999C75.3303 43.3333 73.902 41.9822 72.1402 41.9822C70.3784 41.9822 68.9502 43.3333 68.9502 44.9999C68.9502 46.6666 70.3784 48.0177 72.1402 48.0177C73.902 48.0177 75.3303 46.6666 75.3303 44.9999Z"
          fill="#7537F9"
        />
        <g filter="url(#filter1_di_497_13209)">
          <path
            d="M72.1402 29.9114H46.6199C44.8581 29.9114 43.4299 31.2625 43.4299 32.9291C43.4299 34.5958 44.8581 35.9469 46.6199 35.9469H72.1402C73.902 35.9469 75.3303 34.5958 75.3303 32.9291C75.3303 31.2625 73.902 29.9114 72.1402 29.9114Z"
            fill="#7537F9"
          />
        </g>
        <path
          d="M72.1402 54.0341H46.6199C44.8581 54.0341 43.4299 55.3851 43.4299 57.0518C43.4299 58.7184 44.8581 60.0695 46.6199 60.0695H72.1402C73.902 60.0695 75.3303 58.7184 75.3303 57.0518C75.3303 55.3851 73.902 54.0341 72.1402 54.0341Z"
          fill="#7537F9"
        />
        <g filter="url(#filter2_i_497_13209)">
          <path
            d="M59.3801 41.9822H33.8598C32.098 41.9822 30.6697 43.3333 30.6697 44.9999C30.6697 46.6666 32.098 48.0177 33.8598 48.0177H59.3801C61.1419 48.0177 62.5701 46.6666 62.5701 44.9999C62.5701 43.3333 61.1419 41.9822 59.3801 41.9822Z"
            fill="#7537F9"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_497_13209"
          x="0.423449"
          y="0.181932"
          width="105.153"
          height="89.6363"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="9.8458" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.85098 0 0 0 0 0.447059 0 0 0 0 0.945098 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_497_13209" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.9229" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_497_13209"
            result="effect2_dropShadow_497_13209"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_497_13209"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_di_497_13209"
          x="39.4299"
          y="29.9114"
          width="39.9004"
          height="14.0355"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_497_13209" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_497_13209"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.578144 0 0 0 0 0.38 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_497_13209" />
        </filter>
        <filter
          id="filter2_i_497_13209"
          x="30.6697"
          y="41.9822"
          width="31.9004"
          height="10.0355"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.46 0 0 0 0 0.28 0 0 0 0 1 0 0 0 1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_497_13209" />
        </filter>
        <linearGradient
          id="paint0_linear_497_13209"
          x1="70.5"
          y1="73.0015"
          x2="30.5"
          y2="20.5015"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2A1558" />
          <stop offset="1" stopColor="#6933E3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_497_13209"
          x1="31.6525"
          y1="35.9055"
          x2="35.6837"
          y2="30.2081"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4462FE" />
          <stop offset="1" stopColor="#7D69FA" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_497_13209"
          x1="31.2304"
          y1="35.9498"
          x2="36.587"
          y2="35.6595"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3757FD" />
          <stop offset="1" stopColor="#6980FA" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_497_13209"
          x1="31.2304"
          y1="35.9498"
          x2="36.587"
          y2="35.6595"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2447FF" />
          <stop offset="1" stopColor="#6980FA" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_497_13209"
          x1="70.2391"
          y1="47.0009"
          x2="73.9438"
          y2="42.8334"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29BDFF" />
          <stop offset="1" stopColor="#96E7FB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const MainChipSequence = () => {
  return (
    <div className="z-50 border-2 border-white-10 rounded-xl p-1.5 md:p-2 bg-white-5 backdrop-blur-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-row">
        {/* left */}
        <div className="flex flex-col gap-0.5 md:gap-1 justify-between">
          <div className="bg-white-10 rounded-full size-2"></div>
          <div className="flex flex-col gap-[6px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-2 h-0.5 bg-white-10 rounded-px"></div>
            ))}
          </div>
          <div className="bg-white-10 rounded-full size-2"></div>
        </div>
        {/* center */}
        <div className="flex flex-col gap-0.5 md:gap-1 justify-between items-center">
          <div className="flex flex-row gap-[6px]">
            {" "}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-0.5 h-2 bg-white-10 rounded-px"></div>
            ))}
          </div>
          <SequenceLogoSVG />
          <div className="flex flex-row gap-[6px]">
            {" "}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-0.5 h-2 bg-white-10 rounded-px"></div>
            ))}
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-0.5 md:gap-1 justify-between">
          <div className="bg-white-10 rounded-full size-2"></div>
          <div className="flex flex-col gap-[6px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="w-2 h-0.5 bg-white-10 rounded-px"></div>
            ))}
          </div>
          <div className="bg-white-10 rounded-full size-2"></div>
        </div>
      </div>
    </div>
  );
};

const TopLeftChip = ({
  data,
  cellIsActive,
}: {
  data: SequenceDataProps;
  cellIsActive: boolean;
}) => {
  return (
    <div className="z-50 relative">
      <div className="inline-flex relative flex-row gap-2 border-2 border-white-5 rounded-lg p-2 bg-white-5 backdrop-blur-sm overflow-hidden">
        {/* left */}
        <div className="relative z-10 flex flex-col gap-2">
          <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="size-[3px] bg-white-15 rounded-full"></div>
          ))}
          <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
        </div>
        {/* center */}
        <SequenceFeatureCarousel data={data} cellIsActive={cellIsActive} />
        {/* right */}
        <div className="relative z-10 flex flex-col gap-2">
          <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="size-[3px] bg-white-15 rounded-full"></div>
          ))}
          <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
        </div>
        {/* bg gradient */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cellIsActive ? "active" : "inactive"}
            initial={{
              background: "#00000090",
              opacity: 0,
            }}
            animate={{
              background: cellIsActive ? data.colors.cellBgGradient : "#00000090",
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="z-0 absolute inset-0 backdrop-blur-sm"
          ></motion.div>
        </AnimatePresence>
      </div>
      {/* text box */}
      {/* NOTE: these text elements are positioned absolutely for each "Chip" because their width can vary, so block positioning would cause the chip to translate when the text changes */}
      <div className="absolute bottom-[-55%] left-1/2 -translate-x-1/2">
        <SequenceFeatureTextCarousel data={data} cellIsActive={cellIsActive} />
      </div>
    </div>
  );
};

const TopLeftCircuitLines = ({
  isActive,
  circuitLineColor,
}: {
  isActive: boolean;
  circuitLineColor: string;
}) => {
  const styles = {
    opacity: {
      off: [0.5, 0.5, 0.5],
      on: [0.5, 1, 0.5],
    },
    stroke1: {
      off: "#ffffff30",
      on: "url(#paint0_linear_520_8464)",
    },
    stroke2: {
      off: "#ffffff30",
      on: "url(#paint1_linear_520_8464)",
    },
    stroke3: {
      off: "#ffffff30",
      on: "url(#paint2_linear_520_8464)",
    },
  };

  const transitions = {
    delay: isActive ? 0.25 : 0,
    repeat: isActive ? Infinity : 0,
    ease: "easeInOut",
  };

  return (
    <svg width="94" height="73" viewBox="0 0 94 73" fill="none" xmlns="http://www.w3.org/2000/svg">
      <AnimatePresence mode="wait">
        {/* First path */}
        <motion.path
          key={`path1-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, stroke: styles.stroke1.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            stroke: isActive ? styles.stroke1.on : styles.stroke1.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            delay: transitions.delay,
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 1.5 : 0.15,
          }}
          d="M0 14.4043L42.8579 14.4043C45.51 14.4043 48.0536 15.4579 49.9289 17.3332L75.5711 42.9754C77.4464 44.8507 78.5 47.3943 78.5 50.0464L78.5 72.4043"
          strokeWidth="2"
        />

        {/* Second path */}
        <motion.path
          key={`path2-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, stroke: styles.stroke2.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            stroke: isActive ? styles.stroke2.on : styles.stroke2.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            delay: transitions.delay,
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 2.5 : 0.15,
          }}
          d="M0 8L46.6336 8C49.2858 8 51.8293 9.05357 53.7047 10.9289L82.4968 39.7211C84.3722 41.5964 85.4258 44.14 85.4258 46.7921L85.4258 72.5254"
          strokeWidth="2"
        />

        {/* Third path */}
        <motion.path
          key={`path3-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, stroke: styles.stroke3.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            stroke: isActive ? styles.stroke3.on : styles.stroke3.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            delay: transitions.delay,
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 1.5 : 0.15,
          }}
          d="M0 0.999996L50.487 0.999998C53.1392 0.999998 55.6827 2.05357 57.5581 3.92893L89.8152 36.1861C91.6906 38.0614 92.7441 40.605 92.7441 43.2571L92.7441 72.4033"
          strokeWidth="2"
        />
      </AnimatePresence>

      <defs>
        <linearGradient
          id="paint0_linear_520_8464"
          x1="69.5"
          y1="63.5"
          x2="25"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={circuitLineColor} />
          <stop offset="1" stopColor="#21113e" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_520_8464"
          x1="29"
          y1="10.5"
          x2="85"
          y2="63.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.29326" stopColor={circuitLineColor} />
          <stop offset="1" stopColor="#21113e" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_520_8464"
          x1="69.5"
          y1="63.5"
          x2="25"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={circuitLineColor} />
          <stop offset="1" stopColor="#21113e" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const BottomLeftChip = ({
  data,
  cellIsActive,
}: {
  data: SequenceDataProps;
  cellIsActive: boolean;
}) => {
  return (
    <div className="z-50 relative">
      <div className="inline-flex relative flex-row gap-2 border-2 border-white-5 rounded-lg p-2 bg-white-5 backdrop-blur-sm overflow-hidden">
        {/* left */}
        <div className="relative z-10 flex flex-col justify-between">
          <div className="size-[3px] bg-white-15 rounded-full"></div>
          <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
          <div className="size-[3px] bg-white-15 rounded-full"></div>
        </div>
        {/* center */}
        <SequenceFeatureCarousel data={data} cellIsActive={cellIsActive} />
        {/* right */}
        <div className="relative z-10 flex flex-col justify-between">
          <div className="size-[3px] bg-white-15 rounded-full"></div>
          <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
          <div className="size-[3px] bg-white-15 rounded-full"></div>
        </div>
        {/* bg gradient */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cellIsActive ? "active" : "inactive"}
            initial={{
              background: "#00000090",
              opacity: 0,
            }}
            animate={{
              background: cellIsActive ? data.colors.cellBgGradient : "#00000090",
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="z-0 absolute inset-0 backdrop-blur-sm"
          ></motion.div>
        </AnimatePresence>
      </div>
      {/* text box */}
      <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2">
        <SequenceFeatureTextCarousel data={data} cellIsActive={cellIsActive} />
      </div>
    </div>
  );
};

const BottomLeftCircuitLines = ({
  isActive,
  circuitLineColor,
}: {
  isActive: boolean;
  circuitLineColor: string;
}) => {
  const styles = {
    opacity: {
      off: 0.5,
      on: [0.5, 1, 0.5],
    },
    fill: {
      off: "#ffffff30",
      on: "url(#paint0_linear_509_3705)",
    },
  };

  const transitions = {
    delay: isActive ? 0.25 : 0,
    repeat: isActive ? Infinity : 0,
    ease: "easeInOut",
  };

  return (
    <svg width="74" height="94" viewBox="0 0 74 94" fill="none" xmlns="http://www.w3.org/2000/svg">
      <AnimatePresence mode="wait">
        <motion.path
          key={`path1-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, fill: styles.fill.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            fill: isActive ? styles.fill.on : styles.fill.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 3 : 0.15,
          }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.8932 4.63604C38.581 2.94821 40.8702 2 43.2571 2H72.4033V0H43.2571C40.3398 0 37.5419 1.15893 35.479 3.22183L3.22183 35.479C1.15893 37.5419 0 40.3398 0 43.2571V93.7441H2V43.2571C2 40.8702 2.94821 38.581 4.63604 36.8932L36.8932 4.63604Z"
        />
        <motion.path
          key={`path2-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, fill: styles.fill.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            fill: isActive ? styles.fill.on : styles.fill.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 2 : 0.15,
          }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.6701 9.31836C44.2831 9.31836 41.9939 10.2666 40.3061 11.9544L11.514 40.7465C9.82614 42.4344 8.87793 44.7236 8.87793 47.1105V93.7441H6.87793V47.1105C6.87793 44.1931 8.03685 41.3952 10.0998 39.3323L38.8919 10.5402C40.9548 8.47729 43.7527 7.31836 46.6701 7.31836H72.4033V9.31836H46.6701Z"
        />
        <motion.path
          key={`path3-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, fill: styles.fill.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            fill: isActive ? styles.fill.on : styles.fill.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 1.5 : 0.15,
          }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.6815 18.8802C45.3693 17.1924 47.6585 16.2441 50.0455 16.2441H72.4033V14.2441H50.0455C47.1281 14.2441 44.3302 15.4031 42.2673 17.466L16.6251 43.1081C14.5622 45.171 13.4033 47.9689 13.4033 50.8863V93.7441H15.4033V50.8863C15.4033 48.4993 16.3515 46.2101 18.0394 44.5223L43.6815 18.8802Z"
        />
        <motion.path
          key={`path4-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, fill: styles.fill.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            fill: isActive ? styles.fill.on : styles.fill.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 1.3 : 0.15,
          }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.6537 26.4416C49.1727 24.9226 51.233 24.0692 53.3813 24.0692H73.5033V22.2692H53.3813C50.7556 22.2692 48.2375 23.3122 46.3809 25.1688L23.303 48.2468C21.4464 50.1034 20.4033 52.6215 20.4033 55.2471V93.8192H22.2033V55.2471C22.2033 53.0989 23.0567 51.0386 24.5758 49.5195L47.6537 26.4416Z"
        />
      </AnimatePresence>
      <defs>
        <linearGradient
          id="paint0_linear_509_3705"
          x1="42.9281"
          y1="0"
          x2="42.9281"
          y2="93.8192"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={circuitLineColor} />
          <stop offset="0.262213" stopColor="#21113e" />
          <stop offset="1" stopColor={circuitLineColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const MiddleChip = ({ data, cellIsActive }: { data: SequenceDataProps; cellIsActive: boolean }) => {
  return (
    <div className="z-50 relative">
      <div className="inline-flex relative flex-col gap-1.5 border-2 border-white-5 rounded-lg p-2 bg-white-5 backdrop-blur-sm overflow-hidden">
        {/* top */}
        <div className="relative z-10 flex flex-row justify-between">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="size-[3px] bg-white-15 rounded-full"></div>
          ))}
        </div>
        {/* center */}
        <SequenceFeatureCarousel data={data} cellIsActive={cellIsActive} />
        {/* bottom */}
        <div className="relative z-10 flex flex-row justify-between">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="size-[3px] bg-white-15 rounded-full"></div>
          ))}
        </div>
        {/* bg gradient */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cellIsActive ? "active" : "inactive"}
            initial={{
              background: "#00000090",
              opacity: 0,
            }}
            animate={{
              background: cellIsActive ? data.colors.cellBgGradient : "#00000090",
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="z-0 absolute inset-0 backdrop-blur-sm"
          ></motion.div>
        </AnimatePresence>
      </div>
      {/* text box */}
      <div className="absolute bottom-[-41%] left-1/2 -translate-x-1/2">
        <SequenceFeatureTextCarousel data={data} cellIsActive={cellIsActive} />
      </div>
    </div>
  );
};

const MiddleCircuitLines = ({
  isActive,
  circuitLineColor,
}: {
  isActive: boolean;
  circuitLineColor: string;
}) => {
  const styles = {
    opacity: {
      off: 0.5,
      on: [0.5, 1, 0.5],
    },
    stroke1: {
      off: "#ffffff30",
      on: "url(#paint0_linear_510_3712)",
    },
    stroke2: {
      off: "#ffffff30",
      on: "url(#paint1_linear_510_3712)",
    },
    stroke3: {
      off: "#ffffff30",
      on: "url(#paint2_linear_510_3712)",
    },
    stroke4: {
      off: "#ffffff30",
      on: "url(#paint3_linear_510_3712)",
    },
    stroke5: {
      off: "#ffffff30",
      on: "url(#paint4_linear_510_3712)",
    },
  };

  const transitions = {
    delay: isActive ? 0.25 : 0,
    repeat: isActive ? Infinity : 0,
    ease: "easeInOut",
  };

  return (
    <svg width="75" height="78" viewBox="0 0 75 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <AnimatePresence mode="wait">
        <motion.path
          key={`path1-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, stroke: styles.stroke1.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            stroke: isActive ? styles.stroke1.on : styles.stroke1.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 1.5 : 0.15,
          }}
          d="M75 44H62.1421C59.49 44 56.9464 45.0536 55.0711 46.9289L39.9289 62.0711C38.0536 63.9464 35.51 65 32.8579 65H0"
          strokeWidth="2"
        />
        <motion.path
          key={`path2-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, stroke: styles.stroke2.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            stroke: isActive ? styles.stroke2.on : styles.stroke2.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 2 : 0.15,
          }}
          d="M75 28H62.1421C59.49 28 56.9464 26.9464 55.0711 25.0711L39.9289 9.92893C38.0536 8.05357 35.51 7 32.8579 7H0"
          strokeWidth="2"
        />
        <motion.path
          key={`path3-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, stroke: styles.stroke3.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            stroke: isActive ? styles.stroke3.on : styles.stroke3.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 3 : 0.15,
          }}
          d="M75 50H66.6421C63.99 50 61.4464 51.0536 59.5711 52.9289L44.4289 68.0711C42.5536 69.9464 40.01 71 37.3579 71H0"
          strokeWidth="2"
        />
        <motion.path
          key={`path4-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, stroke: styles.stroke4.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            stroke: isActive ? styles.stroke4.on : styles.stroke4.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 1.25 : 0.15,
          }}
          d="M75 22H66.6421C63.99 22 61.4464 20.9464 59.5711 19.0711L44.4289 3.92893C42.5536 2.05357 40.01 1 37.3579 1H0"
          strokeWidth="2"
        />
        <motion.path
          key={`path5-${isActive ? "active" : "inactive"}`}
          initial={{ opacity: styles.opacity.off, stroke: styles.stroke5.off }}
          animate={{
            opacity: isActive ? styles.opacity.on : styles.opacity.off,
            stroke: isActive ? styles.stroke5.on : styles.stroke5.off,
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          transition={{
            repeat: transitions.repeat,
            ease: transitions.ease,
            duration: isActive ? 2.75 : 0.15,
          }}
          d="M75 56H71.1421C68.49 56 65.9464 57.0536 64.0711 58.9289L48.9289 74.0711C47.0536 75.9464 44.51 77 41.8579 77H0"
          strokeWidth="2"
        />
      </AnimatePresence>
      <defs>
        <linearGradient
          id="paint0_linear_510_3712"
          x1="0"
          y1="54.5"
          x2="75"
          y2="54.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21113e" />
          <stop offset="0.407213" stopColor={circuitLineColor} />
          <stop offset="1" stopColor="#21113e" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_510_3712"
          x1="75"
          y1="17.5"
          x2="0"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21113e" />
          <stop offset="0.242213" stopColor="#21113e" />
          <stop offset="1" stopColor={circuitLineColor} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_510_3712"
          x1="0"
          y1="60.5"
          x2="75"
          y2="60.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21113e" />
          <stop offset="1" stopColor={circuitLineColor} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_510_3712"
          x1="0"
          y1="11.5"
          x2="75"
          y2="11.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21113e" />
          <stop offset="1" stopColor={circuitLineColor} />
        </linearGradient>
        <linearGradient
          id="paint4_linear_510_3712"
          x1="75"
          y1="66.5"
          x2="0"
          y2="66.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21113e" />
          <stop offset="1" stopColor={circuitLineColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const SequenceFeatureCarousel = ({
  data,
  cellIsActive,
}: {
  data: SequenceDataProps;
  cellIsActive: boolean;
}) => {
  const color = {
    borderColor: {
      on: data.colors.borderColor,
      off: "#18181890",
    },
    gradientColor: {
      on: [data.colors.gradientColor, "#181818", data.colors.gradientColor],
      off: "#181818",
    },
    bgColor: {
      on: data.colors.bgColor,
      off: "#000000",
    },
    opacity: {
      on: [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      off: 0,
    },
  };

  const transition = {
    duration: 0.5,
  };

  return (
    <motion.div
      className="relative z-10 rounded-[11px] p-[4px] bg-black"
      initial={{
        borderColor: color.borderColor.off,
      }}
      animate={{
        borderColor: cellIsActive ? color.borderColor.on : color.borderColor.off,
      }}
      transition={transition}
      style={{
        border: `2px solid ${color.borderColor.off}`,
      }}
    >
      <motion.div
        initial={{
          background: color.gradientColor.off,
        }}
        animate={{
          background: cellIsActive ? color.gradientColor.on : color.gradientColor.off,
        }}
        transition={transition}
        className="size-10 p-[2px] rounded-[6px]"
        style={{
          background: color.gradientColor.off,
        }}
      >
        <motion.div
          initial={{
            background: color.bgColor.off,
          }}
          animate={{
            background: cellIsActive ? color.bgColor.on : color.bgColor.off,
          }}
          transition={transition}
          className="grid place-items-center size-full bg-black rounded-[5px]"
          style={{
            background: cellIsActive ? color.bgColor.on : color.bgColor.off,
          }}
        >
          <motion.div
            initial={{
              opacity: color.opacity.off,
            }}
            animate={{
              opacity: cellIsActive ? color.opacity.on : color.opacity.off,
            }}
            transition={transition}
            className="size-4 grid place-items-center"
          >
            {data.colors.icon()}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SequenceFeatureTextCarousel = ({
  data,
  cellIsActive,
}: {
  data: SequenceDataProps;
  cellIsActive: boolean;
}) => {
  const animationStyles = {
    borderColor: {
      on: "#303030",
      off: "#060606",
    },
    bgColor: {
      on: "#0C0C0C",
      off: "#000000",
    },
    opacity: {
      on: 1,
      off: 0,
    },
    y: {
      on: 0,
      off: 10,
    },
  };

  const transition = {
    duration: 0.25,
  };

  return (
    <div className="inline mx-auto relative z-20">
      <AnimatePresence mode="wait">
        <motion.div
          layout
          key={data.title}
          initial={{
            opacity: animationStyles.opacity.off,
            border: `1px solid ${animationStyles.borderColor.off}`,
            background: animationStyles.bgColor.off,
            y: animationStyles.y.off,
          }}
          animate={{
            opacity: cellIsActive ? animationStyles.opacity.on : animationStyles.opacity.off,
            border: cellIsActive
              ? `1px solid ${animationStyles.borderColor.on}`
              : `1px solid ${animationStyles.borderColor.off}`,
            background: cellIsActive ? animationStyles.bgColor.on : animationStyles.bgColor.off,
            y: cellIsActive ? animationStyles.y.on : animationStyles.y.off,
          }}
          exit={{
            opacity: 0,
            y: 5,
          }}
          transition={transition}
          className="rounded-[4px] px-2 py-[3px] inline-grid place-items-center"
        >
          <span className="text-white-50 text-[10px] md:text-xs font-medium whitespace-nowrap">
            {data.title}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Custom hook for managing independent clocks and cycling through data
const useSequenceClock = (initialDelay: number, dataArray: SequenceDataProps[]) => {
  const [cellIsActive, setCellIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initial timeout to start the clock with a random delay
    const initialTimeoutId = setTimeout(() => {
      let isActive = false; // Start with inactive state
      let index = 0;
      let timeoutId: NodeJS.Timeout; // Declare timeoutId variable

      const toggleClock = () => {
        // Toggle between active and inactive states
        isActive = !isActive;
        setCellIsActive(isActive);

        // When becoming inactive, increment the index
        if (!isActive) {
          // Increment index and loop back to 0 if needed
          index = (index + 1) % dataArray.length;
          setCurrentIndex(index);
        }

        // Schedule next toggle based on current state
        // Generate random active duration between 3500ms and 4500ms
        const activeDuration = isActive
          ? Math.floor(Math.random() * (5500 - 3000 + 1)) + 3000
          : 1250; // Random active duration | Inactive duration
        timeoutId = setTimeout(toggleClock, activeDuration);
      };

      // Start the first toggle
      toggleClock();

      // Cleanup function
      return () => {
        clearTimeout(timeoutId);
      };
    }, initialDelay);

    // Cleanup initial timeout
    return () => clearTimeout(initialTimeoutId);
  }, [dataArray.length, initialDelay]); // Added initialDelay as dependency

  // Return both the active state and the current data item
  return {
    isActive: cellIsActive,
    currentData: dataArray[currentIndex],
    currentIndex,
  };
};

const CapacitorDecorator = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white-15 rounded-full h-[3px] w-[7px]"></div>
      <div className="flex items-center">
        <div className="bg-white-15 w-[2px] h-[3px]"></div>
        <div className="bg-white-10 size-[5px]"></div>
        <div className="bg-white-15 w-[2px] h-[3px]"></div>
      </div>
      <div className="bg-white-15 rounded-full h-[3px] w-[7px]"></div>
    </div>
  );
};

const Decorators = () => {
  return (
    <div className="z-0 absolute top-0 left-0 w-full h-full">
      <div className="absolute top-1/2 left-[10%] flex gap-1">
        <CapacitorDecorator />
        <CapacitorDecorator />
        <CapacitorDecorator />
        <CapacitorDecorator />
      </div>
      <div className="absolute top-1/3 right-[15%] flex gap-1">
        <CapacitorDecorator />
        <CapacitorDecorator />
        <CapacitorDecorator />
        <CapacitorDecorator />
      </div>
      <div className="absolute top-[15%] right-[27.5%] flex gap-1">
        <CapacitorDecorator />
        <CapacitorDecorator />
      </div>
      <div className="absolute top-[5%] left-[27.5%] flex gap-1">
        <CapacitorDecorator />
      </div>
      <div className="absolute bottom-[20%] right-[30%] flex gap-1">
        <CapacitorDecorator />
      </div>
      <div className="absolute bottom-[20%] left-[50%] flex gap-1">
        <div className="border border-white-10 p-1 bg-black">
          <div className="bg-white-5 h-[20px] w-[36px] border border-white-10"></div>
        </div>
      </div>
    </div>
  );
};

const AnimationWrapper = () => {
  // TODO: replace icon from this array and place it into sequenceData instead
  // I only did this to cut corners
  // NOTE: icons should be slightly larger (these are ~13-14px, should be ~14-16px)
  const colors = {
    power: {
      borderColor: "#293eb8b1",
      bgColor: "#1B2E94",
      gradientColor: "linear-gradient(145deg, #667DF6 12.5%, #2C44C1 80%)",
      icon: WalletIcon,
      cellBgGradient:
        "radial-gradient(85% 50% at 50% 50%, rgba(74, 96, 220, 0.5) 0%, rgba(74, 97, 220, 0.00) 100%)",
      circuitLineColor: "#2C44C1",
    },
    onboard: {
      borderColor: "#491ac0dc",
      bgColor: "#3C1796",
      gradientColor: "linear-gradient(145deg, #9C6EFF 12.5%, #6635FF 80%)",
      icon: TransactionIcon,
      cellBgGradient:
        "radial-gradient(85% 50% at 50% 50%, rgba(149, 106, 253, 0.40) 0%, rgba(141, 94, 255, 0.00) 100%)",
      circuitLineColor: "#5822e0",
    },
    analytics: {
      borderColor: "#1e6381bd",
      bgColor: "#0B597B",
      gradientColor: "linear-gradient(145deg, #31C7F0 12.5%, #1179A6 80%)",
      icon: CollectionIcon,
      cellBgGradient:
        "radial-gradient(85% 50% at 50% 50%, rgba(36, 144, 190, 0.50) 0%, rgba(36, 144, 190, 0.00) 100%)",
      circuitLineColor: "#288fbb",
    },
    monetize: {
      borderColor: "#215846b5",
      bgColor: "#20473A",
      gradientColor: "linear-gradient(145deg, #7BC7AD 12.5%, #3C6154 80%)",
      icon: WalletIcon,
      cellBgGradient:
        "radial-gradient(85% 50% at 50% 50%, rgba(123, 199, 173, 0.30) 0%, rgba(123, 199, 173, 0.00) 100%)",
      circuitLineColor: "#238664",
    },
  };

  const sequenceData = [
    // power
    {
      title: "Indexer",
      icon: colors.power.icon,
      colors: colors.power,
    },
    {
      title: "Node Gateway",
      icon: colors.power.icon,
      colors: colors.power,
    },
    {
      title: "Contract Deployments",
      icon: colors.power.icon,
      colors: colors.power,
    },
    {
      title: "Gas Sponsorships",
      icon: colors.power.icon,
      colors: colors.power,
    },
    {
      title: "Transaction API",
      icon: colors.power.icon,
      colors: colors.power,
    },
    // onboard
    {
      title: "Embedded Wallet",
      icon: colors.onboard.icon,
      colors: colors.onboard,
    },
    {
      title: "Ecosystem Wallets",
      icon: colors.onboard.icon,
      colors: colors.onboard,
    },
    {
      title: "Sequence Kit",
      icon: colors.onboard.icon,
      colors: colors.onboard,
    },
    // analytics
    {
      title: "Analytics",
      icon: colors.analytics.icon,
      colors: colors.analytics,
    },
    // monetize
    {
      title: "Marketplaces",
      icon: colors.monetize.icon,
      colors: colors.monetize,
    },
    {
      title: "NFT Collections",
      icon: colors.monetize.icon,
      colors: colors.monetize,
    },
    {
      title: "Sequence Pay",
      icon: colors.monetize.icon,
      colors: colors.monetize,
    },
  ];

  // Split the sequence data into 3 roughly equal groups
  const sequenceData1 = sequenceData.slice(0, 4); // First 4 items
  const sequenceData2 = sequenceData.slice(4, 8); // Next 4 items
  const sequenceData3 = sequenceData.slice(8); // Remaining items

  // Use the enhanced hook
  const clock1 = useSequenceClock(0, sequenceData1);
  const clock2 = useSequenceClock(0, sequenceData2);
  const clock3 = useSequenceClock(0, sequenceData3);

  return (
    <div className="size-full">
      <MainChipSequence />
      {/* top left */}
      <div className="inline-flex absolute top-[16%] md:top-[18%] left-[5%] md:left-[13%]">
        <div className="flex flex-col gap-2 items-center">
          <TopLeftChip data={clock1.currentData} cellIsActive={clock1.isActive} />
        </div>
        <div className="z-0 absolute top-[38%] -right-20">
          <TopLeftCircuitLines
            isActive={clock1.isActive}
            circuitLineColor={clock1.currentData.colors.circuitLineColor}
          />
        </div>
      </div>
      {/* middle */}
      <div className="inline-flex absolute top-[41%] left-[75%]">
        <div className="flex flex-col gap-2 items-center">
          <MiddleChip data={clock2.currentData} cellIsActive={clock2.isActive} />
        </div>
        <div className="z-0 absolute top-[10%] left-[-100%]">
          <MiddleCircuitLines
            isActive={clock2.isActive}
            circuitLineColor={clock2.currentData.colors.circuitLineColor}
          />
        </div>
      </div>
      {/* bottom left */}
      <div className="inline-flex absolute bottom-[20%] left-[16%]">
        <div className="flex flex-col gap-2 items-center">
          <BottomLeftChip data={clock3.currentData} cellIsActive={clock3.isActive} />
        </div>
        <div className="z-0 absolute top-[-100%] -right-4">
          <BottomLeftCircuitLines
            isActive={clock3.isActive}
            circuitLineColor={clock3.currentData.colors.circuitLineColor}
          />
        </div>
      </div>
      <Decorators />
    </div>
  );
};

export default AnimationWrapper;
