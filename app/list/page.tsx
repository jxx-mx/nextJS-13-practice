import { connectDB } from "@/util/database";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

async function List() {
  const data = await getData();
  console.log(data);

  return (
    <div className="list-bg">
      <ListItem data={data} />
    </div>
  );
}
export default List;

async function getData() {
  let client = await connectDB;
  let db = client.db("next-practice");
  return await db.collection("post").find().toArray();
}
