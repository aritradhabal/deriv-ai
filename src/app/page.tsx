import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { NavBar } from "@/components/home/NavBar";
import { Charts } from "@/components/home/Charts";
import { Chats } from "@/components/home/Chats";

const currBalance = 10;
const prevBalance = 23;

export default function Home() {
  return (
    <div className="flex min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <div>
        <NavBar currBalance={currBalance} prevBalance={prevBalance} />
        <div className="px-5">
          <Separator orientation="horizontal" />
        </div>
        <div className="p-5 flex flex-row">
          <div className="flex-3">
            <Charts />
          </div>
          <div className="px-4">
            <Separator orientation="vertical" />
          </div>
          <div className="flex-1">
            <Chats />
          </div>
        </div>
      </div>
    </div>
  );
}
