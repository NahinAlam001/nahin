"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/lib/sanity.queries";

interface Profile {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  scholarUrl?: string;
  cvUrl?: string;
}

export default function Contact() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  if (!profile) return null;

  return (
    <section id="contact" className="section section-white">
      <div className="container-custom max-w-4xl">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          I'm actively seeking PhD opportunities and research collaborations.
          Feel free to reach out for academic discussions or potential
          collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="card-title mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {profile.email}
                </a>
              </div>
              {profile.phone && (
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Phone
                  </p>
                  <p className="text-gray-900">{profile.phone}</p>
                </div>
              )}
              {profile.location && (
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    Location
                  </p>
                  <p className="text-gray-900">{profile.location}</p>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <h3 className="card-title mb-4">Academic Profiles</h3>
            <div className="space-y-3">
              {profile.scholarUrl && (
                <a
                  href={profile.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0L1.608 9.6l1.56 1.872L12 4.68l8.832 6.792 1.56-1.872L12 0zm0 5.28l-6.912 5.328v8.088L12 23.76l6.912-5.064v-8.088L12 5.28z" />
                  </svg>
                  Google Scholar
                </a>
              )}
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
            {profile.cvUrl && (
              <div className="mt-6">
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Download Full CV
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
