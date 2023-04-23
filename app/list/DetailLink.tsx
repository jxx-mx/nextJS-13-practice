"use client";

import { useRouter } from "next/navigation";

export default function DetailLink({ to, text }: { to: string; text: string }) {
  const router = useRouter();

  function onClick() {
    router.push(to);
  }
  return <button onClick={() => onClick()}>{text}</button>;
}
