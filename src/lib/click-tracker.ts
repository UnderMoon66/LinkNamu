import { getDb } from "@/lib/mongodb";

type ClickCount = {
  linkId: string;
  count: number;
};

export async function recordClick(linkId: string): Promise<void> {
  const db = await getDb();
  await db.collection<ClickCount>("clicks").updateOne(
    { linkId },
    { $inc: { count: 1 }, $set: { lastClickedAt: new Date() } },
    { upsert: true }
  );
}

export async function getClickCounts(): Promise<Record<string, number>> {
  const db = await getDb();
  const docs = await db.collection<ClickCount>("clicks").find().toArray();
  return Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));
}
