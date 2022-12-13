import {Component} from 'react'

import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    id: uuidv4(),
    title: '',
    date: null,
    appointmentsList: [],
  }

  addNewList = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  titleInState = event => {
    this.setState({title: event.target.value})
  }

  updateDateDate = event => {
    const newDate = format(new Date(event.target.value), 'dd MMMM yyyy, EEEE')
    this.setState({date: newDate})
  }

  individualStarring = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(appointment => {
        if (appointment.id === id) {
          return {...appointment, isStarred: !appointment.isStarred}
        }
        return appointment
      }),
    }))
  }

  onlyStarredItems = () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(
        appointment => appointment.isStarred === true,
      ),
    }))
  }

  render() {
    const {appointmentsList} = this.state

    return (
      <div className="bg-container">
        <div className="appointment-card">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="form-image-container">
            <form className="form-container" onSubmit={this.addNewList}>
              <label className="label-style" htmlFor="title">
                Title
              </label>
              <input
                className="input-style"
                id="title"
                type="text"
                onChange={this.titleInState}
              />
              <label className="label-style" htmlFor="date-ele">
                Date
              </label>
              <input
                className="input-style"
                type="date"
                id="date-ele"
                onChange={this.updateDateDate}
              />
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
            <div>
              <img
                className="appoint-image"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="fixed-appointments-container">
            <h1>Appointments</h1>
            <button
              className="starred-button"
              type="button"
              onClick={this.onlyStarredItems}
            >
              Starred
            </button>
          </div>
          <ul className="appointment-items">
            {appointmentsList.map(appointment => (
              <AppointmentItem
                appointmentData={appointment}
                key={appointment.id}
                individualStarring={this.individualStarring}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
