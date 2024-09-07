import {RiTranslate2} from 'react-icons/ri'
const Nav = () => {
  return (
    <div className='flex gap-10 justify-between items-center py-5 mx-auto px-5 md:px-[90px] absolute top-0  w-full'>
        <div className='w-full md:w-fit'>
            <img src="/logo.png" alt="" className='md:w-[150px] w-[80px]'/>
        </div>
        <div className='relative flex justify-center items-center gap-1'>
             <RiTranslate2  className='text-white absolute left-1'/>
            <select className='border border-white sel text-white w-full py-1 px-8 md:mr-3  font-semibold rounded'>
                <option>English</option>
                <option>Hindi</option>
            </select>
            <button className='BgButton text-white px-3 py-1 rounded'>SignIn</button>
        </div>
    </div>
  )
}

export default Nav