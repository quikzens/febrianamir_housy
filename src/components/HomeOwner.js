import { useState } from 'react'

import Header from '../components/Header'
import DetailInvo from './Modal/DetailInvo'

import './HomeOwner.css'
import action_icon from '../assets/images/search-icon-2.svg'

const HomeOwner = () => {
  const [isModalShow, setModalShow] = useState(false)

  const toggleModal = () => setModalShow(!isModalShow)

  return (
    <>
      <Header isWithSearch={false} />
      <div class='home-owner'>
        <h2 class='home-owner__heading'>Incoming Transaction</h2>
        <table class='home-owner__table'>
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
            <td className='approve'>Approve</td>
            <td>
              <img src={action_icon} alt='' onClick={toggleModal} />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Haris Rahman</td>
            <td>Year</td>
            <td>bca.jpg</td>
            <td className='approve'>Approve</td>
            <td>
              <img src={action_icon} alt='' />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Amin Subagiyo</td>
            <td>Month</td>
            <td>bca.jpg</td>
            <td className='cancel'>Cancel</td>
            <td>
              <img src={action_icon} alt='' />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Haris Astina</td>
            <td>Day</td>
            <td>bca.jpg</td>
            <td className='pending'>Pending</td>
            <td>
              <img src={action_icon} alt='' />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Aziz Oni On</td>
            <td>Month</td>
            <td>bi.jpg</td>
            <td className='pending'>Pending</td>
            <td>
              <img src={action_icon} alt='' />
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Sugeng No Pants</td>
            <td>Year</td>
            <td>bni.jpg</td>
            <td className='pending'>Pending</td>
            <td>
              <img src={action_icon} alt='' />
            </td>
          </tr>
        </table>
      </div>
      <DetailInvo isModalShow={isModalShow} toggleModal={toggleModal} />
    </>
  )
}

export default HomeOwner
