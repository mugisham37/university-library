import { redirect } from "next/navigation";

export default function RootPage() {
  // Since we're using route groups, redirect to sign-in by default
  // The auth logic will handle redirecting authenticated users appropriately
  redirect("/sign-in");
}
