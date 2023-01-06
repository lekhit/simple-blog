import Link from "next/link"
import Image from "next/image"
export default function Home(){
  return <>
  <div className="flex ">
    <div class=' left-8 p-5 pl-10'>
     
     <Link href='/'>
      <button class=" bg-[#E9E9E9] hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-2xl">
  <Image width={50} height={60} className=""  alt='home' src={'/home.svg'}></Image>
</button>
</Link>

    </div>
    <div className="px-24 w-full  py-5 "> 
  <div id='title' className="  flex justify-center items-center text-[40px]">Title</div>
  <div id='content' className="flex justify-center items-center"> COntent </div>
  </div>
  </div>
  </>
}