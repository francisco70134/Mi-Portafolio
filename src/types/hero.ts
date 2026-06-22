export interface HeroContent {
  greeting: string;
  roles: string[];
  description: string;
  btnWork: string;
  btnResume: string;
}

export interface HeroData {
  name: string;      // Fijo
  resumeUrl: string; // Fijo
  es: HeroContent;   // Traducción español
  en: HeroContent;   // Traducción inglés
}

export interface SocialLink {
  platform: string;
  url: string;
}