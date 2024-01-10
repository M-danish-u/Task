
import { IoMdMenu } from "react-icons/io";

const TopNavbar = () => {
  
  return (
    <div className='g-red-500  justify-between  px-2 md:px-14 h-20 flex items-center'>
<div className='flex flex-row items-center shadow-[0px 2000px 0px rgba(0,1,0,0)] gap-2 g-yellow-200'>
    <IoMdMenu className='text-3xl text-[#4486bdde]' />
<p className='text-2xl text-[#4486bdde]'>LOgo</p>
</div>
<p  className=' g-slate-400 font-bold text-xl text-[#4486bdde]'>DASHBOARD</p>


<div className='g-green-500  flex flex-row gap-4 items-center '>
    <img className='w-12 h-12 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSATJ-tPhLma-Qsw-UA2N0LlzsaZwQxrC_cg&usqp=CAU'/>
</div>
    </div>
  )
}

export default TopNavbar