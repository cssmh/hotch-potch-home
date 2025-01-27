"use client";

import { reviewsData } from "@/data";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { cardVariant } from "./anim";

export default function ReviewCard() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
      {reviewsData.map((data, idx) => (
        <motion.div
          key={idx}
          variants={cardVariant}
          initial="initial"
          whileInView={"enter"}
          viewport={{ once: true }}
          className={`break-inside-avoid rounded-md bg-white px-3 py-4 lg:px-4 lg:py-5 xl:px-5 xl:py-6 flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 ${
            idx === 0
              ? "mb-3 md:mb-4 lg:mb-5 2xl:mb-6"
              : "my-4 md:my-5 lg:my-6 2xl:my-7"
          }`}
        >
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-center gap-2.5">
              <Image src={data.img} alt={data.name} width={43} height={43} />
              <div className="flex flex-col gap-0.5">
                <p className="font-semibold link-text text-primary">
                  {data.name}
                </p>
                <p className="mini-text text-primary/70">{data.add}</p>
              </div>
            </div>
            <FaTwitter size={17} className="text-accent" />
          </div>
          <div className="flex flex-col">
            <p className="link-text text-primary">{data.desc}</p>
            <p className="link-text text-accent">{data.tag}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
