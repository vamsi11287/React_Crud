import axios from 'axios'
import { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
useEffect(() => {
    fetchUsers();
  }, [])

  const options = {headers:{Authorization:"Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04"}}

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://gorest.co.in/public/v2/users',options);
      setUsers(response.data)
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }
  const deloptions = {"method":"DELETE",headers:{Authorization:"Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04"}}
  const deleteData = (id) =>{
    // console.log(id)
    // const res = await axios.delete(`https://gorest.co.in/public/v2/users/${id}`,options);
    const res = fetch(`https://gorest.co.in/public/v2/users/${id}`,deloptions)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

  }

  // const updateoptions = {"method":"PUT",headers:{Authorization:"Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04",
  // body:JSON.stringify(userdata)}}
 const [updateuserdata,setUpdateuserdata] = useState({
  name:'',
  email:'',
  gender:'',
  status:''
 })

 const updateData = (user) =>{
  console.log(user)
 }


  return (
    <div>
    <h1>User List</h1>
      {users && users.map((user) => {
           const {id} = user
        return (
       
        <div key={user.id} className='d-flex flex-column align-items-center justify-center m-5 bg-primary  rounded p-3'>
          <p>{user.id}</p>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.gender}</p>
          <p>{user.status}</p>
         <div className=' d-flex gap-4 p-2 '> 
            <button className='btn btn-success' onClick={()=>updateData(user)} >Update</button>
            <button className='btn btn-danger' onClick={()=>deleteData(id)}>Delete</button>
          </div>
        </div>
        )
})}
        
    </div>
  )
}

export default Users