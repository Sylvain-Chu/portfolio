import fs from "fs";
import path from "path";
import { z } from "zod";

// --- Schemas ---

const ProfileSchema = z.object({
  _id: z.string(),
  fullName: z.string(),
  headline: z.string(),
  profileImage: z.object({
    image: z.string(),
    lqip: z.string(),
    alt: z.string(),
  }),
  shortBio: z.string(),
  email: z.string(),
  fullBio: z.string(),
  location: z.string(),
  resumeURL: z.string(),
  og: z.string(),
  usage: z.string(),
});

const JobSchema = z.object({
  _id: z.string(),
  name: z.string(),
  jobTitle: z.string(),
  logo: z.string(),
  url: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  location: z.string().optional(),
  relatedProject: z.string().optional(),
});

const ProjectSectionSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z
    .object({
      url: z.string(),
      alt: z.string(),
    })
    .optional(),
});

const ProjectSchema = z.object({
  _id: z.string(),
  name: z.string(),
  slug: z.string(),
  tagline: z.string(),
  projectUrl: z.string(),
  repository: z.string(),
  logo: z.string(),
  coverImage: z.object({
    image: z.string(),
    alt: z.string().nullable(),
    lqip: z.string(),
  }),
  description: z.string(),
  technologies: z.array(z.string()).optional(),
  detailedSections: z.array(ProjectSectionSchema).optional(),
  team: z
    .object({
      members: z.array(z.string()),
      context: z.string().optional(),
    })
    .optional(),
  dates: z
    .object({
      start: z.string(),
      end: z.string().optional(),
    })
    .optional(),
  gallery: z
    .array(z.object({ url: z.string(), alt: z.string() }))
    .optional(),
  relatedJob: z.string().optional(),
});

const EducationSchema = z.object({
  _id: z.string(),
  school: z.string(),
  degree: z.string(),
  field: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: z.string().optional(),
  logo: z.string().optional(),
  level: z.string().optional(),
  linkedSchool: z
    .object({
      name: z.string(),
      url: z.string(),
      logo: z.string().optional(),
    })
    .optional(),
});

// --- Loaders ---

function readJson(filename: string) {
  const filePath = path.join(process.cwd(), "data", filename);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export function getProfile() {
  return ProfileSchema.parse(readJson("profile.json"));
}

export function getJobs() {
  return z.array(JobSchema).parse(readJson("jobs.json"));
}

export function getProjects() {
  return z.array(ProjectSchema).parse(readJson("projects.json"));
}

export function getEducations() {
  return z.array(EducationSchema).parse(readJson("education.json"));
}
