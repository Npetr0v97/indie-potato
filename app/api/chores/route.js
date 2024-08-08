import { NextResponse } from "next/server";
import connectMongoDB from "@/config/database";
import Chore from "@/models/chore";

export async function GET(request) {
  await connectMongoDB();

  const chores = await Chore.find();
  return NextResponse.json({ chores }, { status: 200 });
}

export async function POST(request) {
  await connectMongoDB();
  let newChore = await request.json();

  const createdChore = await Chore.create(newChore);
  return NextResponse.json({ createdChore }, { status: 200 });
}
