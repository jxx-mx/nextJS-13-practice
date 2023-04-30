import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

async function List() {
  const data = await getData();

  const list = data.map((item) => ({
    id: item._id.toString(),
    title: item.title,
    content: item.content,
  }));

  return (
    <div className="list-bg">
      <ListItem data={list} />
    </div>
  );
}
export default List;

async function getData() {
  let client = await connectDB;
  let db = client.db("next-practice");
  return await db.collection("post").find().toArray();
}
