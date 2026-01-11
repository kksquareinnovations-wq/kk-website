import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  id: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Create submission object with metadata
    const timestamp = new Date().toISOString();
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const submission: ContactSubmission = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp,
      id,
    };

    // Ensure data directory exists
    const dataDir = join(process.cwd(), "data", "contact-submissions");

    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Write to individual JSON file
    const fileName = `${id}.json`;
    const filePath = join(dataDir, fileName);

    await writeFile(filePath, JSON.stringify(submission, null, 2), "utf-8");

    // Also append to a master log file for easy viewing
    const logPath = join(dataDir, "submissions.log");
    const logEntry = `[${timestamp}] ${name} (${email}) - ${subject}\n`;

    try {
      const fs = require("fs");
      fs.appendFileSync(logPath, logEntry, "utf-8");
    } catch {
      // Log file write failed, but individual submission file was created
      console.warn("Failed to write to log file, but submission was saved");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your feedback!",
        submissionId: id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";

    return NextResponse.json(
      { error: `Failed to process submission: ${errorMessage}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact form endpoint - POST only" },
    { status: 405 }
  );
}
