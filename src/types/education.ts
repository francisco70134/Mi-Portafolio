export interface Degree {
  title: string;
  institution: string;
  period: string;
  type: "university" | "specialization";
}

export interface Certification {
  name: string;
  issuer: string;
  date: string; 
  icon: string;
}

export interface EducationContent {
  sectionTitle: string;
  educationTitle: string;
  certificationsTitle: string;
  degrees: Degree[];
  certifications: Certification[];
}

export interface EducationData {
  es: EducationContent;
  en: EducationContent;
}
