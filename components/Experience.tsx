import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] border border-[rgba(67,77,173,1)] rounded-[3rem] rotate-45 -z-10 opacity-50" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 border border-[rgba(67,77,173,1)] rounded-[2rem] rotate-[65deg] -z-10 opacity-50" />
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-accent mb-4">
          <span className="text-blue-300">Professional</span> Experience
        </h2>
      </div>
      <div className="wrapper-experience">
        <div className="container-experience">
          <div className="box-experience">
            <p className="text-accent font-mono text-sm font-semibold">
              Tenaga Ahli Stock Opname - Perpustakaan Bank Indonesia
            </p>
            <div className="text-xs text-slate-400 mt-1 font-mono">
              <span>Surabaya, Jawa Timur</span>
              <span className="mx-2">•</span>
              <span>Archive Intern (Des 2025)</span>
            </div>{" "}
            <div className="flex-grow">
              <div className="flex items-start gap-3 mb-2">
                <p className="text-slate-400 text-sm leading-relaxed md:gap-4 mt-4">
                  - Assisted in stock opname and inventory activities, ensuring
                  accurate tracking of 100+ library items.
                </p>
              </div>
            </div>
            <div className="button-experience">
              <a
                href="https://drive.google.com/file/d/1ufJn83mvv34r57yCO5A6UKAmHhp7PZJk/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Certifications</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container-experience">
          <div className="box-experience">
            <p className="text-accent font-mono text-sm font-semibold">
              Archive Universitas Airlangga
            </p>
            <div className="text-xs text-slate-400 mt-1 font-mono">
              <span>Surabaya , Jawa Timur </span>
              <span className="mx-2">•</span>
              <span>Archive Intern Jan 2025 – Mar 2025</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed md:gap-4 mt-4">
              - Managed the classification, categorization, and digitization of
              over 100+ documents in compliance with SIKN standards.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed md:gap-4 mt-4">
              - Processed and stored incoming active and inactive documents,
              maintaining a 100% accuracy rate in record-keeping and ensuring
              easy retrieval of critical information.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed md:gap-4 mt-4">
              - Led the digitization of archived documents, converting over 100+
              physical files to digital formats.
            </p>
            <div className="button-experience">
              <a
                href="https://drive.google.com/file/d/1yt8PJBbXNaIOLHAEpgFTx1x7LAEZsNbN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Certifications</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container-experience">
          <div className="box-experience">
            <p className="text-accent font-mono text-sm font-semibold">
              Library Kemendikbud Ristek
            </p>
            <div className="text-xs text-slate-400 mt-1 font-mono">
              <span> Surabaya , Jawa Timur </span>
              <span className="mx-2">•</span>
              <span>Archive Intern Jan 2025 – Mar 2025</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed md:gap-4 mt-4">
              - Assisted in stock opname and inventory activities, ensuring
              accurate tracking of 100+ library items. Supported the creation of
              content for the Ministry of Research and Technology’s social
              media, helping increase.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed md:gap-4 mt-4">
              - Supported the creation of content for the Ministry of Research
              and Technology’s social media, helping increase engagement by 20%.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed md:gap-4 mt-4">
              - Contributed to circulation activities, facilitating the
              processing of over 500+ books and resources for users, enhancing
              library access and usage rates.
            </p>
            <div className="button-experience">
              <a
                href="https://drive.google.com/file/d/1mzwaHFj4fw5MysxXKKIR7aIFcoP1cOhq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Certifications</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
