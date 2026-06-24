export interface HeroContent {
  greeting: string;
  roles: string[];
  description: string;
  btnWork: string;
  btnResume: string;
}

export interface HeroData {
  name: string;
  resumeUrl: string;
  es: HeroContent;
  en: HeroContent;
}

export interface SocialLink {
  platform: string;
  url: string;
}
