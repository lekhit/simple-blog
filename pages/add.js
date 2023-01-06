import React, { useState, useRef, useMemo, useEffect } from 'react';

import dynamic from 'next/dynamic';

const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
    ssr: false,
});


const Example = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('<p>sdg</p><p>fdsg</p>');
  const [title,setTitle]=useState('')
  const handleTitle=(e)=>{
   setTitle (title=> e.target.value)
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
<div className=''>
<div className='absoulte right-5 '>
  <div>button</div>
</div>
<div className='m-16'>
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