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

  const [message, setMessage] = useState('');
  const [canSendMessage, setCanSendMessage] = useState(false);

  const handleMessageChange = (event) => {
    const { value } = event.target;
    setMessage(value);
    if (value.trim() !== '') {
      setCanSendMessage(true);
    } else {
      setCanSendMessage(false);
    }
  }

  const sendMessage = () => {
    if (canSendMessage) {
      console.log('Message sent:', message);
      setMessage('');
      setCanSendMessage(false);
    } else {
      showAlert();
    }
  };

  const showAlerts = () => {
    alert("You can't send an empty message!");
  }

      // <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      //   Here is a gentle confirmation that your action was successful.
      // </Alert>
  return (
    <>
      <div className='message-me mt-8'>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-baseline gap-[1.5rem]'>
            {/* <label className='text-[1.1rem] mr-3'>Name</label> */}
            <div className="flex flex-col">
              <input
              {...register('user_name', {
                required: 'username is not empty',
                minLength: 5
              })}
              className='input'
              placeholder='Name'
              type="text"
              // name="user_name"
              data-aos="fade-right"

            />
             {errors.user_name && <span className='text-warning'>{errors.user_name.message}</span>}
            </div>
            <p className='text-[1.5rem]'>&</p>
            {/* <label className='text-[1.1rem] mr-3'>Email</label> */}
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
            {/* <label className='text-[1.1rem] mr-3'>Message</label> */}
            <textarea
              {...register('message', {
                required: true
              })}
              className='input-e pt-3 pl-2'
              placeholder='Message Me'
              // name="message"
              data-aos="fade-up"

              // onChange={handleMessageChange}
            />
             {errors.message && <span className='text-warning'>message is required!</span>}

          </div>
          <button
            data-aos="fade-up"
            // disabled={!canSendMessage}
            className='s mt-2 cursor-pointer'
            // onClick={sendMessage}
            // onClick={showAlert} type="submit"
            // value="Send Message"
            type='submit'
            // onClick={showAlert}
          >Send</button>
        </form>
      </div>
    </>
  )
}
