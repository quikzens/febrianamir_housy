import React, { Component } from "react"

import "./ListRoom.css"


class ListRoom extends Component {  
  render() {
    return (
      <React.Fragment>
        <div className="list-room">
          {this.props.list.map((item, index) => (
            <div className="room" key={index}>
              <img className="room__image" src={item.image} alt="" />
              <div className="room__amenities">
                {item.amenities.map((amenity, index) => (
                  <div className="room__amenity" key={index}>
                    {amenity}
                  </div>
                ))}
              </div>
              <p className="room__price">Rp.{item.price.toString()} / {item.rent}</p>
              <p className="room__property">{item.bedroom} Beds, {item.bathroom} Baths, {item.area} sqft</p>
              <p className="room__address">{item.address}</p>
            </div>            
          ))}
        </div>
      </React.Fragment> 
    )
  }
}

export default ListRoom