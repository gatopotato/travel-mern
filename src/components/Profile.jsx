import React from 'react'
import { useSelector } from 'react-redux'
import { FloatingLabel } from "flowbite-react";
import { Button } from "flowbite-react";
function Profile() {
    const {currentUser} = useSelector((state)=>state.user);
    const [tempName, setTempName] = useState(currentUser.message.userName);
    const [tempEmail, setTempEmail] = useState(currentUser.message.email);
    const [tempPassword, setTempPassword] = useState(currentUser.message.password);
    console.log(currentUser.message)


    async function handleSubmit(){

        try{
            if(tempName === '' || tempEmail === '' || tempPassword === ''){
                alert('Please fill all fields');
                return;
            }
            const res = await axios.put('http://localhost:3000/user/update',{
                userName: tempName,
                email: tempEmail,
                password: tempPassword
            },{
                headers: {
                    'Content-Type': 'application/json',
                }
            })

        }
        catch(e){

        }

    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      <div className="relative w-full">
        <img
          className="w-full h-60 object-cover"
          src="https://imgs.search.brave.com/3uTuchM62yoShy1rb-Wk6HXqwEN4fJNE9nk4MkFLIW4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93cml0/ZXJzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMC9p/bWFnZXJ5LWluLXdy/aXRpbmctZTE2MzY0/ODQ5Mzc4NDkuanBn"
          alt="Background"
        />
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-white bg-teal-400 rounded-full">
          <img
            className="w-full h-full rounded-full"
            src={currentUser.message.profilePicture}
            alt="Profile"
          />
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 w-11/12 sm:w-80 mt-16">
        <h2 className="text-xl font-semibold text-gray-800 text-center">John Doe</h2>
        <p className="text-gray-600 text-center">Software Engineer</p>
        <div className="mt-4">
          <div className="flex items-center justify-center text-gray-600">
            <span>Email: johndoe@example.com</span>
          </div>
          <div className="flex items-center justify-center text-gray-600 mt-2">
            <span>Username: @johndoe</span>
          </div>
        </div>
        
      </div>
      <div className='w-1/2 mt-5'>
        <label htmlFor="userName"> UserName</label>
        <FloatingLabel 
        value={tempName}
        onChange={(e)=>{setTempName(e.target.value)}}
        className='bg-gray-400' name='userName' variant="outlined" label={tempName} />

      </div>

      <div className='w-1/2 mt-5'>
        <label htmlFor="Email"> Email</label>
        <FloatingLabel 
        value={tempEmail}
        onChange={(e)=>{setTempEmail(e.target.value)}}
        className='bg-gray-400' name='Email' variant="outlined" label={tempEmail} />
      </div>

      <div className='w-1/2 mt-5'>
        <label htmlFor="password"> Password</label>
        <FloatingLabel 
        value={tempPassword}
        onChange={(e)=>{setTempPassword(e.target.value)}}
        className='bg-gray-400' name='password' variant="outlined" label={tempEmail} />
      </div>

      <Button color="dark" onClick={()=>{handleSubmit()}}>Update</Button>
      
    </div>
  )
}

export default Profile
