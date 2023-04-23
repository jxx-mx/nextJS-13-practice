import { connectDB } from "@/util/database";
import DetailLink from "./DetailLink";

async function List() {
  const data = await getData();

  return (
    <div className="list-bg">
      {data.map((item, i) => (
        <div className="list-item" key={item.title + i}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
          <p>1월 1일</p>
          <DetailLink to={`/detail/${item._id}`} text="상세보기" />
          <DetailLink to={`/edit/${item._id}`} text="수정하기" />
        </div>
      ))}
    </div>
  );
}
export default List;

async function getData() {
  let client = await connectDB;
  let db = client.db("next-practice");
  return await db.collection("post").find().toArray();
}
