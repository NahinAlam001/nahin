"use client";

import { useEffect, useState } from "react";
import { getPublications } from "@/lib/sanity.queries";

interface Publication {
  _id: string;
  title: string;
  authors: string;
  yourRole: string;
  venue: string;
  status: string;
  year: number;
  abstract: string;
  methodology?: string;
  results?: string;
  arxivUrl?: string;
  paperUrl?: string;
  codeUrl?: string;
  tags?: string[];
}

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    getPublications().then(setPublications);
  }, []);

  const getStatusBadge = (status: string) => {
    const styles = {
      published: "tag-green",
      accepted: "tag",
      under_review: "tag-yellow",
      in_preparation: "tag-gray",
    };
    const labels = {
      published: "Published",
      accepted: "Accepted",
      under_review: "Under Review",
      in_preparation: "In Preparation",
    };
    return (
      <span className={styles[status as keyof typeof styles] || "tag-gray"}>
        {labels[status as keyof typeof labels] || status}
      </span>
    );
  };

  if (publications.length === 0) return null;

  return (
    <section id="publications" className="section section-white">
      <div className="container-custom">
        <h2 className="section-title">Publications</h2>
        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub._id} className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {pub.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-medium text-primary-600">
                  {pub.venue}
                </span>
                {getStatusBadge(pub.status)}
                <span className="text-gray-500">{pub.year}</span>
              </div>

              <div className="space-y-3 mb-4">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Authors:</strong>{" "}
                  {pub.authors}
                </p>
                <p className="text-gray-700">
                  <strong className="text-gray-900">Your Role:</strong>{" "}
                  {pub.yourRole}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Abstract</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>

                {pub.methodology && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Methodology
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {pub.methodology}
                    </p>
                  </div>
                )}

                {pub.results && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Results
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {pub.results}
                    </p>
                  </div>
                )}
              </div>

              {pub.tags && pub.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {(pub.arxivUrl || pub.paperUrl || pub.codeUrl) && (
                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200">
                  {pub.arxivUrl && (
                    <a
                      href={pub.arxivUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      arXiv →
                    </a>
                  )}
                  {pub.paperUrl && (
                    <a
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      Paper →
                    </a>
                  )}
                  {pub.codeUrl && (
                    <a
                      href={pub.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      Code →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
