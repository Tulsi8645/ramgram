export interface ContactInfo {
  icon: React.FC;
  title: string;
  content: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}