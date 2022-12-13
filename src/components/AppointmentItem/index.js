import {Component} from 'react'

import './index.css'

const AppointmentItem = props => {
  const {appointmentData, individualStarring} = props
  const {id, title, date, isStarred} = appointmentData

  const starringFunction = () => {
    individualStarring(id)
  }

  const starredImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-container">
      <div className="text-container">
        <h1 className="main-heading"> {title} </h1>
        <p className="date">{date}</p>
      </div>
      <button type="button" id="star">
        <img
          className="image-style"
          src={starredImageUrl}
          alt="star"
          onClick={starringFunction}
        />
      </button>
    </li>
  )
}

export default AppointmentItem
