import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
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

  const result = await db
    .collection("shipments")
    .deleteOne({ _id: new ObjectId(id[0]) });

  return NextResponse.json({ success: true, data: result });
}
