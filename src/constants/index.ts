// Form field constants for consistent labeling and types

export const FIELD_NAMES = {
  email: "Email Address",
  password: "Password",
  fullName: "Full Name",
  universityId: "University ID",
  universityCard: "University ID Card",
} as const;

export const FIELD_TYPES = {
  email: "email",
  password: "password",
  fullName: "text",
  universityId: "text",
  universityCard: "file",
} as const;

export const FORM_VALIDATION_MESSAGES = {
  required: "This field is required",
  invalidEmail: "Please enter a valid email address",
  passwordTooShort: "Password must be at least 8 characters",
  invalidUniversityId: "Please enter a valid university ID",
} as const;
