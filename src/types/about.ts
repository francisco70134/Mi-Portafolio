export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  title: string;
  paragraphs: string[];
  stats: Stat[];
}