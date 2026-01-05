import React from "react";

export default function TestingSection() {
  // 1. Buat data array di sini
  const dataTesting = [
    {
      title: "IBM SkillsBuild",
      subtitle: "Data Fundamentals",
      date: "Oct 2025",
      desc: `- Acquired a strong conceptual understanding of data analytics methodologies data science applications and the overall data ecosystem.

- Developed practical knowledge in data cleaning, refining, and visualization processes using IBM Watson Studio to derive actionable insights.`,
      link: "https://www.credly.com/...",
    },
    {
      title: "Digitalent",
      subtitle: "Data Science",
      date: "Jul 2025",
      desc: "Fundamental Data Science Fresh Graduate Academy",
      link: "#",
    },
    {
      title: "MySkill",
      subtitle: "Intro to Data",
      date: "Mar 2023",
      desc: "Short Class: Data Science Introduction",
      link: "#",
    },
  ];

  return (
    // Grid Wrapper
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
      {/* 2. Looping data */}
      {dataTesting.map((item, index) => (
        <div className="light-button-testing w-full" key={index}>
          <div className="bt-testing group">
            {" "}
            {/* Tambah group untuk hover state tailwind jika perlu */}
            {/* Bagian Cahaya (Lamp) */}
            <div className="light-holder-testing">
              <div className="dot-testing" />
              <div className="light-testing" />
            </div>
            {/* Bagian Kartu */}
            <div className="button-holder-testing w-full p-6 relative z-10 bg-black border border-slate-800">
              {/* Header Kartu */}
              <div className="w-full mb-4">
                <h2 className="text-xl font-bold text-slate-200 group-hover:text-accent transition-colors">
                  {item.title}
                </h2>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-slate-400 font-mono">
                    {item.subtitle}
                  </span>
                  <span className="text-xs text-slate-500 border border-slate-700 px-2 py-0.5 rounded">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="text-xs text-slate-400 leading-relaxed mb-6 text-left w-full whitespace-pre-line">
                {item.desc}
              </p>

              {/* Tombol Certifications */}
              <div className="mt-auto w-full flex justify-end">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900 rounded-full text-xs font-bold text-white hover:bg-accent hover:text-black transition-all border border-slate-700 hover:border-accent hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                >
                  Certifications
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /* <div className="light-button-testing">
  <div className="bt-testing">
    <div className="light-holder-testing">
      <div className="dot-testing" />
      <div className="light-testing" />
    </div>
  </div>
</div>; */
}
