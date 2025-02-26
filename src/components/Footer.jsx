
import {  FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import footerLogo from '../assets/footer-logo.svg'


const Footer = () => {
  return (
    <div className="py-12 bg-gray-100 px-8">

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">


            <div className='space-y-6 mr-14 '>
                <div className='flex items-center space-x-2'>
                    <img src={footerLogo} alt=""className='w-32 h-auto'/>
                </div>
                <p className=' text-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, dolor Lorem ipsum dolor sit amet consectetur adipi.</p>

                <div className='flex spacex-4'>

                    <a href="#" className='bg-gray-200 text-green-600 rounded-full size-10 flex items-center justify-center hover:bg-green-400 hover:text-white'>
                        <FaFacebookF className='text-xl'/>
                    </a>

                    <a href="#" className='bg-gray-200 text-green-600 rounded-full size-10 flex items-center justify-center hover:bg-green-400 hover:text-white'>
                        <FaTwitter className='text-xl'/>
                    </a>

                    <a href="#" className='bg-gray-200 text-green-600 rounded-full size-10 flex items-center justify-center hover:bg-green-400 hover:text-white'>
                        <FaInstagram className='text-xl'/>
                    </a>

                    <a href="#" className='bg-gray-200 text-green-600 rounded-full size-10 flex items-center justify-center hover:bg-green-400 hover:text-white'>
                        <FaLinkedinIn className='text-xl'/>
                    </a>


                </div>
            </div>

            <div  className='space-y-6 '>
                <h3 className='text-xl font-semibold mb-4 '>Quick Links </h3>
                <ul>
                    <li>
                        <a href="#home" className='hover:underline text-gray-600'>Home</a>
                        <li>
                        <a href="#About" className='hover:underline text-gray-600'>About Us</a></li>
                        <li>
                        <a href="#services" className='hover:underline text-gray-600'>Services</a>
                        </li>

                        <li>
                        <a href="#contact" className='hover:underline text-gray-600'>Contact Us</a>
                        </li>
                    </li>
                </ul>

            </div>

            <div  className='space-y-6 '>
                <h3 className='text-xl font-semibold mb-4 '>Supports</h3>
                <ul>
                    <li>
                        <a href="#" className='hover:underline text-gray-600'>FAQ</a>
                        <li>
                        <a href="#" className='hover:underline text-gray-600'>Terms of services</a></li>
                        <li>
                        <a href="#" className='hover:underline text-gray-600'>Privacy Policy</a>
                        </li>

                        <li>
                        <a href="#" className='hover:underline text-gray-600'>Support Center</a>    
                        </li>
                    </li>
                </ul>

            </div>


            <div  className='space-y-6 '>
                <h3 className='text-xl font-semibold mb-4 '>Contact Info</h3>
                <ul>
                    <li className='flex  items-center gap-2'>
                        <FaMapMarkedAlt className='text-green-500'/>
                        <p className='text-gray-700'>123 street,city,country</p>
                       
                        </li>

                        <li className='flex  items-center gap-2'>
                        <FaPhoneAlt className='text-green-500'/>
                        <p className='text-gray-700'>+123  456 7890</p>
                       
                        </li>

                        <li className='flex  items-center gap-2'>
                            
                        <FaEnvelope className='text-green-500'/>

                        <p className='text-gray-700'>info@mindleap.com</p>
                       
                        </li>

                      
                </ul>

            </div>

        </div>
    </div>
  )
}

export default Footer
