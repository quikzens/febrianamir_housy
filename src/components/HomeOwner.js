import { useState } from 'react'

import HeaderWithoutSearch from '../components/HeaderWithoutSearch'
import DetailInvo from './Modal/DetailInvo'

import './HomeOwner.css'
import action_icon from '../assets/images/search-icon-2.svg'

const HomeOwner = () => {
  const [isModalShow, setModalShow] = useState(false)

  const toggleModal = () => setModalShow(!isModalShow)

  return (
    <>
      <HeaderWithoutSearch />
      <div class="home-owner">
        <h2 class="home-owner__heading">Incoming Transaction</h2>
        <table class="home-owner__table">
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Type of Rent</th>
            <th>Bukti Transfer</th>
            <th>Status Payment</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Febrian Amir</td>
            <td>Year</td>
            <td>bca.jpg</td>
            <td>Approve</td>
            <td>
              <img src={action_icon} alt="" onClick={toggleModal}/>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Febrian Amir</td>
            <td>Year</td>
            <td>bca.jpg</td>
            <td>Approve</td>
            <td>
              <img src={action_icon} alt="" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Febrian Amir</td>
            <td>Year</td>
            <td>bca.jpg</td>
            <td>Approve</td>
            <td>
              <img src={action_icon} alt="" />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Febrian Amir</td>
            <td>Year</td>
            <td>bca.jpg</td>
            <td>Approve</td>
            <td>
              <img src={action_icon} alt="" />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Febrian Amir</td>
            <td>Year</td>
            <td>bca.jpg</td>
            <td>Approve</td>
            <td>
              <img src={action_icon} alt="" />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Febrian Amir</td>
            <td>Year</td>
            <td>bca.jpg</td>
            <td>Approve</td>
            <td>
              <img src={action_icon} alt="" />
            </td>
          </tr>
        </table>
      </div>
      <DetailInvo 
        isModalShow={isModalShow}
        toggleModal={toggleModal}
      />
    </>
  )
}

export default HomeOwner