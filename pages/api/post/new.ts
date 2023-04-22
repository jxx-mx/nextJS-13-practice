import { connectDB } from "@/util/database";

async function handler(req: { method: string; body: any }, res: any) {
  if (req.method !== "POST")
    return res.status(400).json({ message: "Bad request" });

  if (req.body.title === "" || req.body.content === "") {
    return res.status(400).json({ message: "No data" });
  }

  try {
    const db = (await connectDB).db("next-practice");
    await db.collection("post").insertOne(req.body);
    return res.status(200).redirect(302, "/list");
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
}

export default handler;
