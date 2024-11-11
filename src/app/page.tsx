import Image from "next/image";
import GuestList from "./components/GuestList";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className="">
      <main className="">
      <Header/>
      <GuestList listItem={null}/>
      </main>
    </div>
  );
}
