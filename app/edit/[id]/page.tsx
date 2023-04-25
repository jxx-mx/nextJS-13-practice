import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

async function Edit({ params }: { params: { id: number } }) {
  const data = await getData(params.id);

  return (
    <div className="p-20">
      <h4>글 수정</h4>
      <form action="/api/post/update" method="POST">
        <input type="text" name="title" defaultValue={data?.title} />
        <input type="text" name="content" defaultValue={data?.content} />
        <input type="text" name="id" defaultValue={data?._id.toString()} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
export default Edit;

async function getData(id: number) {
  let client = await connectDB;
  let db = client.db("next-practice");
  return await db.collection("post").findOne({ _id: new ObjectId(id) });
}
