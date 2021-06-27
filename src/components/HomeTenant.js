import React, { Component } from "react"
import Header from "./Header"
import FilterRoom from "./FilterRoom"
import ListRoom from "./ListRoom"

import mySet from "../library/mySet"
import "./HomeTenant.css"

import { homes } from '../data/homes'


class HomeTenant extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filterRent: 'year',
      filterBedroom: 3,
      filterBathroom: 2,
      filterAmenities: [
        'Furnished'
      ],
      filterBudget: 12000000,
      contents: homes
    }    

    this.changeRules = this.changeRules.bind(this)
    this.applyFilter = this.applyFilter.bind(this)
    this.applySearch = this.applySearch.bind(this)
  }

  changeRules(ruleType, ruleValue) {
    switch(ruleType) {
      case 'filterRent':
        this.setState({
          filterRent: ruleValue
        })
        break
      case 'filterBedroom':
        this.setState({
          filterBedroom: ruleValue
        })
        break
      case 'filterBathroom':
        this.setState({
          filterBathroom: ruleValue
        })
        break
      case 'amenities':
        const amenities = this.state.filterAmenities

        if (amenities.indexOf(ruleValue) >= 0) {
          amenities.splice(amenities.indexOf(ruleValue), 1)
        } else {
          amenities.push(ruleValue)
        }

        this.setState({
          filterAmenities: amenities
        })
        break
      case 'budget':
        this.setState({
          filterBudget: ruleValue
        })
        break
      default:
        break
    }
  }

  applyFilter() {
    const unfilteredContent = this.props.rooms
    const filteredContent = []

    unfilteredContent.forEach(item => {
      let isAmenityPassed = false
      const itemAmenities = new mySet(item.amenities)
      const ruleAmenities = new mySet(this.state.filterAmenities)
      isAmenityPassed = ruleAmenities.subset(itemAmenities)

      if (
        item.rent === this.state.filterRent && 
        item.bedroom === this.state.filterBedroom && 
        item.bathroom === this.state.filterBathroom && 
        item.price <= this.state.filterBudget && 
        isAmenityPassed
      ) {
        filteredContent.push(item)
      }
    })

    this.setState({
      contents: filteredContent
    })
  }

  applySearch(searchValue) {
    const contentBeforeSearch = this.props.rooms
    const contentAfterSearch = []
    contentBeforeSearch.forEach(item => {
      if (item.address.includes(searchValue)) {
        contentAfterSearch.push(item)
      }
    })
    this.setState({
      contents: contentAfterSearch
    })
  }

  render() {
    return (
      <>
        <Header 
          applySearch={this.applySearch} 
          handleLogOutOfApp={this.props.handleLogOutOfApp} 
          userState={this.props.userState} 
        />
        <main className="main">
          <FilterRoom 
            changeRules={this.changeRules} 
            list={this.state.contents} 
            applyFilter={this.applyFilter} 
            stateOfMain={this.state} 
          />
          <ListRoom list={this.state.contents} />
        </main> 
      </>
    )
  }
}

export default HomeTenant