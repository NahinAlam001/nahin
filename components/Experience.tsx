"use client";

import { useEffect, useState } from "react";
import { getExperience } from "@/lib/sanity.queries";

interface Experience {
  _id: string;
  position: string;
  organization: string;
  location?: string;
  period?: string;
  description?: string;
  responsibilities?: string[];
}

export default function Experience() {
  const [experience, setExperience] = useState<Experience[]>([]);

  useEffect(() => {
    getExperience().then(setExperience);
  }, []);

  if (experience.length === 0) return null;

  return (
    <section id="experience" className="section section-white">
      <div className="container-custom">
        <h2 className="section-title">Professional Experience</h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp._id} className="card">
              <div className="border-accent">
                <h3 className="card-title">{exp.position}</h3>
                <p className="text-lg font-medium text-gray-700 mb-2">
                  {exp.organization}
                  {exp.location && ` • ${exp.location}`}
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
                        <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
