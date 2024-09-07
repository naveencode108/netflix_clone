
const Slide1 = ({val1,val2,Img,Vi,Key}) => {
  return (
    <div className='bg-black text-white w-full h-fit overflow-hidden mt-2 md:flex-row flex flex-col py-[5%] justify-center items-center'>
         {/*left*/}
         <div className='w-full md:w-[50%] h-fit flex justify-end items-center pt-[30px]'>
              <div className='w-full md:w-[75%] box-border text-center md:text-start'>
                 <h1 className='text-3xl md:text-5xl font-extrabold mb-3 md:leading-[80px]'>{val1}</h1>
                 <h1 className='md:text-2xl md:semibold md:leading-[30px] px-5 md:px-0'>
                   {val2}
                 </h1>
              </div>
         </div>
         {/* right */}
         <div className='w-full md:w-[50%] h-fit flex items-center justify-center md:justify-normal'>
             <div className='w-full md:w-[80%] relative'>
              
               <video className={Key?'absolute w-fit h-fit left-7 scale-[69%]':'absolute w-full h-full scale-75'} src={Vi} autoPlay muted loop></video>
             
                <img src={Img} alt="" className='w-full  h-full object-cover relative'/>
             </div>
         </div>
    </div>
  )
}

export default Slide1