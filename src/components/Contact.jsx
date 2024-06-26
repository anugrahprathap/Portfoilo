import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen,faEnvelopeOpenText,faLocationDot,faCalendarDays } from "@fortawesome/free-solid-svg-icons";
export const Contact = () => {
  return (
    <div className="contact">
          <div className="items">
            <div>
              <FontAwesomeIcon icon={faMobileScreen} className="icon" />
            </div>
            <div className="item">
              <p className="heading">Phone</p>
              <p className="details">+91 9495276168</p>
            </div>
          </div>
          <div className="items">
            <div>
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
            </div>
            <div className="item">
              <div className="heading">Email</div>
              <p className="details">anugrahprathap@gmail.com</p>
            </div>
          </div>

          <div className="items">
            <div>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            </div>
            <div className="item">
              <p className="heading">Location</p>
              <p className="details">Kannur, Kerala</p>
            </div>
          </div>

          <div className="items">
            <div>
            <FontAwesomeIcon icon={faCalendarDays} className="icon" />
            </div>
            <div className="item">
              <p className="heading">Birthday</p>
              <p className="details">March 08, 2000</p>
            </div>
          </div>
        </div>
  )
}
export default Contact;