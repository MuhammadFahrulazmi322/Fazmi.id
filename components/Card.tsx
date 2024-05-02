"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  techStack1: string;
  techStack2: string;
  techStack3: string;
  techStack4: string;
  techStack5: string;
  livesite: string;
  github: string;
  image: string;
  halloffame: boolean;
}

const Card = ({
  id,
  title,
  description,
  slug,
  category,
  techStack1,
  techStack2,
  techStack3,
  techStack4,
  techStack5,
  livesite,
  github,
  image,
  halloffame,
}: Props) => {
  const techStack = [
    techStack1,
    techStack2,
    techStack3,
    techStack4,
    techStack5,
  ];
  const [hovered, setHovered] = useState(false);
  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <section
      className="flex flex-row"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      key={id}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex flex-col gap-y-4 bg-white  shadow-2xl lg:px-4 py-4 md:py-0 rounded-lg max-w-[400px] "
      >
        <div className="flex justify-center relative">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className={`md:max-w-[400px] rounded-tr-lg rounded-tl-lg contrast-[.95] ${hovered ? "contrast-75" : "contrast-[.95]"}`}
          />
        </div>
        <div
          className={`${hovered ? "block" : "hidden"} relative md:translate-x-[120px] md:-translate-y-[160px] flex gap-x-4`}
        >
          {github || livesite ? (
            <>
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <img
                  src="icons/github.svg"
                  alt="GitHub Icon"
                  width={48}
                  height={48}
                  className=""
                />
              </Link>
              <Link href={livesite} target="_blank" rel="noopener noreferrer">
                <img
                  src="icons/site.svg"
                  alt="Link Icon"
                  width={48}
                  height={48}
                />
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="flex flex-row justify-left py-2 lg: lg:-translate-y-20 lg:translate-x-5 gap-x-1.5">
          {/* Displaying Techstack */}
          {techStack &&
            techStack
              .filter((tech) => tech)
              .map((tech, index) => (
                <div
                  key={tech} // Change key to tech to ensure uniqueness
                  className="p-2 bg-white rounded-full  lg:drop-shadow-xl flex items-center"
                >
                  <img
                    src={tech} // Accessing the URL of the image from Sanity
                    alt="image techstack"
                    width={24}
                    height={24}
                  />
                </div>
              ))}
        </div>
        <div className="relative lg:-translate-y-14 flex flex-col gap-y-2">
          <h1 className="text-xl md:text-2xl font-bold text-center">{title}</h1>
          <p className="text-sm font-medium max-w-md text-center text-slate-500">
            {description}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Card;
