const User = require('../models/User')
const axios = require('axios')

const getUsers = async(req, res)=>{
  try {
    const newUser = await User.find();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}


const getUser = async(req, res)=>{
  const {id} = req.params
  try {
    const newUser = await User.findById(id);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

const createUser =async(req, res)=>{
  const {name,email,gender,status} = req.body;
  try {
    const response = await axios.post('https://gorest.co.in/public-api/users',{name,email,gender,status})
    const newUser = new User(
      {
        name:response.data.name,
        email:response.data.email,
        gender:response.data.gender,
        status:response.data.status
      }
    );
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

const updateUser = async(req, res)=>{
  const {id} = req.params
  const user = req.body

  try {
    const response = await axios.patch(`https://gorest.co.in/public-api/users/${id}`,user)
    const newUser = await User.findByIdAndUpdate(id,
      {
        name:response.data.name,
        email:response.data.email,
        gender:response.data.gender,
        status:response.data.status
      }
      ,{new:true});
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

const deleteUser = async(req, res)=>{
  const {id} = req.params
  try {
    await axios.delete(`https://gorest.co.in/public-api/users/${id}`)
     await User.findByIdAndDelete(id);
     console.log("dataDeleted")
    res.status(201).json("data is Deleted");
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = { getUsers,updateUser,getUser,createUser,deleteUser }