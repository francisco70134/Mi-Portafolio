export interface PersonalDetail {
  label: string;
  value: string;
}

export interface TechTool {
  name: string;
  icon: string;
}

export interface TechCategory {
  id: string;
  name: string;
  tools: TechTool[];
}

export interface AboutContent {
  title: string;
  bio: string[];
  details: PersonalDetail[];
  techTitle: string;
  techCategories: TechCategory[];
}

export interface AboutData {
  es: AboutContent;
  en: AboutContent;
}
