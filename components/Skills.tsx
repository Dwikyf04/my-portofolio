import React from "react";
import "@/app/custom.css";
const Skillbar = ({
  name,
  percentage,
}: {
  name: string;
  percentage: number;
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-slate-200 font-medium font-mono text-sm sm:text-base">
          {name}
        </span>
        <span className="text-accent font-bold font-mono text-sm">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-3 backdrop-blur-sm">
        <div
          className="bg-accent h-3 rounded-full shadow-[0_0_15px_rgba(0,153,255,1)] transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function Skills() {
  const libraryskills = [
    { name: "Digitalization & Preservation", percentage: 70 },
    { name: "Archival Software (SIKN)", percentage: 85 },
    { name: "Collection Management", percentage: 85 },
    { name: "Library Automation(SLiMS)", percentage: 80 },
  ];

  const techskills = [
    { name: "Microsoft Office", percentage: 70 },
    { name: "UI/UX Design", percentage: 70 },
    { name: "Data Science", percentage: 85 },
    { name: "Data Analysis", percentage: 80 },
    { name: "Web Development", percentage: 70 },
  ];

  const tools = [
    "VS Code",
    "Figma",
    "Github",
    "Jupyter Notebook",
    "Google Colab",
    "Tableau",
    "Microsoft",
    "SIKN",
    "Vercel",
    "Orange Data Mining",
  ];

  const lang = [
    "Bahasa Indonesia - Native",
    "English - Professional Working Proficiency",
  ];
  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] border border-[rgba(67,77,173,1)] rounded-[3rem] rotate-45 -z-10 opacity-50" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 border border-[rgba(67,77,173,1)] rounded-[2rem] rotate-[65deg] -z-10 opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 ">
          My <span className="text-accent text-blue-300">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20">
          <div className="card-glass">
            <h3 className="text-xl font-semibold text-accent mb-4">
              Library Skills
            </h3>
            {libraryskills.map((skill, index) => (
              <Skillbar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
          <div className="card-glass">
            <h3 className="text-xl font-semibold text-accent mb-4">
              Tech & Data Skills
            </h3>
            {techskills.map((skill, index) => (
              <Skillbar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-mono text-slate-300 mb-8">
            <span className="text-blue-300">Tools </span>& Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span key={index} className="myButton">
                {tool}
              </span>
            ))}
          </div>
          <br></br>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-mono text-slate-300 mb-8">Language</h4>
          <div className="flex flex-wrap justify-center gap-4 ">
            {lang.map((tool, index) => (
              <span key={index} className="myButton">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
