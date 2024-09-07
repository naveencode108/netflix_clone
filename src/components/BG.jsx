import {IoIosArrowForward} from 'react-icons/io'
import bgImage from '/bg.jpg'
const BG = () => {
  return (
    <div className='relative h-[550px] md:h-[100vh] overflow-hidden'>
        <img src={bgImage} alt="" className='object-cover h-full w-full scale-125 object-left md:object-bottom'/>
         <div className='Image w-full h-full absolute top-0 left-0'></div>
         {/*bg-black/70*/}
         <div className='absolute top-0 flex flex-col justify-center text-white items-center  w-full h-full gap-5'>
            {/* part1 */}
             <div className=' max-w-[800px] text-center md:mb-0 px-2 box-border mt-[50px] md:mt-0'>
                <h1 className='box-border mx-auto w-[80%] md:w-fit  md:px-1 text-3xl md:text-5xl font-bold  md:leading-[70px] mb-4 pt-4'>The biggest Indian hits. Ready to watch here from ₹ 149.</h1>
                <h1 className='md:text-2xl'>Join today. Cancel anytime.</h1>
             </div>
                 {/* part2 */}

             <div className=' max-w-[800px] md:px-2 px-[40px] text-center box-border'>
                 <h1 className='font-semibold md:text-xl'>Ready to watch? Enter your email to create or restart your membership.</h1>
                 <div className='flex flex-col md:flex-row justify-center items-center gap-2 mt-3 px-3'>
                    <input className='bg-transparent rounded px-3 border w-full md:w-[60%] h-[50px]' type="text"  placeholder='Email address'/>
                    
                    <button className='md:w-[30%]  md:text-2xl w-fit h-fit BgButton rounded'>
                       <div className='flex items-center h-[50px] justify-around'>
                        GetStarted
                        <IoIosArrowForward/>
                       </div>
                    </button>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default BG