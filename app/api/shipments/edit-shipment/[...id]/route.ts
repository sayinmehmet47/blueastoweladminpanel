import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  context: {
    params: {
      id: string[];
    };
  },
) {
  const client = await clientPromise;
  const db = client.db();
  const id = context.params.id;
  const body = await req.json();

  const { ...data } = body;

  const result = await db
    .collection("shipments")
    .updateOne({ _id: new ObjectId(id[0]) }, { $set: data });

  return NextResponse.json({ success: true, data: result });
}
