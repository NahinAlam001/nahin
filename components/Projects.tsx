"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/lib/sanity.queries";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

interface Project {
  _id: string;
  title: string;
  category?: string;
  shortDescription: string;
  problem?: string;
  approach?: string;
  results?: string;
  technologies?: string[];
  relatedPublication?: string;
  githubUrl?: string;
  demoUrl?: string;
  featuredImageUrl?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="section section-gray">
      <div className="container-custom">
        <h2 className="section-title">Research Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              onClick={() => setSelectedProject(project)}
              className="card cursor-pointer group hover:border-primary-300 transition-all"
            >
              {project.featuredImageUrl && (
                <div className="relative h-48 -m-6 mb-4 rounded-t-lg overflow-hidden bg-gray-100">
                  <Image
                    src={project.featuredImageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <h3 className="card-title group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              {project.category && (
                <span className="tag mb-3">{project.category}</span>
              )}
              <p className="text-gray-700 mb-4">{project.shortDescription}</p>
              {project.technologies && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="tag-gray text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-4 right-4 float-right w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedProject.title}
                </h2>
                {selectedProject.category && (
                  <span className="tag mb-4 inline-block">
                    {selectedProject.category}
                  </span>
                )}

               {selectedProject.featuredImageUrl && ( // 1. Use the image object, not a URL string
		  <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
		    <Image
		      // 2. Build the URL on the fly, ensuring it fits without cropping
		      src={urlFor(selectedProject.featuredImageUrl)
			.height(256) // Set a height (h-64 is 256px) to optimize the downloaded image size
			.fit('max')    // This ensures no truncation happens
			.url()}
		      alt={selectedProject.title}
		      fill // 3. Use the correct `fill` prop for Next.js Image
		      className="object-contain" // 4. This CSS prevents the image from being cut off
		    />
		  </div>
		)} 

                <div className="space-y-4">
                  {selectedProject.problem && (
                    <div>
                      <h3 className="subsection-title">Problem Statement</h3>
                      <p className="text-gray-700">{selectedProject.problem}</p>
                    </div>
                  )}

                  {selectedProject.approach && (
                    <div>
                      <h3 className="subsection-title">Approach</h3>
                      <p className="text-gray-700">
                        {selectedProject.approach}
                      </p>
                    </div>
                  )}

                  {selectedProject.results && (
                    <div>
                      <h3 className="subsection-title">Results</h3>
                      <p className="text-gray-700">{selectedProject.results}</p>
                    </div>
                  )}

                  {selectedProject.technologies && (
                    <div>
                      <h3 className="subsection-title">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.relatedPublication && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Related Publication:</strong>{" "}
                        {selectedProject.relatedPublication}
                      </p>
                    </div>
                  )}

                  {(selectedProject.githubUrl || selectedProject.demoUrl) && (
                    <div className="flex gap-4 pt-4">
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          View Code →
                        </a>
                      )}
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
