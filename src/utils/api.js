const baseURL = 'http://localhost:5500'

export const getdata = async ()=> {
const response = await fetch(`${baseURL}/auth/get`);
return await response.json();
} 

export const postdata = async (props) =>{
   const response = await fetch(`${baseURL}/auth/Adminlogin`, {
    method:'POST',
    headers:{
        'Content-Type': 'application/json',
    },
    body:JSON.stringify(props)
   })
   return await response.json()
} 

