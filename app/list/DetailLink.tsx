"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink({ to }: { to: string }) {
  const router = useRouter();

  function onClick() {
    router.push(to);
  }
  return <button onClick={() => onClick()}>이동</button>;
}
