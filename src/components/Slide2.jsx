const Slide2 = ({Key,val1,val2}) => {
  return (
    <div className='w-full h-fit mt-2  bg-black text-white flex flex-col-reverse md:flex-row items-center py-[6%]'>
         {/* part-1 */}
        <div className='w-full md:w-[50%] h-fit flex items-center  justify-end'>
             <div className='w-full md:w-[70%] h-fit  relative'>
              {Key?(<img src="/mobile.jpg" alt=""  className='h-full w-full object-cover'/>)
             :(<img src="/child.png" alt=""  className='h-full w-full object-cover'/>)
               }
               
               <div className={Key?' bg-black border absolute left-[15%] right-[15%] bottom-4  mx-auto w-[60%] px-5 py-2  rounded-xl flex items-center justify-between gap-2':'hidden'}>
                  <img src="/boxshot.png" alt="" className='w-[20%] h-fit'/>
                     <p className='text-xs'>Stranger Things
                      <br />
                     <span className='text-blue-500 text-xs '>
                      Downloading...
                      </span> 
                     </p>
                     <div className='md:w-[20%] w-fit'>
                       <img src="/animation.gif" alt=""  />
                     </div>
               </div>
             </div>
        </div>
         
         {/* part-2 */}
        <div className='w-full md:w-[50%] h-fit flex items-center'>
              <div className='w-full md:w-[80%] h-fit text-center md:text-start px-3'>
                 <h1 className='text-3xl md:text-5xl font-bold mb-4 tracking-wide md:leading-[70px]'>{val1}</h1>
                 <h1 className='md:text-2xl'>{val2}</h1>
              </div>  
        </div>
    </div>
  )
}

export default Slide2