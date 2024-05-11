import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";

async function readStream(stream: ReadableStream<Uint8Array>): Promise<string> {
  let result = "";
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += new TextDecoder().decode(value);
  }
  return result;
}

export async function POST(req: NextRequest) {
  const client = await clientPromise;
  const db = client.db();

  const body = await readStream(req.body!);

  // Insert the shipment data into the 'shipments' collection
  const result = await db.collection("shipments").insertOne(JSON.parse(body));

  return NextResponse.json({ success: true, data: result });
}
