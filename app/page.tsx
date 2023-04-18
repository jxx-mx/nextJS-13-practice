import { connectDB } from "../util/database";

async function Home() {
  const data = await getData();
  return (
    <div>
      {data.map((res) => (
        <>
          <div>{res.title}</div>
          <div>{res.content}</div>
        </>
      ))}
    </div>
  );
}

export default Home;

async function getData() {
  let client = await connectDB;
  let db = client.db("next-practice");
  return await db.collection("post").find().toArray();
}
