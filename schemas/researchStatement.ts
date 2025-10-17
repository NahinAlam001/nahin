import { defineType, defineField } from "sanity";

export default defineType({
  name: "researchStatement",
  title: "Research Statement",
  type: "document",
  fields: [
    defineField({
      name: "motivation",
      title: "Research Motivation",
      type: "text",
      rows: 5,
      description: "Why do you pursue this research?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "currentFocus",
      title: "Current Research Focus",
      type: "text",
      rows: 5,
      description: "What are you currently working on?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "methodology",
      title: "Research Approach",
      type: "text",
      rows: 5,
      description: "Your research methodology",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "futureDirections",
      title: "Future Research Directions",
      type: "array",
      of: [{ type: "string" }],
      description: "Your 3-5 year research goals",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "impact",
      title: "Societal Impact",
      type: "text",
      rows: 5,
      description: "Expected impact of your research",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
