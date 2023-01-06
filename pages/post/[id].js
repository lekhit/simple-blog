import Link from "next/link"
import Image from "next/image"
const Posts=require( '../../Schema/postSchema');

import connectDb from '../../middleware/mongoose';
import { useState } from "react";


export default function Home({postData}){
  const [post,setPosts]=useState('');
  
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
  <div id='content' className="flex justify-center items-center"> postData.content </div>
  </div>
  </div>
  </>
}
const getAllPostIds=async ()=>{
 const client=await Posts.find({},{_id:1})
  return [ {
    params:{
      id:"63b7ee2ea03429a6f0a0344a"
    }},{
    params:{
      id:"63b7ee2ea03429a6f0a0344a"
    }}]
}
const getPostData=async (id)=>{
 
  const data=Posts.findById(id)

 return {
  ...data
 }

}

async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}