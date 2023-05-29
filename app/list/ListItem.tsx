"use client";

import DetailLink from "./DetailLink";
import { MouseEvent } from "react";

type ListItemProps = {
  id: string;
  title: string;
  content: string;
};

function ListItem({ data }: { data: ListItemProps[] }) {
  function deleteItem(
    id: string,
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ): void {
    fetch(`/api/post/delete`, {
      method: "DELETE",
      body: id.toString(),
    }).then((res) =>
      res.json().then(() => {
        const parentElement =
          e.target instanceof HTMLDivElement
            ? e.target.parentElement
            : undefined;
        if (parentElement) {
          parentElement.style.opacity = "0";
          setTimeout(() => {
            parentElement.style.display = "none";
          }, 500);
        }
      })
    );
  }

  return (
    <>
      {data.map((item, i) => (
        <div className="list-item" key={item.title + i}>
          <h4>{item.title}</h4>
          <p>{item.content}</p>
          <DetailLink to={`/detail/${item.id}`} text="상세보기" />
          <DetailLink to={`/edit/${item.id}`} text="수정하기" />
          <div onClick={(e) => deleteItem(item.id, e)}>🗑️</div>
        </div>
      ))}
    </>
  );
}
export default ListItem;
