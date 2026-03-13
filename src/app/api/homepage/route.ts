import { NextResponse } from "next/server";
import { getHomePage } from "@/lib/getPage";

export async function GET() {
  try {
    const pageData = await getHomePage();
    return NextResponse.json(pageData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch homepage data" },
      { status: 500 }
    );
  }
}