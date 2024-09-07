import { IoMdAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import {IoIosArrowForward} from 'react-icons/io';
import Sc from './Sc';
const Slide3 = () => {
   
  return (
    <div className="w-full h-fit bg-black text-white mt-2  py-[50px] px-5">
      <div className="max-w-[850px] mx-auto text-center py-7">
        <h1 className="font-bold md:text-5xl text-3xl">Frequently Asked Questions</h1>
      </div>

      <div className="max-w-[1024px] h-fit mx-auto text-white flex flex-col gap-2 ">
          <Sc val1={"What is Netflix?"} val2={"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"}/>

          <Sc val1={"How much does Netflix cost"} val2={"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."}/>

          <Sc val1={"Where can I watch"} val2={"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."}/>

          <Sc val1={"How do I cancel"} val2={"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."}/>

          <Sc val1={"What can I watch on Netflix"} val2={"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."}/>

          <Sc val1={"Is Netflix good for kids"} val2={"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}/>
      </div>

      <div className=' max-w-[800px] md:px-2 px-[40px] text-center box-border mx-auto mt-10'>
                 <h1 className='font-bold md:text-xl'>Ready to watch? Enter your email to create or restart your membership.</h1>
                 <div className='flex flex-col md:flex-row justify-center items-center gap-2 mt-3 px-3'>
                    <input className='bg-transparent rounded px-3 border w-full md:w-[50%] h-[50px]' type="text"  placeholder='Email address'/>
                    
                    <button className='md:w-[25%]  md:text-2xl w-fit h-fit BgButton px-1 rounded'>
                       <div className='flex items-center h-[50px] justify-around'>
                        GetStarted
                        <IoIosArrowForward size={25}/>
                       </div>
                    </button>
                 </div>
             </div>
    </div>
  );
};

export default Slide3;
