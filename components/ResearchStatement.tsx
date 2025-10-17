"use client";

import { useEffect, useState } from "react";
import { getResearchStatement } from "@/lib/sanity.queries";

interface ResearchStatement {
  motivation: string;
  currentFocus: string;
  methodology: string;
  futureDirections: string[];
  impact: string;
}

export default function ResearchStatement() {
  const [statement, setStatement] = useState<ResearchStatement | null>(null);

  useEffect(() => {
    getResearchStatement().then(setStatement);
  }, []);

  if (!statement) return null;

  return (
    <section id="research" className="section section-blue">
      <div className="container-custom max-w-5xl">
        <h2 className="section-title">Research Vision</h2>

        <div className="space-y-6">
          <div className="card-highlight">
            <h3 className="subsection-title">Research Motivation</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {statement.motivation}
            </p>
          </div>

          <div className="card-highlight">
            <h3 className="subsection-title">Current Research Focus</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {statement.currentFocus}
            </p>
          </div>

          <div className="card-highlight">
            <h3 className="subsection-title">Research Approach</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {statement.methodology}
            </p>
          </div>

          <div className="card-highlight">
            <h3 className="subsection-title">Future Directions (2025-2030)</h3>
            <ul className="space-y-3">
              {statement.futureDirections.map((direction, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{direction}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-highlight bg-green-50 border-green-200">
            <h3 className="subsection-title">Societal Impact</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {statement.impact}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
