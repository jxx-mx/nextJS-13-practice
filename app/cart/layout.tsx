export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p className="title-sub">현대카드 무이자 이벤트 중</p>
      {children}
    </>
  );
}