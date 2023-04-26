import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

async function deleteHandler(
  req: { method: string; body: string },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): any; new (): any };
      redirect: { (arg0: number, arg1: string): any; new (): any };
    };
  }
) {
  if (req.method !== "DELETE") {
    return res.status(400).json({ message: "Bad request" });
  }

  try {
    const db = (await connectDB).db("next-practice");
    const result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(req.body) });
    console.log(result);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
  }
}

export default deleteHandler;
