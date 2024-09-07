import {RiTranslate2} from 'react-icons/ri'

const Slide4 = () => {
  return (
    <div className='w-full h-fit py-5 md:py-[60px] bg-black mt-2 text-white flex justify-center items-center'>
           <div className='max-w-[1024px] w-full px-5'>
             <p className='py-2'>Questions? Call 000-800-919-1694</p>
             <div className=' grid grid-cols-2  md:grid-cols-4 '>
                 <ul>
                 <li>FAQ</li>
                 <li>Investor Relations</li>
                 <li>Privacy</li>
                 <li>Speed Test</li>
                 </ul>
                 <ul>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                 </ul>
                 <ul>
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only on Netflix</li>
                 </ul>
                 <ul>
                    <li>Media Center</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                 </ul>
             </div>
              
             <div className='py-4 relative flex  items-center gap-1'>
             <RiTranslate2  className='text-white absolute left-1'/>
            <select className='border border-white  sel text-white w-fit py-1 px-8 md:mr-3  font-semibold rounded'>
                <option>English</option>
                <option>Hindi</option>
            </select>
            </div>
            <p>Netflix India</p>
           </div>
    </div>
  )
}

export default Slide4