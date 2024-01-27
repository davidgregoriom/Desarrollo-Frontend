import Image from "next/image";
import RootLayout from "./layout";

export default function Home() {
  return (
    <main>
      <RootLayout children={undefined}></RootLayout>
      <Dashboard />
      <div></div>
    </main>
  );
}
