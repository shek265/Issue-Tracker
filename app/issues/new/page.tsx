'use client';
import { Button, Callout, TextField } from '@radix-ui/themes';
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import {useForm, Controller} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import {MdError} from 'react-icons/md'

const SimpleMDE = dynamic(
  ()=> import('react-simplemde-editor'),
  {
    ssr:false
  }
)
interface IssueForm{
title: string,
description: string
}

const NewIssuePage = () => {
  const [error,setError] = useState('');
  const router = useRouter();
  const { register,control,handleSubmit } = useForm<IssueForm>();
  return (
    <div className='max-w-xl'>
      {error &&
      <Callout.Root color='red' className='mb-5'>
        <Callout.Icon>
		      <MdError />
	      </Callout.Icon>
        <Callout.Text>
          {error}
        </Callout.Text>
      </Callout.Root> 
      }
    <form className='space-y-3 ' onSubmit={handleSubmit(async (data)=> {
      try{
         await axios.post('/api/issues',data);
         router.push('/issues')
      }
      catch(error){
        setError('An Unexpected error occured');
      }
     
      
    })}>
        <TextField.Root placeholder='Title' {...register('title')} />
        <Controller
        name='description'
        control={control}
        render={({field})=> <SimpleMDE placeholder='Description' {...field} />}
         />
        
        <Button>Submit New Issue</Button>
    </form>
    </div>
  )
}

export default NewIssuePage