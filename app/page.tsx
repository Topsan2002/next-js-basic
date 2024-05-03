"use client"

import { IUser } from '@/types/IUser'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const page = (props: Props) => {

  const [data, setData] = useState<IUser[]>([])



  useEffect(() => {
    getData()
    return () => {
    }
  }, [])
  

  const getData =   async () =>{
    const response = await axios.get<IUser[]>('https://663489949bb0df2359a1ce09.mockapi.io/api/v1/users');
    console.log(response.data);
    setData(response.data)
  }
  

  return (
    <>
      <div  className='text-center' >Page</div>
      <table>
        <thead>
          <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone number </th>
                <th>Email Address</th>
                <th>Action</th>
          </tr>
        </thead>
          <tbody>
            {
              data?.map((e)=>(
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.first_name}</td>
                  <td>{e.last_name}</td>
                  <td>{e.phone_number}</td>
                  <td>{e.email}</td>
                  <td>
                    <Link href={`/${e.id}`}>
                      Detail
                    </Link>
                  </td>
                </tr>
              ))
            }
            <tr>

            </tr>
           
          </tbody>   
      </table>
    </>
    
  )
}

export default page