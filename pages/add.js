import React, { useState, useRef, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});


const Example = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');
  const [title,setTitle]=useState('')
  const handleTitle=(e)=>{
   setTitle (title=> e.target.value)
  }
  const handleClick=()=>{
    console.log('click');
    fetch('api/create', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
  	title:title,
    content:content
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
  .catch((err) => console.log(err));

  }
  useEffect(()=>{

  },[content])

	const config = {
			readonly: false, // all options from https://xdsoft.net/jodit/doc/,
			placeholder: placeholder || 'Start typings...'
		};

	return (
    <>
{/* <div dangerouslySetInnerHTML={{__html:content}}>
  
</div> */}
<div className='flex '>

<div class='my-16 mx-10 '>
     
     <Link href='/'>
      <button class="block bg-[#E9E9E9] hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-2xl">
  <Image width={50} height={60} className=""  alt='home' src={'/home.svg'}></Image>
</button>

      <button onClick={handleClick} class="block mt-4 bg-[#E9E9E9] hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-2xl">
  <Image width={50} height={60} className=""  alt='home' src={'/save.svg'}></Image>
</button>
</Link>

    </div>

<div className='m-16 w-full'>
  <div className='flex items-center justify-center'>

  <input className='font-bold text-center text-[40px] p-2 mb-4' placeholder='New Blog' type='text' value={title} onChange={handleTitle}></input>
  </div>
    <JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={""}
		/>
    </div>
    </div>
     </>
	);
};

export default Example;