"use client";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const CodeGraphGeminiEffect = ({
  title,
  description,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Create 5 different path length progress values
  const pathLength1 = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const pathLength2 = useTransform(scrollYProgress, [0.1, 0.75], [0, 1]);
  const pathLength3 = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const pathLength4 = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);
  const pathLength5 = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  const pathLengths = [pathLength1, pathLength2, pathLength3, pathLength4, pathLength5];

  return (
    <div ref={containerRef} className={cn("relative py-40", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-3xl md:text-6xl font-bold pb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          {title || `Visualize Code Dependencies`}
        </p>
        <p className="text-sm md:text-xl font-normal text-center text-foreground/70 mt-4 max-w-2xl mx-auto">
          {description ||
            `CodeGraph transforms complex code relationships into clear, interactive visualizations that help you understand your project structure at a glance.`}
        </p>
        <div className="w-full h-[600px] flex items-center justify-center relative mt-10">
          <button className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full md:px-6 md:py-3 px-4 py-2 md:mt-24 mt-8 z-30 md:text-base text-xs w-fit mx-auto hover:scale-105 transition-transform duration-300">
            Try CodeGraph
          </button>
        </div>
      </div>
      <svg
        width="1440"
        height="710"
        viewBox="0 0 1440 710"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-20 mt-20 md:-top-10 w-full"
      >
        <motion.path
         d="M20.5 266C22 266 154 465 269 447C326.5 430 339.5 421 397.5 366C403.5 360.31 455 329.5 490 323C509.664 319.348 521 303.736 538 304.236C553.591 304.236 562.429 314.739 584.66 322.749C592.042 325.408 600.2 326.237 607.356 323.019C624.755 315.195 641.446 296.324 657 296.735C673.408 296.735 693.545 319.572 712.903 326.769C718.727 328.934 725.184 328.395 730.902 325.965C751.726 317.115 764.085 297.106 782 296.735C794.831 296.47 804.103 308.859 822.469 318.515C835.13 325.171 850.214 326.815 862.827 320.069C875.952 313.049 889.748 302.706 903.5 303.736C922.677 305.171 935.293 310.562 945.817 315.673C954.234 319.76 963.095 322.792 972.199 324.954C996.012 330.611 1007.42 334.118 1034 349C1077.5 373.359 1082.5 394.5 1140 429C1206 470 1328.5 462.5 1440 462.5" 
         stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[0],
          }}
          transition={transition}
        />
        <motion.path
          d="M11.5 192C158.5 192 223.5 397.401 310 373.5C348 363 392.5 343.5 408 335C434 323.5 426 326.235 479 315.235C494 312.729 523 310.435 534.5 312.735C554.5 316.735 555.5 323.235 576 323.735C592 323.735 616 296.735 633 297.235C648.671 297.235 661.31 315.052 684.774 324.942C692.004 327.989 700.2 328.738 707.349 325.505C724.886 317.575 741.932 298.33 757.5 298.742C773.864 298.742 791.711 320.623 810.403 327.654C816.218 329.841 822.661 329.246 828.451 326.991C849.246 318.893 861.599 302.112 879.5 301.742C886.47 301.597 896.865 306.047 907.429 310.911C930.879 321.707 957.139 319.639 982.951 320.063C1020.91 320.686 1037.5 330.797 1056.5 337C1102.24 356.627 1116.5 370.704 1180.5 379.235C1257.5 389.5 1279 387 1440 388" 
          stroke="#8B5CF6"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[1],
          }}
          transition={transition}
        />
        <motion.path
          d="M0 314C147.5 314.333 294.5 313.735 380.5 313.735C405.976 314.94 422.849 315.228 436.37 315.123C477.503 314.803 518.631 306.605 559.508 311.197C564.04 311.706 569.162 312.524 575 313.735C588 316.433 616 321.702 627.5 319.402C647.5 315.402 659 299.235 680.5 299.235C700.5 299.235 725 329.235 742 328.735C757.654 328.735 768.77 310.583 791.793 300.59C798.991 297.465 807.16 296.777 814.423 299.745C832.335 307.064 850.418 324.648 866 324.235C882.791 324.235 902.316 309.786 921.814 305.392C926.856 304.255 932.097 304.674 937.176 305.631C966.993 311.248 970.679 314.346 989.5 314.735C1006.3 315.083 1036.5 313.235 1055.5 313.235C1114.5 313.235 1090.5 313.235 1124 313.235C1177.5 313.235 1178.99 314.402 1241 314.402C1317.5 314.402 1274.5 312.568 1440 313.235"
           stroke="#EC4899"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[2],
          }}
          transition={transition}
        />
        <motion.path
         d="M16 481C166.5 481 188.5 217.227 323.5 256.5C351 264.5 387.517 284.001 423.5 294.5C447.371 301.465 472 303.735 487 307.735C503.786 312.212 504.5 316.808 523 318.735C547 321.235 564.814 301.235 584.5 301.235C604.5 301.235 626 329.069 643 328.569C658.676 328.569 672.076 311.63 695.751 301.972C703.017 299.008 711.231 298.208 718.298 301.617C735.448 309.889 751.454 329.98 767 329.569C783.364 329.569 801.211 307.687 819.903 300.657C825.718 298.469 832.141 299.104 837.992 301.194C859.178 308.764 873.089 323.365 891 323.735C907.8 324.083 923 304.235 963 306.735C1034.5 306.735 1047.5 292.68 1071 281.5C1122.5 257 1142.23 252.871 1185 246.5C1255.5 236 1294 239 1439.5 239"
          stroke="#06B6D4"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[3],
          }}
          transition={transition}
        />
        <motion.path
          d="M-3.5 328.736C141.288 327.085 107.5 178 265.5 178C350 191.5 399.182 257.5 411 267.5C424.176 278.649 456.916 291.677 496.259 302.699C498.746 303.396 501.16 304.304 503.511 305.374C517.104 311.558 541.149 320.911 551.5 321.236C571.5 321.236 590 298.736 611.5 298.736C631.5 298.736 652.5 329.236 669.5 328.736C685.171 328.736 697.81 310.924 721.274 301.036C728.505 297.988 736.716 297.231 743.812 300.579C761.362 308.857 778.421 329.148 794 328.736C810.375 328.736 829.35 308.68 848.364 302.179C854.243 300.169 860.624 300.802 866.535 302.718C886.961 309.338 898.141 319.866 916 320.236C932.8 320.583 934.5 310.236 967.5 301.736C1011.5 291 1007.5 293.5 1029.5 280C1069.5 253.5 1072 240.442 1128.5 203.5C1180.5 169.5 1275 160.374 1439 164"
           stroke="#10B981"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />

        {/* Gaussian blur for the background paths */}
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}; 