import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

async function Edit({ params }: { params: { id: number } }) {
  const data = await getData(params.id);

  // TODO: api 요청은 성공하는데 폼 데이터가 수정된 데이터로 전송 안되는듯??

  return (
    <div className="p-20">
      <h4>글 수정</h4>
      <form action="/api/post/update" method="POST">
        <input type="text" name="title" defaultValue={data?.title} />
        <input type="text" name="content" defaultValue={data?.content} />
        <input disabled type="text" name="id" value={data?._id.toString()} />
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
