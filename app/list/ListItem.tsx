"use client";

import type { WithId, Document, ObjectId } from "mongodb";
import DetailLink from "./DetailLink";

function ListItem({ data }: { data: WithId<Document>[] }) {
  function deleteItem(id: ObjectId): void {
    fetch(`/api/post/delete`, {
      method: "DELETE",
      body: id.toString(),
    }).then((res) => res.json().then((res) => console.log(res.message)));
  }

  return (
    <>
      {data.map((item, i) => (
        <div className="list-item" key={item.title + i}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
          <DetailLink to={`/detail/${item._id}`} text="상세보기" />
          <DetailLink to={`/edit/${item._id}`} text="수정하기" />
          <span onClick={() => deleteItem(item._id)}>🗑️</span>
        </div>
      ))}
    </>
  );
}
export default ListItem;
