import Image from "next/image";

function Home() {
  let name = "park";

  return (
    <>
      <h4 className="title">Apple Fresh</h4>
      <p className="title-sub">by dev {name}</p>
    </>
  );
}

export default Home;
