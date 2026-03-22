import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, requirements } = body;

    if (!name || !phone || !requirements) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Forward to FormSubmit.co (no-backend email service)
    // In the future, replace this with Nodemailer, SendGrid, or any email provider
    const formData = new URLSearchParams();
    formData.append("Name", name);
    formData.append("Phone Number", phone);
    formData.append("Requirements", requirements);
    formData.append("_subject", "New Inquiry from Vijay Welding Website");
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    const response = await fetch(
      "https://formsubmit.co/ajax/vijaywelding1978@gmail.com",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: name,
          "Phone Number": phone,
          Requirements: requirements,
          _subject: "New Inquiry from Vijay Welding Website",
          _captcha: "false",
          _template: "table",
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json({ success: true, message: "Email sent successfully" });
    } else {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
