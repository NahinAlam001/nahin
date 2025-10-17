"use client";

import { useEffect, useState } from "react";
import { getEducation } from "@/lib/sanity.queries";

interface Education {
  _id: string;
  degree: string;
  institution: string;
  location?: string;
  startYear?: string;
  endYear?: string;
  gpa?: string;
  honors?: string;
  description?: string;
  highlights?: string[];
}

export default function Education() {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    getEducation().then(setEducation);
  }, []);

  if (education.length === 0) return null;

  return (
    <section id="education" className="section section-gray">
      <div className="container-custom">
        <h2 className="section-title">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu._id} className="card">
              <div className="border-accent">
                <h3 className="card-title">{edu.degree}</h3>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  {edu.institution}
                  {edu.location && ` • ${edu.location}`}
                </p>
                {(edu.startYear || edu.endYear) && (
                  <p className="text-gray-600 mb-3">
                    {edu.startYear} - {edu.endYear}
                  </p>
                )}
                {edu.gpa && (
                  <p className="text-gray-900 mb-2">
                    <strong>GPA:</strong> {edu.gpa}
                  </p>
                )}
                {edu.honors && (
                  <p className="text-primary-600 font-semibold mb-3">
                    {edu.honors}
                  </p>
                )}
                {edu.description && (
                  <p className="text-gray-700 mb-3">{edu.description}</p>
                )}
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{highlight}</span>
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
