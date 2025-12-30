import React, { useState } from 'react'
import './index.css'
import Card from './Components/Card'

const App = () => {
  const [userName, setUsername] = useState("")
  const [image_id, setImage] = useState("")
  const [role, setRole] = useState("")
  const [Desc, setDesc] = useState("");

  const [allUsers, setAllUsers] = useState([])
  const submitHandler =(e)=>{
    e.preventDefault();
    
    const oldUsers = [...allUsers];
    oldUsers.push({userName,image_id,role,Desc});
    setAllUsers(oldUsers);
    // console.log(oldUsers);
    
    
    setUsername('')
    setImage('');
    setRole('');
    setDesc('');
  }
  const deleteHandler = (idx)=>{
      const copyUsers = [...allUsers];
      copyUsers.splice(idx,1);
      setAllUsers(copyUsers);
  }

  return (
    <div className='h-screen bg-black text-white '>
        <form onSubmit = {(e)=>{
          submitHandler(e);
        }}
        className='flex gap-1 flex-wrap justify-center py-2 px-2 ' >
        <input 
        value={userName}
        onChange={(e)=>{
          setUsername(e.target.value);
        }}
        type="text" className='text-xl font-semibold border-2 px-6 py-3 rounded m-2 w-[45%]' placeholder='Enter your name' />
        <input 
          value = {image_id}
         onChange={(e)=>{
          setImage(e.target.value);
        }}
        type="text" className='text-xl font-semibold border-2 px-6 py-3 rounded m-2 w-[45%]' placeholder='Image URL' />
        <input 
            value={role}
           onChange={(e)=>{
          setRole(e.target.value);
        }}
        type="text" className='text-xl font-semibold border-2 px-6 py-3 rounded m-2 w-[45%]' placeholder='Enter role' />
        <input 
          value={Desc}
         onChange={(e)=>{
          setDesc(e.target.value);
        }}
        type="text" className='text-xl font-semibold border-2 px-6 py-3 rounded m-2 w-[45%]' placeholder='Enter Description' />
        <button className='px-5 py-2 text-xl active:scale-95 semibold cursor-pointer bg-emerald-700 rounded m-2 w-[92%]'>Create User</button>
      </form>
      <div className='flex gap-4 flex-wrap m-4 px-4 py-10'>
              {allUsers.map((elem,idx)=>{
                    return <div>
                              <Card idx = {idx} elem={elem} deleteHandler={deleteHandler}/>
                            </div>
              })}
      </div>
    </div>
  )
}

export default App