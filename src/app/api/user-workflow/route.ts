import { serve } from "@upstash/workflow/nextjs";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { sendEmail } from "@/lib/workflow";

type UserState = "non-active" | "active";

type InitialData = {
  email: string;
  fullName: string;
};

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
const THREE_DAYS_IN_MS = 3 * ONE_DAY_IN_MS;
const THIRTY_DAYS_IN_MS = 30 * ONE_DAY_IN_MS;

const getUserState = async (email: string): Promise<UserState> => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length === 0) return "non-active";

  const lastActivityDate = new Date(user[0].lastActivityDate!);
  const now = new Date();
  const timeDifference = now.getTime() - lastActivityDate.getTime();

  if (
    timeDifference > THREE_DAYS_IN_MS &&
    timeDifference <= THIRTY_DAYS_IN_MS
  ) {
    return "non-active";
  }

  return "active";
};

export const { POST } = serve<InitialData>(async (context) => {
  const { email, fullName } = context.requestPayload;

  // Welcome Email
  await context.run("new-signup", async () => {
    await sendEmail({
      email,
      subject: "Welcome to BookWise - Your University Library Awaits!",
      message: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; text-align: center;">Welcome to BookWise!</h1>
          <p>Dear ${fullName},</p>
          <p>We're thrilled to have you join our university library community! BookWise is your gateway to discovering, borrowing, and managing your favorite books.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">What you can do with BookWise:</h3>
            <ul style="color: #374151;">
              <li>Browse our extensive collection of books</li>
              <li>Borrow books with just a few clicks</li>
              <li>Track your reading history</li>
              <li>Manage your borrowed books and due dates</li>
            </ul>
          </div>
          <p>Start exploring our collection today and discover your next great read!</p>
          <p>Happy reading,<br>The BookWise Team</p>
        </div>
      `,
    });
  });

  await context.sleep("wait-for-3-days", 60 * 60 * 24 * 3);

  while (true) {
    const state = await context.run("check-user-state", async () => {
      return await getUserState(email);
    });

    if (state === "non-active") {
      await context.run("send-email-non-active", async () => {
        await sendEmail({
          email,
          subject: "We Miss You at BookWise! 📚",
          message: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #dc2626; text-align: center;">We Miss You! 📚</h1>
              <p>Hi ${fullName},</p>
              <p>We noticed you haven't visited BookWise in a while. Our library is always growing with new and exciting books waiting to be discovered!</p>
              <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
                <h3 style="color: #991b1b; margin-top: 0;">Don't miss out on:</h3>
                <ul style="color: #7f1d1d;">
                  <li>New arrivals in your favorite genres</li>
                  <li>Popular books that other students are reading</li>
                  <li>Your personalized reading recommendations</li>
                </ul>
              </div>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}" 
                   style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                  Return to BookWise
                </a>
              </div>
              <p>We're here whenever you're ready to dive back into reading!</p>
              <p>Best regards,<br>The BookWise Team</p>
            </div>
          `,
        });
      });
    } else if (state === "active") {
      await context.run("send-email-active", async () => {
        await sendEmail({
          email,
          subject: "Welcome Back to BookWise! 🎉",
          message: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #059669; text-align: center;">Welcome Back! 🎉</h1>
              <p>Hello ${fullName},</p>
              <p>It's wonderful to see you back at BookWise! We're excited that you're continuing your reading journey with us.</p>
              <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #059669;">
                <h3 style="color: #065f46; margin-top: 0;">Keep the momentum going:</h3>
                <ul style="color: #064e3b;">
                  <li>Check out books similar to your recent reads</li>
                  <li>Explore new genres and authors</li>
                  <li>Join our reading community discussions</li>
                  <li>Set reading goals for the semester</li>
                </ul>
              </div>
              <p>Thank you for being an active member of our library community. Your engagement helps make BookWise better for everyone!</p>
              <p>Happy reading,<br>The BookWise Team</p>
            </div>
          `,
        });
      });
    }

    await context.sleep("wait-for-1-month", 60 * 60 * 24 * 30);
  }
});
