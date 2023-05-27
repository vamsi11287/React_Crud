1.Login into the "https://gorest.co.in/" and get the "Api Token",
2.Test That api using POSTMAN by using the "TOKEN',And Do CRUD operations using POSTMAN 
3.After that Created a React app using -"npx create-react-app client" command
4.first Fetch the Users data using 'axios.get("url",getoptions)' request, use Bearer token to get the data 
{
      const getoptions = { headers: { Authorization: "Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04" } }
}
5.display the data in the fronted by using the require credentials like (id,name,email,gender,status)

6.Create a form for post data.And create onChange events and onSubmit event ,states (by default all the values is null)
7.create the post request using "fetch("url",postoptions)" ,use Bearer to Post data
{
    const postoptions = {
    "method": "POST",
    headers: {
      "Content-type": "Application/json",
      Authorization: "Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04"
    },
    body: JSON.stringify(userdata)
  }
}
8.create onSubmit event and give the Post request by using fetch 

9.Add update and delete buttons for Update and Delete Data
10.create a onClick funtion to delete button and pass the id values for Delete the data 
11.create that onClick funtion and add Fetch request for delete 
{
      const deloptions = { "method": "DELETE", headers: { Authorization: "Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04" } }
}
give fetch(`url/${id}`,deloptions)

12.Add update buttons for Fetched data and give onClick function to that button use {user} to access all data when onClick the button 
13.Create the Update data Form ,give onChange events,onSubmit ,newStates
14 give a Put method to the fetch request and access the hole data in update form when click update button ,use Bearer token
{
      const updateoptions = {
    "method": "PUT",
    headers: {
      "Content-type": "Application/json",
      Authorization: "Bearer d02602feb02df7378842bdafd08002c184caafc41c32833c66b6f10f3e11dc04"
    },
    body: JSON.stringify(userupdatedata)
  }
}

15.create the updateSubmit funtion and create a update request " fetch(`url/${id}`,updateoptions) and do changes when you want to updates click update in the form 

16.give the Ternary operator to display the Createform (or) updateForm

{user.id ? <createForm/> : <updateform/>}
