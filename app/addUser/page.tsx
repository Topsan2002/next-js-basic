
"use client"
import { IUser } from '@/types/IUser'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

const addUser = (props: Props) => {
    const router = useRouter()
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [phoneNumber, setPhoneNumber] = useState<string>()
    const [email, setEmail] = useState<string>()
   const handleAdd = async(e: React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        const data : IUser = {
            first_name: firstName!,
            last_name:lastName!,
            phone_number: phoneNumber!,
            email:email!
        }
        const response = await axios.post(`https://663489949bb0df2359a1ce09.mockapi.io/api/v1/users`,data)
        if(response.status === 201){
            alert("Add Success Full")
            router.push("/")
        }else{
            alert("Fail to Add Data")
        }

   }
  return (
    <>
    <form>
        <label>  First Name</label>
        <input type="text" name='first_name' required onChange={(e)=>{setFirstName(e.target.value)}} />
        <br />
        <label>  Last Name</label>
        <input type="text" name='first_name' required onChange={(e)=>{setLastName(e.target.value)}} />
        <br />
        <label>  Phone Name</label>
        <input type="text" name='first_name' required onChange={(e)=>{setPhoneNumber(e.target.value)}} />
        <br />
        <label>  Email </label>
        <input type="email" name='first_name' required onChange={(e)=>{setEmail(e.target.value)}} />
        <br />
        <button type="submit"  onClick={handleAdd}>Add</button>
    </form>
    </>
  )
}

export default addUser