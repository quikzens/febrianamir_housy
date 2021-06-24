import React, { Component } from "react"
import Header from "../components/Header"
import FilterRoom from "./FilterRoom"
import ListRoom from "./ListRoom"

import "./Main.css"


class mySet {
  constructor(items) {
    // the collection will hold the set
    this.collection = []

    items.forEach(item => {
      this.add(item)
    })
  }

  // this method will check for the presence of an element and return true or false
  has(element) {
    return (this.collection.indexOf(element) !== -1)
  }

  // this method will return all the values in the set
  values() {
    return this.collection
  }

  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element)
      return true
    }
    return false
  }

  // this method will remove an item from a set
  remove(element) {
    if (this.has(element)) {
      const index = this.collection.indexOf(element)
      this.collection.splice(index, 1)
      return true 
    }
    return false
  }

  // this method will return the size of the collection
  size() {
    return this.collection.length
  }

  // this method will return the union of two sets
  union(otherSet) {
    const unionSet = new mySet()
    const firstSet = this.values()
    const secondSet = otherSet.values()

    firstSet.forEach(e => {
      unionSet.add(e)
    })
    secondSet.forEach(e => {
      secondSet.add(e)
    })
    return unionSet
  }

  // this method will return the intersection of two sets as a new set
  intersection(otherSet) {
    const intersectionSet = new mySet()
    const firstSet = this.values()

    firstSet.forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e)
      }
    })
    return intersectionSet
  }

  // this method will return the defference of two sets as a new set
  difference(otherSet) {
    const differenceSet = new mySet()
    const firstSet = this.values()

    firstSet.forEach(e => {
      if (!otherSet.has(e)) {
        differenceSet.add(e)
      }
    })
    return differenceSet
  }

  // this method will test if the set is a subset of a different set
  subset(otherSet) {
    const firstSet = this.values()

    return firstSet.every(value => {
      return otherSet.has(value)
    })
  }
}


class Main extends Component {
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
      contents: this.props.roomList
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
    const unfilteredContent = this.props.roomList
    const filteredContent = []
    unfilteredContent.forEach(item => {
      let isAmenityPassed = false
      const itemAmenities = new mySet(item.amenities)
      const ruleAmenities = new mySet(this.state.filterAmenities)
      isAmenityPassed = ruleAmenities.subset(itemAmenities)
      if (item.rent === this.state.filterRent && item.bedroom === this.state.filterBedroom && item.bathroom === this.state.filterBathroom && item.price <= this.state.filterBudget && isAmenityPassed) {
        filteredContent.push(item)
      }
    })
    this.setState({
      contents: filteredContent
    })
  }

  applySearch(searchValue) {
    const contentBeforeSearch = this.props.roomList
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
      <React.Fragment>
        <Header applySearch={this.applySearch} />
        <main className="main">
          <FilterRoom changeRules={this.changeRules} list={this.state.contents} applyFilter={this.applyFilter} stateOfMain={this.state} />
          <ListRoom list={this.state.contents} />
        </main> 
      </React.Fragment>
    )
  }
}

export default Main