import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Research Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Research Project", value: "research" },
          { title: "Industry Project", value: "industry" },
          { title: "Academic Project", value: "academic" },
        ],
      },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "problem",
      title: "Problem Statement",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "approach",
      title: "Approach",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "results",
      title: "Results & Metrics",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "relatedPublication",
      title: "Related Publication",
      type: "string",
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "demoUrl",
      title: "Demo URL",
      type: "url",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
