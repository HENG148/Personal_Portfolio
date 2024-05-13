import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
// import Alert from '@mui/material/Alert';

export default function MessageMe() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m8zsr5n',
        'template_pi8w4xy',
        form.current, {
        publicKey: 'h3EHXu8y8TQtUS_cQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    const sendValidEmail = () => {
      // e.preventDefault();
      
      console.log('sent email');

    emailjs
      .sendForm(
        'service_m8zsr5n',
        'template_pi8w4xy',
       form.current, {
        publicKey: 'h3EHXu8y8TQtUS_cQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    sendValidEmail()
  }

  function showAlert() {
    Swal.fire({
      title: 'Sent Success',
      text: 'Thank you for message',
      icon: 'success',
      confirmButtonText: 'Ok',
    })
  }

  return (
    <>
      <div className='message-me mt-8'>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-baseline gap-[1.5rem]'>
            <div className="flex flex-col">
              <input
                {...register('user_name', {
                  required: 'username is not empty',
                  minLength: 5
                })}
                className='input'
                placeholder='Name'
                type="text"
                data-aos="fade-right"
              />
              {errors.user_name && <span className='text-warning'>{errors.user_name.message}</span>}
            </div>
            <p className='text-[1.5rem]'>&</p>
            <div className="flex flex-col">
              <input
                {...register('user_email', {
                  required: true,
                  // pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ //regular expression
                  pattern: /^[\w-\.]+@(gmail+\.)+[\w-]{2,4}$/ // use only for gmail
                })}
                  className='input'
                  placeholder='Email'
                  type="email"
                  data-aos="fade-left"
              />
             {errors.user_email && <span className='text-warning'>email not correct ( Gmail only )</span>}            
            </div>
          </div>


          <div className='mt-5 flex flex-col'>
            <textarea
              {...register('message', {
                required: true
              })}
              className='input-e pt-3 pl-2'
              placeholder='Message Me'
              // name="message"
              data-aos="fade-up"
            />
             {errors.message && <span className='text-warning'>message is required!</span>}

          </div>
          <button
            data-aos="fade-up"
            className='s mt-2 cursor-pointer'
            type='submit'
          >Send Message</button>
        </form>
      </div>
    </>
  )
}
