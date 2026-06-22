export interface Stat {
  value: string;
  label: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  stats: Stat[];
}

export interface AboutData {
  es: AboutContent;
  en: AboutContent;
}