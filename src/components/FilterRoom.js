import React, { Component } from "react"

import "./FilterRoom.css"

import calendar_icon from "../assets/images/calendar-icon.svg"
import polygon_icon from "../assets/images/polygon.svg"
import check_icon from "../assets/images/check.svg"


class FilterButton extends Component {
  constructor(props) {
    super(props)

    const { ruleType, ruleValue, changeRules } = this.props
    this.ruleType = ruleType
    this.ruleValue = ruleValue
    this.changeRules = changeRules
  }
  
  render() {
    return (
      <button className={ `filter__btn ${this.props.stateOfMain[this.ruleType] === this.ruleValue ? 'active' : ''}` } onClick={() => this.changeRules(this.ruleType, this.ruleValue)}>{this.props.content}</button>
    )
  }
}

class FilterChecked extends Component {
  changeAmenity(value) {
    this.props.changeRules('amenities', value)
  }

  render() {
    return (
      <div 
        className={ `filter__amenity ${this.props.stateOfMain.filterAmenities.includes(this.props.content) ? 'active' : ''}` } 
        onClick={(e) => {
          this.changeAmenity(this.props.content)
        }}>
        <button>{this.props.content}</button>
        <div className="filter__amenity-icon">
          <img src={check_icon} alt="" />
        </div>
      </div>      
    )
  }
}

class FilterBudget extends Component {
  constructor(props) {
    super(props)

    this.changeBudget = this.changeBudget.bind(this)
  }

  changeBudget(e) {
    const ruleValue = parseInt(e.target.value)
    this.props.changeRules('budget', ruleValue)
  }

  render() {
    return (
      <div className="filter__budget">
        <p>Less than IDR. </p>
        <input type="text" onChange={this.changeBudget} />
      </div>      
    )
  }
}

class FilterRoom extends Component {
  render() {
    return (
      <div className="filter">
        <h3 className="filter__heading">Type of Rent</h3>
        <div className="filter__btns">
          <FilterButton content="Day" ruleType="filterRent" ruleValue="day" changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
          <FilterButton content="Month" ruleType="filterRent" ruleValue="month" changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
          <FilterButton content="Year" ruleType="filterRent" ruleValue="year" changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
        </div>
        <h3 className="filter__heading">Date</h3>
        <div className="filter__calendar">
          <div className="filter__calendar-icon">
            <img src={calendar_icon} alt="" />
          </div>
          <p>28 Match 2020</p>
          <div className="filter__polygon-icon">
            <img src={polygon_icon} alt="" />
          </div>
        </div>
        <h3 className="filter__heading">Property Room</h3>
        <small>Bedroom</small>
        <div className="filter__btns type-2">
          <FilterButton content="1" ruleType="filterBedroom" ruleValue={1} changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
          <FilterButton content="2" ruleType="filterBedroom" ruleValue={2} changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
          <FilterButton content="3" ruleType="filterBedroom" ruleValue={3} changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
          <FilterButton content="4" ruleType="filterBedroom" ruleValue={4} changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
          <FilterButton content="5+" ruleType="filterBedroom" ruleValue={5} changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
        </div>
        <small>Bathroom</small>
        <div className="filter__btns type-3">
          <FilterButton content="1" ruleType="filterBathroom" ruleValue={1} changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
          <FilterButton content="2" ruleType="filterBathroom" ruleValue={2} changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
          <FilterButton content="3" ruleType="filterBathroom" ruleValue={3} changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
          <FilterButton content="4" ruleType="filterBathroom" ruleValue={4} changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
          <FilterButton content="5+" ruleType="filterBathroom" ruleValue={5} changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
        </div>
        <h3 className="filter__heading">Amenities</h3>
        <FilterChecked content="Furnished" changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
        <FilterChecked content="Pet Allowed" changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
        <FilterChecked content="Shared Accomodation" changeRules={this.props.changeRules} stateOfMain={this.props.stateOfMain}/>
        <h3 className="filter__heading">Budget</h3>
        <FilterBudget changeRules={this.props.changeRules} />
        <div className="filter__apply">
          <button onClick={this.props.applyFilter}>Apply</button>
        </div>
      </div>
    )
  }
}

export default FilterRoom