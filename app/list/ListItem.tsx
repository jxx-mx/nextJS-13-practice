"use client";

import DetailLink from "./DetailLink";

type ListItemProps = {
  id: string;
  title: string;
  content: string;
};

function ListItem({ data }: { data: ListItemProps[] }) {
  console.log(data);
  function deleteItem(id: string): void {
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
          <DetailLink to={`/detail/${item.id}`} text="상세보기" />
          <DetailLink to={`/edit/${item.id}`} text="수정하기" />
          <span onClick={() => deleteItem(item.id)}>🗑️</span>
        </div>
      ))}
    </>
  );
}
export default ListItem;
