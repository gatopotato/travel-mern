// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Navbar,FloatingLabel} from "flowbite-react";
// function Header() {
//   return (
//     <div>
//         <Navbar className='border '>
//             <div className='w-full grid grid-cols-4 gap-1'>
//                 <div className='flex justify-center'>
//                     <Link to='/' className='self-center whitespace-nowrap text-2xl  font-semibold dark:text-white'>
//                     <span className='px-2 bg-gradient-to-r from-indigo-400 via-purple to-pink-400 rounded-lg text-white '>
//                     Pranav's 
//                     </span>
//                     Blogs
//                     </Link>
//                 </div>
//                 <div >
//                     <div className='w-52'>
//                         <form className='hidden lg:inline' >
//                             <FloatingLabel variant="outlined" label="Search" />
//                         </form>
                        

//                     </div>
                    
//                 </div>
//                 <div className='flex justify-center'>
//                     <div className='grid grid-cols-3 w-52'>
//                         <div className=' flex items-center justify-center' >
//                             <Link to='/'>Home</Link>
//                         </div>
//                         <div className=' flex items-center justify-center'>
//                         <Link to='/about'>About</Link>
//                         </div>
//                         <div className=' flex items-center justify-center'>
//                             <Link to='/projects'>Projects</Link>
//                         </div>
//                     </div>

//                 </div>
                
//                 <div className=' relative'>
//                     <div className='flex absolute right-3 top-2'>
//                         <h1 className='border border-solid rounded-3xl w-4 px-8 py-2'>hi</h1>
//                         <h1 className='border border-solid rounded-full w-4 px-6 py-2'>hi</h1>
//                     </div>

//                 </div>
                
//             </div>
            

//         </Navbar>

      
//     </div>
//   )
// }

// export default Header


import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, FloatingLabel } from "flowbite-react";
import { useSelector} from 'react-redux';
import { Button } from "flowbite-react";
import { Dropdown,Avatar } from "flowbite-react";
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
function Header() {
    const {currentUser} = useSelector((state)=>state.user);
    const {theme} = useSelector((state)=>state.theme);
    const dispatch = useDispatch();

  return (
    <div>
      <Navbar className='border-b-2 shadow-md bg-white'>
        <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-2'>
          
          <div className='flex justify-center md:justify-start'>
            <Link to='/' className='self-center whitespace-nowrap text-2xl font-semibold text-gray-800'>
              <span className='px-2 bg-gradient-to-r from-indigo-400 via-purple to-pink-400 rounded-lg text-white'>
                Pranav's 
              </span>
              Blogs
            </Link>
          </div>
          
          <div className='hidden md:flex justify-center'>
            <div className='w-full max-w-sm'>
              <form>
                <FloatingLabel variant="outlined" label="Search" />
              </form>
            </div>
          </div>
          
          <div className='flex justify-center md:justify-center'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='flex items-center justify-center'>
                <Link to='/' className='text-gray-700 hover:text-indigo-500'>Home</Link>
              </div>
              <div className='flex items-center justify-center'>
                <Link to='/about' className='text-gray-700 hover:text-indigo-500'>About</Link>
              </div>
              <div className='flex items-center justify-center'>
                <Link to='/projects' className='text-gray-700 hover:text-indigo-500'>Projects</Link>
              </div>
            </div>
          </div>
          
          <div className='flex justify-center md:justify-end items-center'>
            <div className='flex space-x-4'>
                {currentUser ? (
                    <div className='flex items-center space-x-4'>
                      <h1
                            className='inline-block border border-solid rounded-full px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white transition duration-200 cursor-pointer'
                            onClick={() => dispatch(toggleTheme())}>
                                {theme === 'light' ? (<CiSun />) : (<FaRegMoon />)}
                            
                        </h1>
                        <Dropdown 
                        inline
                        label={
                            <Avatar img={currentUser.message.profilePicture} rounded bordered />
                        } 
                        arrowIcon={false}
                        
                        dismissOnClick={false}>
                            <Dropdown.Header>
                                <h1>{currentUser.message.name}</h1>
                                <p>{currentUser.message.email}</p>
                            </Dropdown.Header>
                            <Link to='/dashboard?tab=profile'>
                                <Dropdown.Item>Profile</Dropdown.Item>
                            </Link>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
  
                        

                    </div>
                    
                ) : (
                    <div className='flex items-center space-x-4'>
                        <h1
                            className='inline-block border border-solid rounded-full px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white transition duration-200 cursor-pointer'
                            onClick={() => dispatch(toggleTheme())}>
                                {theme === 'light' ? (<CiSun />) : (<FaRegMoon />)}
                            
                        </h1>
                        <h1 className='inline-block border border-solid rounded-full px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white transition duration-200 cursor-pointer'>
                            Signup
                        </h1>
                    </div>

                    
                )}
  
              
            </div>
          </div>
          
        </div>
      </Navbar>
    </div>
  )
}

export default Header
