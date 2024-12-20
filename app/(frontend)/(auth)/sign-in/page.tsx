'use client';

import { Button } from "@/components/ui/button";
import {  signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import * as z from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";



const formSchema = z.object({
  email:z.string().min(1, 'Email is required').email('Invalid email'),
  password:z.string().min(1, 'Password is required').min(6, 'Password must have than 6 characters')
})

const SigninPage =  () => {

  const router = useRouter();

  const [loginErr, setLoginErr] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      email:'',
      password:''
    }
  }) 

  const onSignin = async (values:z.infer<typeof formSchema>)=>{
    
    const signinData = await signIn("credentials", {
      email:values.email,
      password:values.password,
      redirect:false
    });


    if(signinData?.error){
      setLoginErr(!loginErr)
      console.log("Oops! Somthing went wrong!");

    }else{
      setLoginErr(false);
      // router.refresh()
      router.push('/');
    }
  }

  return (
    <div>

      <div className="p-5 border rounded-md flex justify-center m-10">
          {loginErr&&(<span>Invalid credentials</span>)}
          <div className="w-72">
              <Form {...form}>
                <form onSubmit={ form.handleSubmit(onSignin)}>
                  <FormField control={form.control} name="email" render={({field})=>(
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                   <FormField control={form.control} name="password" render={({field})=>(
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}/>
                  <Button type="submit">Login</Button>
                </form>
              </Form>
            
          </div>
      </div>
    
     </div>
  );
};

export default SigninPage;
