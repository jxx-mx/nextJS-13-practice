import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

async function Detail(props: { params: { id: number } }) {
  const data = await getData(props.params.id);
  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{data?.title}</h4>
      <p>{data?.content}</p>
    </div>
  );
}

export default Detail;

async function getData(id: number) {
  let client = await connectDB;
  let db = client.db("next-practice");
  return await db.collection("post").findOne({ _id: new ObjectId(id) });
}
