export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    image: string;
    lqip: string;
    alt: string;
  };
  shortBio: string;
  email: string;
  fullBio: string;
  location: string;
  resumeURL: string;
  og: string;
  usage: string;
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  relatedProject?: string;
};

export type ProjectSection = {
  title: string;
  content: string;
  image?: {
    url: string;
    alt: string;
  };
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  repository: string;
  logo: string;
  coverImage: {
    image: string;
    alt: string | null;
    lqip: string;
  };
  description: string;
  technologies?: string[];
  detailedSections?: ProjectSection[];
  team?: {
    members: string[];
    context?: string;
  };
  dates?: {
    start: string;
    end?: string;
  };
  gallery?: {
    url: string;
    alt: string;
  }[];
  relatedJob?: string;
};

export type EducationType = {
  _id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
  logo?: string;
};
