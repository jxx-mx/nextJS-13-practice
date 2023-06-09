import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

async function handler(
  req: { method: string; body: { [x: string]: any; _id: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): any; new (): any };
      redirect: { (arg0: number, arg1: string): any; new (): any };
    };
  }
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Bad request" });
  }

  try {
    const { title, content, id } = req.body;
    const db = (await connectDB).db("next-practice");

    await db
      .collection("post")
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { title: title, content: content } }
      );
    return res.status(200).redirect(302, "/list");
  } catch (error) {}
}

export default handler;
