"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineDownload,
} from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/BLdp.jpeg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Brian!
          </h1>
          <p className="text-lg mt-4 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Developer{" "}
            </span>
            based in Toronto, Canada. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 mb-4 mt-2 text-gray-600 dark:text-gray-100 md:justify-start">
            <a
              href="https://www.linkedin.com/in/brianjaebum/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLinkedin className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100" />
            </a>
            <a
              href="https://github.com/jaebum25"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100" />
            </a>
            <a
              href="https://docs.google.com/document/d/1Mk9GGSmF_Sds0Mbg9ojErhdHZ_dfBW36p4BevMsO-hA/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <GrDocumentPdf className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100" />
            </a>
          </div>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
