'use client'

import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const page = (props: Props) => {


    const param = useParams<{id:string}>();
    const [dataById, setDataById] = useState<IUser | null>(null)

    const getDataById = async () => {
        const response  = await axios.get(`https://663489949bb0df2359a1ce09.mockapi.io/api/v1/users/${param.id}`)
        console.log(response.data);
        setDataById(response.data)    
    }

    useEffect(() => {
      getDataById()
      return () => {
      }
    }, [])
    
  return (
    <>
        <div className='m-10'>
            <h2>Deatail</h2>
            <label > Firt Name :  </label> {dataById?.first_name || "Loading..."} <br/>
            <label > Last Name :  </label> {dataById?.last_name || "Loading..."} <br/>
            <label > Phone  :  </label> {dataById?.phone_number || "Loading..."} <br/>
            <label > Email :  </label> {dataById?.email || "Loading..."} <br/>

        </div>
    </>
  )
}

export default page