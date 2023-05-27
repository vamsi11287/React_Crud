import axios from 'axios'
import React, { useState, useEffect } from 'react'

const CreateUser = () => {
  /////////////////////// get data////////////////////////
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, [])

  const getoptions = { headers: { Authorization: "Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04" } }

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://gorest.co.in/public/v2/users', getoptions);
      setUsers(response.data)
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }


  // //////////////////delete data//////////////////////

  const deloptions = { "method": "DELETE", headers: { Authorization: "Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04" } }
  const deleteData = (id) => {
    const res = fetch(`https://gorest.co.in/public/v2/users/${id}`, deloptions)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    fetchUsers()
  }


  // ////////////////////////post data/////////////////////////
  const [userdata, setUserdata] = useState({
    name: '',
    email: '',
    gender: '',
    status: ''
  })

  const { name, email } = userdata

  const postoptions = {
    "method": "POST",
    headers: {
      "Content-type": "Application/json",
      Authorization: "Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04"
    },
    body: JSON.stringify(userdata)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const res = fetch('https://gorest.co.in/public/v2/users', postoptions)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    setUserdata({
      name: '',
      email: '',
      gender: '',
      status: ''
    })
    fetchUsers()

  }


///////////////////////////////////update user/////////////////////////////
  const [userupdatedata, setUpdateuserdata] = useState({
    id: null,
    name: '',
    email: '',
    gender: '',
    status: ''
  })

  const updateoptions = {
    "method": "PUT",
    headers: {
      "Content-type": "Application/json",
      Authorization: "Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04"
    },
    body: JSON.stringify(userupdatedata)
  }

  const handleuppdateSubmit = (e) => {
    const {id,name,email,gender,status} = userupdatedata
    e.preventDefault()

    const res = fetch(`https://gorest.co.in/public/v2/users/${id}`, updateoptions)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    setUpdateuserdata({
    name: '',
    email: '',
    gender: '',
    status: ''
  })

  fetchUsers()

  }

  const updateData = (user) => {
    const { id, name, email, gender, status } = user
    setUpdateuserdata(
      {
        id: id,
        name: name,
        email: email,
        gender: gender,
        status: status
      }
    )
  }


  return (
    <div className='d-flex flex-column justify-center align-items-center bg-success rounded gap-2 p-4 m-5'>


      {userupdatedata.id ? 
      (      <div>
        <h1 className='m-3 p-2'>Update User</h1>
        <form className='d-flex flex-column gap-2' onSubmit={handleuppdateSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={userupdatedata.name}
            onChange={(e) => setUpdateuserdata({ ...userupdatedata, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={userupdatedata.email}
            onChange={(e) => setUpdateuserdata({ ...userupdatedata, name: e.target.value })} />
          <div>
            <input type='radio' name='gender'
              value="male" className='mx-1'
              onChange={(e) => setUpdateuserdata({ ...userupdatedata, gender: e.target.value })} />male
            <input type='radio' name='gender'
              value="female" className='mx-1'
              onChange={(e) => setUpdateuserdata({ ...userupdatedata, gender: e.target.value })} />female
          </div>

          <div>
            <input type='radio' name='status'
              value="active" className='mx-1'
              onChange={(e) => setUpdateuserdata({ ...userupdatedata, status: e.target.value })}
            />active
            <input type='radio' name='status'
              value="inactive" className='mx-1'
              onChange={(e) => setUpdateuserdata({ ...userupdatedata, status: e.target.value })} />inactive
          </div>

          <button type="submit">updateUser</button>
        </form>
      </div>):(
              <div className='m-3 p-2'>
              <h1 className='m-3 p-2'>Create User</h1>
              <form className='d-flex flex-column gap-2' onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
      
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
                />
                <div >
                  <input type='radio' name='gender'
                    value="male"
                    className='mx-1'
                    onChange={(e) => setUserdata({ ...userdata, gender: e.target.value })}
                  />male
                  <input type='radio' name='gender'
                    value="female"
                    className='mx-1'
                    onChange={(e) => setUserdata({ ...userdata, gender: e.target.value })}
                  />female
                </div>
      
                <div>
                  <input type='radio' name='status'
                    value="active"
                    className='mx-1'
                    onChange={(e) => setUserdata({ ...userdata, status: e.target.value })}
                  />active
                  <input type='radio' name='status'
                    value="inactive"
                    className='mx-1'
                    onChange={(e) => setUserdata({ ...userdata, status: e.target.value })}
                  />inactive
                </div>
      
                <button type="submit">Add User</button>
              </form>
            </div>
      )}



      <div >




        <h1>User List</h1>
        {users && users.map((user) => {
          const { id } = user
          return (

            <div key={user.id} className='d-flex flex-column align-items justify-center m-5 bg-primary  rounded p-3'>
              <h2 className='text-white text-decoration-underline'>{user.name}</h2>
              <p>id:{user.id}</p>
              <p>{user.email}</p>
              <p>{user.gender}</p>
              <p>{user.status}</p>
              <div className=' d-flex gap-4 p-2 '>
                <button className='btn btn-success' onClick={() => updateData(user)} >Update</button>
                <button className='btn btn-danger' onClick={() => deleteData(id)}>Delete</button>
              </div>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default CreateUser