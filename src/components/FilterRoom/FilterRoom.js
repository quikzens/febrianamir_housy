import React from 'react'

import './FilterRoom.css'

// import calendar_icon from '../../assets/images/calendar-icon.svg'
// import polygon_icon from '../../assets/images/polygon.svg'
import check_icon from '../../assets/images/check.svg'

function FilterButton(props) {
  const { ruleType, ruleValue, updateFilter, filter, content } = props

  return (
    <button
      className={`filter__btn ${
        filter[ruleType] === ruleValue ? 'active' : ''
      }`}
      onClick={() => updateFilter(ruleType, ruleValue)}
    >
      {content}
    </button>
  )
}

function FilterAmenity(props) {
  const { filter, updateFilter, content } = props

  return (
    <div
      className={`filter__amenity ${
        filter.amenities.includes(content) ? 'active' : ''
      }`}
      onClick={(e) => {
        updateFilter('amenities', content)
      }}
    >
      <button>{content}</button>
      <div className='filter__amenity-icon'>
        <img src={check_icon} alt='' />
      </div>
    </div>
  )
}

function FilterBudget(props) {
  const { updateFilter } = props

  const changeBudget = (e) => {
    const ruleValue = parseInt(e.target.value)
    updateFilter('budget', ruleValue)
  }

  return (
    <div className='filter__budget'>
      <p>Less than IDR. </p>
      <input type='text' onChange={changeBudget} />
    </div>
  )
}

function FilterRoom(props) {
  const { filter, updateFilter, applyFilter } = props

  return (
    <div className='filter'>
      <h3 className='filter__heading'>Type of Rent</h3>
      <div className='filter__btns'>
        <FilterButton
          content='Day'
          ruleType='rent'
          ruleValue='day'
          updateFilter={updateFilter}
          filter={filter}
        />
        <FilterButton
          content='Month'
          ruleType='rent'
          ruleValue='month'
          updateFilter={updateFilter}
          filter={filter}
        />
        <FilterButton
          content='Year'
          ruleType='rent'
          ruleValue='year'
          updateFilter={updateFilter}
          filter={filter}
        />
      </div>
      {/* <h3 className='filter__heading'>Date</h3>
      <div className='filter__calendar'>
        <div className='filter__calendar-icon'>
          <img src={calendar_icon} alt='' />
        </div>
        <p>28 Match 2020</p>
        <div className='filter__polygon-icon'>
          <img src={polygon_icon} alt='' />
        </div>
      </div> */}
      <h3 className='filter__heading'>Property Room</h3>
      <small>Bedroom</small>
      <div className='filter__btns type-2'>
        <FilterButton
          content='1'
          ruleType='bedroom'
          ruleValue={1}
          updateFilter={updateFilter}
          filter={filter}
        />
        <FilterButton
          content='2'
          ruleType='bedroom'
          ruleValue={2}
          updateFilter={updateFilter}
          filter={filter}
        />
        <FilterButton
          content='3'
          ruleType='bedroom'
          ruleValue={3}
          updateFilter={updateFilter}
          filter={filter}
        />
        <FilterButton
          content='4'
          ruleType='bedroom'
          ruleValue={4}
          updateFilter={updateFilter}
          filter={filter}
        />
        <FilterButton
          content='5'
          ruleType='bedroom'
          ruleValue={5}
          updateFilter={updateFilter}
          filter={filter}
        />
      </div>
      <small>Bathroom</small>
      <div className='filter__btns type-3'>
        <FilterButton
          content='1'
          ruleType='bathroom'
          ruleValue={1}
          updateFilter={updateFilter}
          filter={filter}
        />
        <FilterButton
          content='2'
          ruleType='bathroom'
          ruleValue={2}
          updateFilter={updateFilter}
          filter={filter}
        />
        <FilterButton
          content='3'
          ruleType='bathroom'
          ruleValue={3}
          updateFilter={updateFilter}
          filter={filter}
        />
        <FilterButton
          content='4'
          ruleType='bathroom'
          ruleValue={4}
          updateFilter={updateFilter}
          filter={filter}
        />
        <FilterButton
          content='5'
          ruleType='bathroom'
          ruleValue={5}
          updateFilter={updateFilter}
          filter={filter}
        />
      </div>
      <h3 className='filter__heading'>Amenities</h3>
      <FilterAmenity
        content='Furnished'
        updateFilter={updateFilter}
        filter={filter}
      />
      <FilterAmenity
        content='Pet Allowed'
        updateFilter={updateFilter}
        filter={filter}
      />
      <FilterAmenity
        content='Shared Accomodation'
        updateFilter={updateFilter}
        filter={filter}
      />
      <h3 className='filter__heading'>Budget</h3>
      <FilterBudget updateFilter={updateFilter} />
      <div className='filter__apply'>
        <button onClick={applyFilter}>Apply</button>
      </div>
    </div>
  )
}

export default FilterRoom
