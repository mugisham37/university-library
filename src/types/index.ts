// Global type definitions for the university library system

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverColor: string;
  coverUrl: string;
  videoUrl?: string;
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
  type: "image" | "document" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant?: "light" | "dark";
  onFileChange: (url: string) => void;
  value?: string;
}

// Auth credentials interface
export interface AuthCredentials {
  fullName: string;
  email: string;
  universityId: number;
  password: string;
  universityCard: string;
}

// Book parameters interface
export interface BookParams {
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  coverUrl: string;
  coverColor: string;
  description: string;
  videoUrl: string;
  summary: string;
}

// Borrow book parameters interface
export interface BorrowBookParams {
  userId: string;
  bookId: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
