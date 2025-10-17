"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/lib/sanity.queries";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

interface Profile {
  name: string;
  title: string;
  headline: string;
  cvUrl?: string;
  image?: any; // Sanity image object
}

export default function Hero() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  if (!profile) return null;

  return (
    <section className="section pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {profile.name}
            </h1>
            <p className="text-2xl md:text-3xl text-primary-600 font-medium mb-6">
              {profile.title}
            </p>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {profile.headline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#publications" className="btn-primary">
                View Publications
              </a>
              <a href="#research" className="btn-secondary">
                Research Statement
              </a>
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Download CV
                </a>
              )}
            </div>
          </div>

          {/* Profile Image */}
          {profile.image && (
            <div className="flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-100">
                <Image
                  src={urlFor(profile.image).width(400).height(400).url()}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
