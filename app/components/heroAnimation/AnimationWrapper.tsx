import { WalletIcon, TransactionIcon, CollectionIcon } from "./icons";

interface SequenceDataProps {
  title: string;
  icon: () => JSX.Element;
  colors: {
    icon: () => JSX.Element;
    borderColor: string;
    bgColor: string;
    gradientColor: string;
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
    <div className="z-50 border-2 border-white-10 rounded-xl p-1.5 md:p-2 bg-white-5 backdrop-blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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

const TopLeftChip = ({ data }: { data: SequenceDataProps }) => {
  return (
    <div className="z-50 inline-flex relative flex-row gap-2 border-2 border-white-5 rounded-lg p-2 bg-white-5 backdrop-blur-sm">
      {/* left */}
      <div className="flex flex-col gap-2">
        <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="size-[3px] bg-white-15 rounded-full"></div>
        ))}
        <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
      </div>
      {/* center */}
      <SequenceFeatureCarousel data={data} />
      {/* right */}
      <div className="flex flex-col gap-2">
        <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="size-[3px] bg-white-15 rounded-full"></div>
        ))}
        <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
      </div>
      {/* bg gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(87.49%_53.42%_at_50%_50%,rgba(74,97,220,0.30)_0%,rgba(74,97,220,0.00)_100%)]"></div>
      {/* text box */}
      <div className="absolute bottom-[-55%] left-1/2 -translate-x-1/2">
        <SequenceFeatureTextCarousel data={data} />
      </div>
    </div>
  );
};

const TopLeftCircuitLines = () => {
  return (
    <svg width="94" height="73" viewBox="0 0 94 73" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M89.1081 36.8932C90.7959 38.581 91.7441 40.8702 91.7441 43.2571V72.4033H93.7441V43.2571C93.7441 40.3398 92.5852 37.5419 90.5223 35.479L58.2652 3.22183C56.2023 1.15893 53.4044 4.05398e-06 50.487 4.05398e-06L0 0V2L50.487 2C52.874 2 55.1631 2.94821 56.851 4.63604L89.1081 36.8932ZM84.4258 46.7921C84.4258 44.4052 83.4776 42.116 81.7897 40.4282L52.9976 11.636C51.3098 9.94821 49.0206 9 46.6336 9L0 9V7L46.6336 7C49.551 7 52.3489 8.15893 54.4118 10.2218L83.2039 39.014C85.2669 41.0769 86.4258 43.8748 86.4258 46.7921V72.5254H84.4258V46.7921ZM77.5 50.0464C77.5 47.6595 76.5518 45.3703 74.864 43.6825L49.2218 18.0403C47.534 16.3525 45.2448 15.4043 42.8579 15.4043L0 15.4043V13.4043L42.8579 13.4043C45.7752 13.4043 48.5731 14.5632 50.636 16.6261L76.2782 42.2683C78.3411 44.3312 79.5 47.1291 79.5 50.0464V72.4043H77.5V50.0464Z"
        fill="url(#paint0_linear_508_3700)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_508_3700"
          x1="46.3721"
          y1="0.999998"
          x2="46.3721"
          y2="72.4033"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B3881" />
          <stop offset="0.667213" stopColor="#181818" />
          <stop offset="1" stopColor="#1E308F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const BottomLeftChip = ({ data }: { data: SequenceDataProps }) => {
  return (
    <div className="z-50 inline-flex relative flex-row gap-2 border-2 border-white-5 rounded-lg p-2 bg-white-5 backdrop-blur-sm">
      {/* left */}
      <div className="flex flex-col justify-between">
        <div className="size-[3px] bg-white-15 rounded-full"></div>
        <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
        <div className="size-[3px] bg-white-15 rounded-full"></div>
      </div>
      {/* center */}
      <SequenceFeatureCarousel data={data} />
      {/* right */}
      <div className="flex flex-col justify-between">
        <div className="size-[3px] bg-white-15 rounded-full"></div>
        <div className="w-[3px] h-[10px] bg-white-10 rounded-full"></div>
        <div className="size-[3px] bg-white-15 rounded-full"></div>
      </div>
      {/* bg gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(87.49%_53.42%_at_50%_50%,rgba(123,199,173,0.30)_0%,rgba(123,199,173,0.00)_100%)]"></div>
      {/* text box */}
      <div className="absolute bottom-[-55%] left-1/2 -translate-x-1/2">
        <SequenceFeatureTextCarousel data={data} />
      </div>
    </div>
  );
};

const BottomLeftCircuitLines = () => {
  return (
    <svg width="74" height="94" viewBox="0 0 74 94" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.8932 4.63604C38.581 2.94821 40.8702 2 43.2571 2H72.4033V0H43.2571C40.3398 0 37.5419 1.15893 35.479 3.22183L3.22183 35.479C1.15893 37.5419 0 40.3398 0 43.2571V93.7441H2V43.2571C2 40.8702 2.94821 38.581 4.63604 36.8932L36.8932 4.63604ZM46.6701 9.31836C44.2831 9.31836 41.9939 10.2666 40.3061 11.9544L11.514 40.7465C9.82614 42.4344 8.87793 44.7236 8.87793 47.1105V93.7441H6.87793V47.1105C6.87793 44.1931 8.03685 41.3952 10.0998 39.3323L38.8919 10.5402C40.9548 8.47729 43.7527 7.31836 46.6701 7.31836H72.4033V9.31836H46.6701ZM43.6815 18.8802C45.3693 17.1924 47.6585 16.2441 50.0455 16.2441H72.4033V14.2441H50.0455C47.1281 14.2441 44.3302 15.4031 42.2673 17.466L16.6251 43.1081C14.5622 45.171 13.4033 47.9689 13.4033 50.8863V93.7441H15.4033V50.8863C15.4033 48.4993 16.3515 46.2101 18.0394 44.5223L43.6815 18.8802ZM47.6537 26.4416C49.1727 24.9226 51.233 24.0692 53.3813 24.0692H73.5033V22.2692H53.3813C50.7556 22.2692 48.2375 23.3122 46.3809 25.1688L23.303 48.2468C21.4464 50.1034 20.4033 52.6215 20.4033 55.2471V93.8192H22.2033V55.2471C22.2033 53.0989 23.0567 51.0386 24.5758 49.5195L47.6537 26.4416Z"
        fill="url(#paint0_linear_509_3705)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_509_3705"
          x1="42.9281"
          y1="0"
          x2="42.9281"
          y2="93.8192"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20473A" />
          <stop offset="0.262213" stopColor="#181818" />
          <stop offset="1" stopColor="#18372D" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const MiddleChip = ({ data }: { data: SequenceDataProps }) => {
  return (
    <div className="z-50 inline-flex relative flex-col gap-1.5 border-2 border-white-5 rounded-lg p-2 bg-white-5 backdrop-blur-sm">
      {/* top */}
      <div className="flex flex-row justify-between">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="size-[3px] bg-white-15 rounded-full"></div>
        ))}
      </div>
      {/* center */}
      <SequenceFeatureCarousel data={data} />
      {/* bottom */}
      <div className="flex flex-row justify-between">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="size-[3px] bg-white-15 rounded-full"></div>
        ))}
      </div>
      {/* bg gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(87.49%_53.42%_at_50%_50%,rgba(74,97,220,0.30)_0%,rgba(74,97,220,0.00)_100%)]"></div>
      {/* text box */}
      <div className="absolute bottom-[-41%] left-1/2 -translate-x-1/2">
        <SequenceFeatureTextCarousel data={data} />
      </div>
    </div>
  );
};

const MiddleCircuitLines = () => {
  return (
    <svg width="75" height="78" viewBox="0 0 75 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M75 44H62.1421C59.49 44 56.9464 45.0536 55.0711 46.9289L39.9289 62.0711C38.0536 63.9464 35.51 65 32.8579 65H0"
        stroke="url(#paint0_linear_510_3712)"
        strokeWidth="2"
      />
      <path
        d="M75 28H62.1421C59.49 28 56.9464 26.9464 55.0711 25.0711L39.9289 9.92893C38.0536 8.05357 35.51 7 32.8579 7H0"
        stroke="url(#paint1_linear_510_3712)"
        strokeWidth="2"
      />
      <path
        d="M75 50H66.6421C63.99 50 61.4464 51.0536 59.5711 52.9289L44.4289 68.0711C42.5536 69.9464 40.01 71 37.3579 71H0"
        stroke="url(#paint2_linear_510_3712)"
        strokeWidth="2"
      />
      <path
        d="M75 22H66.6421C63.99 22 61.4464 20.9464 59.5711 19.0711L44.4289 3.92893C42.5536 2.05357 40.01 1 37.3579 1H0"
        stroke="url(#paint3_linear_510_3712)"
        strokeWidth="2"
      />
      <path
        d="M75 56H71.1421C68.49 56 65.9464 57.0536 64.0711 58.9289L48.9289 74.0711C47.0536 75.9464 44.51 77 41.8579 77H0"
        stroke="url(#paint4_linear_510_3712)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_510_3712"
          x1="0"
          y1="54.5"
          x2="75"
          y2="54.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#101010" />
          <stop offset="0.407213" stopColor="#5819F0" />
          <stop offset="1" stopColor="#101010" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_510_3712"
          x1="75"
          y1="17.5"
          x2="0"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#331679" />
          <stop offset="0.242213" stopColor="#15111F" />
          <stop offset="1" stopColor="#331679" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_510_3712"
          x1="0"
          y1="60.5"
          x2="75"
          y2="60.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#101010" />
          <stop offset="1" stopColor="#331679" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_510_3712"
          x1="0"
          y1="11.5"
          x2="75"
          y2="11.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#101010" />
          <stop offset="1" stopColor="#4217AA" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_510_3712"
          x1="75"
          y1="66.5"
          x2="0"
          y2="66.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#252327" />
          <stop offset="1" stopColor="#331679" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const SequenceFeatureCarousel = ({ data }: { data: SequenceDataProps }) => {
  return (
    <div
      className="rounded-[11px] p-[4px] bg-black"
      style={{
        border: `2px solid ${data.colors.borderColor}`,
      }}
    >
      <div
        className="size-10 p-[2px] bg-white-10 rounded-[6px]"
        style={{
          background: data.colors.gradientColor,
        }}
      >
        <div
          className="grid place-items-center size-full bg-black rounded-[5px]"
          style={{
            background: data.colors.bgColor,
          }}
        >
          <div className="size-4 border border-gray-300 grid place-items-center">
            {data.colors.icon()}
          </div>
        </div>
      </div>
    </div>
  );
};

const SequenceFeatureTextCarousel = ({ data }: { data: SequenceDataProps }) => {
  return (
    <div className="inline mx-auto">
      <div className="border border-white-15 rounded-[4px] px-2 py-[3px] bg-white-5 inline-grid place-items-center">
        <span className="text-white-50 text-[10px] md:text-xs font-medium whitespace-nowrap">
          {data.title}
        </span>
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
      borderColor: "#1b2d94b2",
      bgColor: "#1B2E94",
      gradientColor: "linear-gradient(145deg, #667DF6 12.71%, #2C44C1 80.61%)",
      icon: WalletIcon,
    },
    onboard: {
      borderColor: "#3b1796c8",
      bgColor: "#3C1796",
      gradientColor: "linear-gradient(145deg, #9C6EFF 12.71%, #6635FF 80.61%)",
      icon: TransactionIcon,
    },
    analytics: {
      borderColor: "#0B597B80",
      bgColor: "#0B597B",
      gradientColor: "linear-gradient(145deg, #31C7F0 12.71%, #1179A6 80.61%)",
      icon: CollectionIcon,
    },
    monetize: {
      borderColor: "#20473ab5",
      bgColor: "#20473A",
      gradientColor: "linear-gradient(145deg, #7BC7AD 12.71%, #3C6154 80.61%)",
      icon: WalletIcon,
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

  return (
    <div className="size-full">
      <MainChipSequence />
      {/* top left */}
      <div className="inline-flex absolute top-[16%] md:top-[18%] left-[5%] md:left-[13%]">
        <div className="flex flex-col gap-2 items-center">
          <TopLeftChip data={sequenceData1[0]} />
        </div>
        <div className="z-0 absolute top-[38%] -right-20">
          <TopLeftCircuitLines />
        </div>
      </div>
      {/* middle */}
      <div className="inline-flex absolute top-[41%] left-[75%]">
        <div className="flex flex-col gap-2 items-center">
          <MiddleChip data={sequenceData2[2]} />
        </div>
        <div className="z-0 absolute top-[10%] left-[-100%]">
          <MiddleCircuitLines />
        </div>
      </div>
      {/* bottom left */}
      <div className="inline-flex absolute bottom-[20%] left-[16%]">
        <div className="flex flex-col gap-2 items-center">
          <BottomLeftChip data={sequenceData3[2]} />
        </div>
        <div className="z-0 absolute top-[-100%] -right-4">
          <BottomLeftCircuitLines />
        </div>
      </div>
    </div>
  );
};

export default AnimationWrapper;
