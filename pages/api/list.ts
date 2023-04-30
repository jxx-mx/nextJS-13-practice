import { connectDB } from "@/util/database";
import { Document } from "bson";
import { WithId } from "mongodb";

async function handler(
  req: { method: string },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: WithId<Document>[] | any): void; new (): any };
    };
  }
) {
  if (req.method !== "GET") {
    return res.status(400).json({ message: "Bad request" });
  }

  const db = (await connectDB).db("next-practice");
  let result = await db.collection("post").find({}).toArray();
  res.status(200).json(result);
  console.log("here", result);
}

export default handler;
