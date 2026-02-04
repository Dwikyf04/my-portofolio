"use client";
import { useState } from "react";
import Image from "next/image";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certif from "@/components/Certif";
import React from "react";
import {} from "react-bootstrap";
import Portofolio from "@/components/Portofolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import ScrollTriggered from "@/components/ScrollTriggered";
import styled from "styled-components";
import GhostLoader from "@/components/GhostLoader";
// import "./custom.css";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Test from "@/components/Test";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <main className="min-h-screen relative overflow-hidden ">
      <nav className="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-accent font-mono z-[60] relative">
            Dwiky Fernanda
          </div>

          <div className="hidden lg:flex space-x-8 text-sm font-medium">
            <a href="#home" className="text-accent hover:text-accent-dark">
              Home
            </a>
            <a
              href="#about"
              className="text-accent hover:text-accent-dark transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-slate-300 hover:text-accent transition"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-slate-300 hover:text-accent transition"
            >
              Experience
            </a>
            <a
              href="#portofolio"
              className="text-slate-300 hover:text-accent transition"
            >
              Portofolio
            </a>
            <a
              href="#certif"
              className="text-slate-300 hover:text-accent transition"
            >
              Certif
            </a>
          </div>

          <button
            className="lg:hidden text-slate-300 focus:outline-none z-[60] relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <div
            className={`fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-start pt-32 space-y-8 transition-all overflow-y-auto duration-300 lg:hidden ${
              isMobileMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <a
              href="#home"
              className="text-2xl text-accent font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xl text-slate-300 hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-xl text-slate-300 hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-xl text-slate-300 hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#portofolio"
              className="text-xl text-slate-300 hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portofolio
            </a>
            <a
              href="#certif"
              className="text-xl text-slate-300 hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Certif
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden">
          <div className="absolute -top-50 -left-20 w-[500px] h-[500px]  border border-[rgba(0,42,255,1)] rounded-[3rem] rotate-45 -z-10 opacity-50" />
          <div className="absolute -bottom-10 -right-0 w-80 h-80 border border-[rgba(0,42,255,1)] rounded-[2rem] rotate-[65deg] -z-10 opacity-50" />
          <div className="z-10 order-1 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="border border-[rgba(38,85,156,1)] bg-card/50 p-6 rounded-xl backdrop-blur-sm max-w-lg mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-slate-300 mb-2">
                My Name is
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight">
                Dwiky <br className="hidden md:block" /> Fernanda
              </h1>
            </div>

            <div className="border border-slate-700 bg-card/50 p-6 rounded-xl backdrop-blur-sm max-w-lg mb-8">
              <p className="text-lg text-slate-300">
                Bachelor of Library and Information Science | Data Enthusiast |
                Aspiring Data Scientist
              </p>
            </div>

            <div className="text-xs text-slate-400 mt-2 sm:mt-0 flex flex-col justify-center font-mono space-y-1">
              <span>
                Surabaya, Jawa Timur | dwikyfernanda78@gmail.com |
                +6282140717278
              </span>
              <br />
            </div>
            <div className="mb-8">
              <a
                className="px-8 py-3 bg-accent text-dark font-bold rounded-full hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(34,211,238,0.3)]
              "
                href="https://drive.google.com/file/d/1nBoRDFM5ZHPZskQUnf1Xyto-vZ5xeQ4T/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
            <div className="mb-8">
              <a
                className="px-8 py-3 bg-accent text-dark font-bold rounded-full hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(34,211,238,0.3)]
              "
                href="https://drive.google.com/drive/folders/1UueyK8Nks9GeS-1bqWhtVbiewtnW-I8U?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portofolio
              </a>
            </div>

            <div className="w-full sm:mt-4">
              <h2 className="text-xl font-bold text-accent">
                My Social Media :
              </h2>
              <div className="flex flex-wrap sm:mt-7 gap-10">
                <a
                  className="Btn"
                  href="https://www.linkedin.com/in/dwiky-fernanda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="svgContainer">
                    <svg
                      viewBox="0 0 448 512"
                      height="1.6em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svgIcon"
                      fill="white"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                  <span className="BG" />
                </a>

                <a
                  className="Btn"
                  href="https://github.com/Dwikyf04"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="svgContainer">
                    <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </span>
                  <span className="BG-github" />
                </a>

                <a
                  className="Btn"
                  href="https://github.com/Dwikyf04"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="svgContainer">
                    <svg
                      fill="white"
                      className="svgIcon"
                      viewBox="0 0 448 512"
                      height="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                  <span className="BG-instagram" />
                </a>
              </div>
            </div>
          </div>

          <div className="z-10 order-2 md:order-2 relative flex justify-center mt-10 md:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[28px] md:w-[500px] md:h-[500px] border border-accent/30 rounded-[3rem] rotate-90 -z-10 shadow-[0_0_20px_rgba(34,211,238,0.3)] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[480px] md:h-[480px] border border-slate-100 rounded-[1rem] rotate-45 -z-20 opacity-30" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl bg-[#0b1120]">
              <Image
                src="/image/me.png"
                alt="Dwiky Fernanda"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-20"></div>
      <About />
      <Skills />
      <div className="h-20"></div>
      <Experience />
      <div className="h-20"></div>
      <Portofolio />
      <div className="h-20"></div>
      <Certif />
      {/* <div className="h-20"></div>
      <Test /> */}
    </main>
  );
}
