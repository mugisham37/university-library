// Global type definitions for the university library system

export interface Book {
  id: string;
  title: string;
  genre: string;
  coverColor: string;
  coverUrl: string;
  isLoanedBook?: boolean;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  universityId: string;
  universityCard?: string;
}

export interface AuthFormData {
  email: string;
  password: string;
  fullName?: string;
  universityId?: string;
  universityCard?: string;
}

export type AuthType = "SIGN_IN" | "SIGN_UP";

export interface FileUploadProps {
  type: "image" | "document";
  accept: string;
  placeholder: string;
  folder: string;
  variant?: "light" | "dark";
  onFileChange: (url: string) => void;
}
