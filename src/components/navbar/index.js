import { data } from "./links.js";

export default function Navbar() {
  return (
    <div className="fixed z-50 bg-[#242729] w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36 h-20">
      <div className="flex justify-between items-center text-white">
        <ul className=" md:flex">
          <div className="flex">    
        {data.map((link) =>{
          return(
            <li key={link.id} className="m-4 text-[20px] ">
              <a className="hover:underline" href={link.url} >
              {link.text}
              </a>
            </li>
          )
        })}
        </div>
        </ul>
      </div>
    </div>
  );
}
