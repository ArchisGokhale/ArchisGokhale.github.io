import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";

// Ensure env is loaded even if main server imports happen before config
const envPath = path.join(process.cwd(), ".env.local");
dotenv.config({ path: envPath });

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

console.log("🔍 Supabase Config Debug:");
console.log("  - SUPABASE_URL:", supabaseUrl ? "✅ SET" : "❌ MISSING");
console.log("  - SUPABASE_ANON_KEY:", supabaseKey ? "✅ SET" : "❌ MISSING");

const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export async function saveContactSubmission(
  submission: Omit<ContactSubmission, "id">
): Promise<string> {
  const id = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  if (!supabase) {
    console.warn("❌ Supabase not configured, submission not saved");
    return id;
  }

  try {
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          id,
          name: submission.name,
          email: submission.email,
          subject: submission.subject,
          message: submission.message,
          timestamp: submission.timestamp,
        },
      ])
      .select();

    if (error) {
      console.error("❌ Supabase error:", error);
      return id;
    }

    console.log(`✅ Submission saved to Supabase: ${id}`);
    return id;
  } catch (error) {
    console.error("❌ Error saving to Supabase:", error);
    return id;
  }
}

export async function getAllSubmissions(): Promise<ContactSubmission[]> {
  if (!supabase) {
    console.warn("❌ Supabase not configured");
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("timestamp", { ascending: false });

    if (error) {
      console.error("❌ Supabase query error:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("❌ Error fetching submissions:", error);
    return [];
  }
}
