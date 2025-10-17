"use client";

import { useEffect, useState } from "react";
import { getTeaching } from "@/lib/sanity.queries";

interface Teaching {
  _id: string;
  role: string;
  course: string;
  institution: string;
  period?: string;
  description?: string;
  responsibilities?: string[];
}

export default function Teaching() {
  const [teaching, setTeaching] = useState<Teaching[]>([]);

  useEffect(() => {
    getTeaching().then(setTeaching);
  }, []);

  if (teaching.length === 0) return null;

  return (
    <section id="teaching" className="section section-gray">
      <div className="container-custom">
        <h2 className="section-title">Teaching Experience</h2>
        <p className="section-subtitle">
          Committed to advancing AI education and mentoring the next generation
          of researchers in Bangladesh
        </p>
        <div className="space-y-6">
          {teaching.map((exp) => (
            <div key={exp._id} className="card">
              <div className="border-l-4 border-accent-500 pl-6">
                <h3 className="card-title">
                  {exp.role} • {exp.course}
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  {exp.institution}
                </p>
                {exp.period && (
                  <p className="text-gray-600 mb-3">{exp.period}</p>
                )}
                {exp.description && (
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                )}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
