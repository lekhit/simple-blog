import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function Home(){
  const [postData,setPost]=useState({});
  const router=useRouter();
  const getPost= ()=>{
    const {id}=router.query
  fetch(`/api/get_post?id=${id}`).then((d)=>d.json()).then((data)=>setPost(data))


  }
  useEffect(()=>{
getPost();
  })

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
  <div id='title' className="  flex justify-center items-center text-[40px]">{postData.title}</div>
 {/* <div dangerouslySetInnerHTML={{__html:content}}>
  
</div> */}
  <div id='content' className="mt-16 flex justify-center items-center"> 
  <div dangerouslySetInnerHTML={{__html:postData.content}}>

</div>
 
  </div>
  </div>
  </div>
  </>
}