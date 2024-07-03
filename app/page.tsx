import Image from "next/image";
import TldrawPage from "./tldraw/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TldrawPage />
    </main>
  );
}
