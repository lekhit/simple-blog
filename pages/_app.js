import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
     <nav className='text-[48px] font-bold  pl-10 flex items-center h-[143px] text-3xl bg-[#E9E9E9]'> Eqaim Blog</nav>
      
    <Component {...pageProps} /></div>
}
