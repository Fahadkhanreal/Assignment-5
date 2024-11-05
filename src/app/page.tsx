import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen   ">
      <Header />
      <div className="flex h-[80%]  ">
        <div className="w-[50%] flex flex-col justify-center items-start m-28 ">
          <h1 className="font-bold text-[40px] w-[496] ">
            IMPECCABLE CFARTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[30px] text-[#787054] font-medium w-[902] ">
            An example of intricate workmanship and detail,elegant necklaces and
            long and short chains from a part of our desirable collection.
          </p>
          <button className="w-[288] mt-10 h-[58] bg-[#A29875] b rounded-[10px] text-[30px] text-[#ffff] font-medium">
            Explore Now
          </button>
        </div>

        <div className="w-[50%]  flex justify-center items-center ">
          <Image src={"/image/pic.png"} alt="logo" height={611} width={442} />
        </div>
      </div>
    </div>
  );
}
