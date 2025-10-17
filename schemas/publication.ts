import { defineType, defineField } from "sanity";

export default defineType({
  name: "publication",
  title: "Publications",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Paper Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "string",
      description: "Full author list",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "yourRole",
      title: "Your Role",
      type: "string",
      options: {
        list: [
          { title: "First Author", value: "First Author" },
          { title: "Co-First Author", value: "Co-First Author" },
          { title: "Contributing Author", value: "Contributing Author" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
      description: "Conference/Journal name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Published", value: "published" },
          { title: "Accepted", value: "accepted" },
          { title: "Under Review", value: "under_review" },
          { title: "In Preparation", value: "in_preparation" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "abstract",
      title: "Abstract",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "methodology",
      title: "Methodology",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "results",
      title: "Key Results",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "arxivUrl",
      title: "arXiv URL",
      type: "url",
    }),
    defineField({
      name: "paperUrl",
      title: "Paper URL",
      type: "url",
    }),
    defineField({
      name: "codeUrl",
      title: "Code Repository URL",
      type: "url",
    }),
    defineField({
      name: "tags",
      title: "Research Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
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
