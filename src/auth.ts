import { redirect } from "next/navigation";

export async function signOut() {
  // In a real implementation, this would handle session cleanup
  // For now, we'll redirect to the sign-in page
  redirect("/sign-in");
}
