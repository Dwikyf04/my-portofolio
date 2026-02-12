import React from "react";

export default function Portofolio() {
  return (
    <section id="portofolio" className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] border border-[rgba(67,77,173,1)] rounded-[3rem] rotate-45 -z-10 opacity-50" />
      <div className="absolute -bottom-10 -right-10 w-80 h-80 border border-[rgba(67,77,173,1)] rounded-[2rem] rotate-[65deg] -z-10 opacity-50" />

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-center text-accent mb-12">
          My <span className="text-blue-300">Portofolio</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="product_box">
          <img src="/image/portofolio1.png" alt="Portofolio 1" />
          <div className="description">
            <div>
              <h2>Thesis Research - Academy Project</h2>
              <h3>
                Identifying Relationship in the Novel “Sampai di Ujung Tiang”,
                85.3/100
              </h3>
              <p>
                - Performing text mining and natural language processing (NLP)
                on a novel using Orange Data Mining, applying the Word Cloud,
                Similarity Hashing, K-Means, Hierarchical Clustering, and T-SNE
                methods.
              </p>
              <p>
                - Processing and analyzing over 200 pages and 35 chapters of
                text data, building a clustering model to identify similarities
                between chapters.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1ikU5pmOjKoPMj0Go0dBCjwqEREXrOKLV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="button-porto"
            >
              <span>Portofolio</span>
            </a>
          </div>
        </div>
        <div className="product_box">
          <img src="/image/portofolio2.jpeg" alt="Portofolio 1" />
          <div className="description">
            <div>
              <h2>Web Development – Group Project</h2>
              <h3>Subject Information Marketing, 83.1/100</h3>
              <p>
                - Developed a book gallery website, collaborating with 4 team
                members to create an interactive platform. |
              </p>
            </div>

            <a
              href="https://dev-feel-my-book.pantheonsite.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-porto"
            >
              <span>Portofolio</span>
            </a>
          </div>
        </div>
        <div className="product_box">
          <img src="/image/portofolio3.png" alt="Portofolio 1" />
          <div className="description">
            <div>
              <h2>Library Recommendation System - Google Maps Review</h2>
              <h3>Portofolio project</h3>
              <p>
                - Collected and processed 3000+ google maps review data form
                library in Indonesia using python and google collab
              </p>
              <p>
                -Applied Sentiment analysis use model a SVM with TF-IDF
                Victorization
              </p>
              <p>
                - Implemented Topic Clustering using K-Means Clustering to
                categorize key review themes
              </p>
            </div>

            <a
              href="https://portofolio-rekomen-library.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-porto"
            >
              <span>Portofolio</span>
            </a>
          </div>
        </div>
        <div className="product_box">
          <img src="/image/portofolio4.png" alt="Portofolio 1" />
          <div className="description">
            <div>
              <h2>Football match prediction - Persebaya Surabaya</h2>
              <h3>
                Predict Persebaya match outcomes in Indonesia Liga 1
                (2019–2025).
              </h3>
              <p>
                Research on digital preservation and data management in
                libraries.
              </p>
            </div>

            <a
              href="https://docs.google.com/presentation/d/1yrsmAijSPkHMF_phr4DQRM-bQqap-8Jq/edit?usp=sharing&ouid=112372833349146297200&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="button-porto"
            >
              <span>Portofolio</span>
            </a>
          </div>
        </div>
        <div className="product_box">
          <img src="/image/portofolio5.png" alt="Portofolio 1" />
          <div className="description">
            <div>
              <h2>SmartPath </h2>
              <h3>Data Analyst Bootcamp</h3>
              <p>
                Completed a Data Analyst Bootcamp, gaining proficiency in data
                analysis, statistical modeling, and data visualization tools,
                including Excel, SQL, and Tableau.
              </p>
              <p>
                Analyzed and processed datasets of over 50,000 records, using
                SQL to extract actionable insights and presenting findings
                through interactive dashboards to improve decision-making.
              </p>
              <p>
                Collaborated with a team of 10+ participants to solve real-world
                data problems, achieving a 90% accuracy rate in project
                deliverables and contributing to a 25% improvement in overall
                team performance.
              </p>
            </div>

            <a
              href="https://docs.google.com/presentation/d/1o3Ks1dv9BqAjcyZhJPWZ270XB6Bh8BRu/edit?usp=sharing&ouid=112372833349146297200&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="button-porto"
            >
              <span>Portofolio</span>
            </a>
          </div>
        </div>
        <div className="product_box">
          <img src="/image/portofolio6.png" alt="Portofolio 1" />
          <div className="description">
            <div>
              <h2>Smart Book Recommender - Content-Based Filtering System </h2>
              <h3>Portofolio Project</h3>
              <p>
                Developed a content-based filtering system using Python and
                Scikit-learn to provide personalized book recommendations based
                on user preferences.
              </p>
              <p>
                Implemented TF-IDF Vectorization to analyze book summaries and
                extract key features from textual data
              </p>
            </div>

            <a
              href="https://portofolio-rekomendasi-book.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-porto"
            >
              <span>Portofolio</span>
            </a>
          </div>
        </div>
        <div className="product_box">
          <img src="/image/portofolio7.png" alt="Portofolio 1" />
          <div className="description">
            <div>
              <h2>
                Mata Buatan" (Money Reader)- Assistive Tech for the Visually
                Impaired{" "}
              </h2>
              <h3>Portofolio Project</h3>
              <p>
                Developed a real-time object detection model using YOLOv8 and
                Python to accurately classify various denominations of
                Indonesian Rupiah banknotes.
              </p>
              <p>
                Integrated Text-to-Speech (TTS) functionality to provide
                immediate auditory feedback, enabling users to identify currency
                values through voice output.
              </p>
            </div>
            <a
              href="https://deteksi-matauang-rupiah-ejepe3snna3edjls7t2dnk.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-porto"
            >
              <span>Portofolio</span>
            </a>
          </div>
        </div>
        <div className="product_box">
          <img src="/image/portofolio9.png" alt="Portofolio 1" />
          <div className="description">
            <div>
              <h2>Desain Web Portofolio CV - Figma </h2>
              <h3>Portofolio Project</h3>
              <p>
                Designed a modern and responsive User Interface (UI) using
                Figma, focusing on clean layout, visual hierarchy, and intuitive
                user experience (UX).
              </p>
            </div>
            <a
              href="https://www.figma.com/design/4Zp6s68pln5A8usw2BYpV0/project-web-cv?node-id=0-1&t=3SnmQXdhIQycbWwh-1"
              target="_blank"
              rel="noopener noreferrer"
              className="button-porto"
            >
              <span>Portofolio</span>
            </a>
          </div>
        </div>
        <div className="product_box">
          <img src="/image/portofolio8.png" alt="Portofolio 1" />
          <div className="description">
            <div>
              <h2>Portfofolio Forecasting-1 </h2>
              <h3>Portofolio Project</h3>
              <p>
                develop a web-based portfolio forecasting application using
                python and streamlit
              </p>
              <p>
                Implemented time series forecasting model prophet to predict
                future trends and performance of a financial portfolio,
                providing users with actionable insights for informed
                decision-making.
              </p>
            </div>
            <a
              href="https://project-forecasting-1-ku.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-porto"
            >
              <span>Portofolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
