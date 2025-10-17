"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/lib/sanity.queries";

interface Profile {
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  scholarUrl?: string;
}

export default function About() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  if (!profile) return null;

  return (
    <section id="about" className="section section-white">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {profile.bio}
            </p>
          </div>
          <div className="card">
            <h3 className="card-title mb-4">Contact Information</h3>
            <div className="space-y-3">
              {profile.email && (
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${profile.email}`} className="link">
                    {profile.email}
                  </a>
                </div>
              )}
              {profile.phone && (
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900">{profile.phone}</p>
                </div>
              )}
              {profile.location && (
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-900">{profile.location}</p>
                </div>
              )}
            </div>
            <div className="divider"></div>
            <div className="space-y-2">
              {profile.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link block"
                >
                  GitHub →
                </a>
              )}
              {profile.linkedinUrl && (
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link block"
                >
                  LinkedIn →
                </a>
              )}
              {profile.scholarUrl && (
                <a
                  href={profile.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link block"
                >
                  Google Scholar →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
