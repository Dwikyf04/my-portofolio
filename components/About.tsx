import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] border border-[rgba(67,77,173,1)] rounded-[3rem] rotate-45 -z-10 opacity-50" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 border border-[rgba(67,77,173,1)] rounded-[2rem] rotate-[65deg] -z-10 opacity-50" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-accent mb-4">
            <span className="text-blue-300">About</span> Me
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Hi, My Name is Dwiky Fernanda. As a highly motivated candidate
            pursuing a bachelor’s degree in Information and Library Science, I
            has gained experience in archive management and library operations
            through internships at various institutions. This hands-on
            experience has honed his abilities in data organization, attention
            to detail, and teamwork. Additionally, his participation in Data
            Science, Basic AI, and Data Analyst bootcamps has equipped him with
            valuable skills in data analysis and problem-solving, preparing him
            for a career in the data analytics and data science field.
          </p>
        </div>
      </div>

      <div className="wrapper-about">
        <div className="container-about">
          <div className="box-about">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex item-center gap-3">
              <span> Education Background</span>
            </h3>

            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-white group-hover:text-accent transition">
                Universitas Airlangga
              </h4>
              <span className="text-sm text-slate-400">
                {" "}
                Surabaya , Jawa Timur{" "}
              </span>
              <span className="text-sm text-slate-400">
                Aug 2021 - Aug 2025
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-2">
              Bachelor of Information and Library Science
            </p>
            <p className="text-accent font-mono text-sm font-bold">
              GPA 3.36/4.00
            </p>
            <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700 pt-4">
              Relevant courses: Electronic Records Management, Business
              Information Analysis, Digital Libraries, Digital Forensics, and
              Image Analysis.
            </p>
          </div>
        </div>

        <div className="container-about">
          <div className="box-about">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex item-center gap-3">
              <span className="w-2 h-8 bg-accent rounded-full"></span>
              Organizational Experience
            </h3>

            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-white group-hover:text-accent transition">
                BEM FISIP Universitas Airlangga
              </h4>
              <span className="text-sm text-slate-400">
                {" "}
                Surabaya , Jawa Timur{" "}
              </span>
              <span className="text-sm text-slate-400">
                Apr 2022 – Des 2022
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-2">Staff</p>
            <p className="text-accent font-mono text-sm font-semibold">
              Division of Research and Development
            </p>
            <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700 pt-4">
              Relevant courses: Electronic Records Management, Business
              Information Analysis, Digital Libraries, Digital Forensics, and
              Image Analysis.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mt-20 text-center md:col-span-2">
          <h3 className="text-lg font-mono text-slate-450 mb-8 uppercase tracking-widest">
            <span className="text-accent text-blue-300">
              {" "}
              My Hobby Drawing{" "}
            </span>
            & Painting
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-700 rounded-xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition duration-300 boder-4 border-white shadow-lg">
              <img
                src="/image/lukisan1.jpeg"
                alt="Hobby 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-700 rounded-xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition duration-300 boder-4 border-white shadow-lg">
              <img
                src="/image/lukisan2.jpeg"
                alt="Hobby 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-700 rounded-xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition duration-300 boder-4 border-white shadow-lg">
              <img
                src="/image/lukisan3.jpeg"
                alt="Hobby 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-700 rounded-xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition duration-300 boder-4 border-white shadow-lg">
              <img
                src="/image/lukisan4.jpeg"
                alt="Hobby 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-700 rounded-xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition duration-300 boder-4 border-white shadow-lg">
              <img
                src="/image/lukisan5.jpeg"
                alt="Hobby 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-700 rounded-xl overflow-hidden rotate-[-6deg] hover:rotate-0 transition duration-300 boder-4 border-white shadow-lg">
              <img
                src="/image/lukisan6.jpeg"
                alt="Hobby 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
