import React from "react"
import Swal from "sweetalert2"

export default function Alert() {
  function showAlert() {
    Swal.fire({
      title: 'Sent Success',
      text: 'Thank You for Your Message',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }

  return (
    <>
      <button 
        onClick={showAlert}
      className="btn btn-info m-5">Alert!</button>
    </>
  )
}