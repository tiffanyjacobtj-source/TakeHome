import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Quiz question type
export interface QuizQuestion {
  id: number;
  question: string;
  answer: boolean; // true or false
  options: [string, string]; // e.g., ["True", "False"] or ["Yes", "No"]
  explanation: string; // Explanation for the correct answer
}

// Quiz data - 10 questions about misinformation and critical thinking
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "People most often misunderstand information because they trust what they see without verifying the source.",
    answer: true,
    options: ["True", "False"],
    explanation: "Many people fall for misinformation because they trust content at face value without checking its origin or credibility."
  },
  {
    id: 2,
    question: "Social media posts from friends are always reliable sources of information.",
    answer: false,
    options: ["True", "False"],
    explanation: "Even well-meaning friends can unknowingly share inaccurate information. Always verify claims independently."
  },
  {
    id: 3,
    question: "Checking multiple credible sources helps verify if information is accurate.",
    answer: true,
    options: ["True", "False"],
    explanation: "Cross-referencing multiple reputable sources is one of the best ways to confirm the accuracy of information."
  },
  {
    id: 4,
    question: "Emotional or shocking headlines are designed to make you click and share without thinking.",
    answer: true,
    options: ["True", "False"],
    explanation: "Clickbait headlines exploit emotions to get shares and clicks, often without users reading the full content."
  },
  {
    id: 5,
    question: "If a website looks professional, the information it contains must be factual.",
    answer: false,
    options: ["True", "False"],
    explanation: "A polished design doesn't guarantee accuracy. Anyone can create a professional-looking website with false information."
  },
  {
    id: 6,
    question: "You should always verify claims before sharing them on social media.",
    answer: true,
    options: ["Yes", "No"],
    explanation: "Taking a moment to verify information before sharing helps prevent the spread of misinformation to your network."
  },
  {
    id: 7,
    question: "Misinformation only spreads through fake news websites, not through mainstream platforms.",
    answer: false,
    options: ["True", "False"],
    explanation: "Misinformation can spread anywhere online, including social media, messaging apps, and even mainstream platforms."
  },
  {
    id: 8,
    question: "Fact-checking websites and reverse image searches can help identify false information.",
    answer: true,
    options: ["Yes", "No"],
    explanation: "Tools like Snopes, FactCheck.org, and Google's reverse image search are effective for verifying claims and images."
  },
  {
    id: 9,
    question: "Personal opinions shared online are always based on verified facts.",
    answer: false,
    options: ["True", "False"],
    explanation: "Opinions are subjective and may not be based on facts. It's important to distinguish between opinions and verified information."
  },
  {
    id: 10,
    question: "Being skeptical and questioning sources is an important skill for consuming online content.",
    answer: true,
    options: ["Yes", "No"],
    explanation: "Critical thinking and healthy skepticism are essential for navigating today's information-rich digital landscape."
  }
];
