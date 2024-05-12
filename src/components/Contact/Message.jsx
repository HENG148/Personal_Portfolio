import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
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

  function showAlert() {
    Swal.fire({
      title: 'Sent Success',
      text: 'Thank you for message',
      icon: 'success',
      confirmButtonText: 'Ok',
    })
  }

  const falseAlert = () => {
    Swal.fire({
      title: 'Sent Fail',
      icon: 'error',
      confirmButtonText: 'Check Again',
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
      showAlert();
    } else {
      falseAlert();
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
        <form ref={form} onSubmit={sendEmail}>
          <div className='flex items-baseline gap-[1.5rem]'>
            {/* <label className='text-[1.1rem] mr-3'>Name</label> */}
            <input
              className='input'
              placeholder='Name'
              type="text"
              name="user_name"
              data-aos="fade-right"
            />
            <p className='text-[1.5rem]'>&</p>
            {/* <label className='text-[1.1rem] mr-3'>Email</label> */}
            <input
              className='input'
              placeholder='Email'
              type="email"
              name="user_email"
              data-aos="fade-left"
            />
          </div>
          <div className='mt-5'>
            {/* <label className='text-[1.1rem] mr-3'>Message</label> */}
            <textarea
              className='input-e pt-3 pl-2'
              placeholder='Message Me'
              name="message"
              data-aos="fade-up"
              onChange={handleMessageChange}
            />
          </div>
          <input data-aos="fade-up"
            disabled={!canSendMessage}
            className='s cursor-pointer'
            onClick={sendMessage}
            // onClick={showAlert} type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </>
  )
}
