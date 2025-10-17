import { client } from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    `*[_type == "profile"][0] {
      _id,
      name,
      title,
      headline,
      bio,
      email,
      phone,
      location,
      image,
      githubUrl,
      linkedinUrl,
      scholarUrl,
      "cvUrl": cvFile.asset->url
    }`,
  );
}

export async function getEducation() {
  return client.fetch(
    `*[_type == "education"] | order(order asc) {
      _id,
      degree,
      institution,
      location,
      startYear,
      endYear,
      gpa,
      honors,
      description,
      highlights
    }`,
  );
}

export async function getResearchStatement() {
  return client.fetch(
    `*[_type == "researchStatement"][0] {
      _id,
      motivation,
      currentFocus,
      methodology,
      futureDirections,
      impact
    }`,
  );
}

export async function getPublications() {
  return client.fetch(
    `*[_type == "publication"] | order(order asc) {
      _id,
      title,
      authors,
      yourRole,
      venue,
      status,
      year,
      abstract,
      methodology,
      results,
      arxivUrl,
      paperUrl,
      codeUrl,
      tags
    }`,
  );
}

export async function getProjects() {
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
      _id,
      title,
      category,
      shortDescription,
      problem,
      approach,
      results,
      technologies,
      relatedPublication,
      githubUrl,
      demoUrl,
      "featuredImageUrl": featuredImage.asset->url
    }`,
  );
}

export async function getExperience() {
  return client.fetch(
    `*[_type == "experience"] | order(order asc) {
      _id,
      position,
      organization,
      location,
      period,
      description,
      responsibilities
    }`,
  );
}

export async function getTeaching() {
  return client.fetch(
    `*[_type == "teaching"] | order(order asc) {
      _id,
      role,
      course,
      institution,
      period,
      description,
      responsibilities
    }`,
  );
}
