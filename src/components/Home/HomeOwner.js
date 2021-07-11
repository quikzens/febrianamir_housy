import { useEffect, useState } from 'react'
import { API } from '../../config/api'
import Header from '../Header'
import DetailInvo from '../DetailInvo'
import Modal from '../Modal/Modal'

import './HomeOwner.css'
import action_icon from '../../assets/images/search-icon-2.svg'

function HomeOwner() {
  const [isModalShow, setModalShow] = useState(false)
  const [transactions, setTransactions] = useState(null)

  const toggleModal = () => setModalShow(!isModalShow)

  const getTransactions = async () => {
    const response = await API.get('/orders?type=incoming')
    const dataTransactions = response.data.data
    setTransactions(dataTransactions)
    console.log(dataTransactions)
  }

  useEffect(() => {
    getTransactions()
    return () => {
      setTransactions(null)
    }
  }, [])

  return (
    <>
      <Header isWithSearch={false} />
      <div className='home-owner'>
        <h2 className='home-owner__heading'>Incoming Transaction</h2>
        {!transactions ? (
          <p>Loading...</p>
        ) : (
          <table className='home-owner__table'>
            <tbody>
              <tr>
                <th>No</th>
                <th>Users</th>
                <th>Type of Rent</th>
                <th>Bukti Transfer</th>
                <th>Status Payment</th>
                <th>Action</th>
              </tr>
              {transactions.map((transaction, index) => (
                <>
                  <tr key={index}>
                    <td>{transaction.id}</td>
                    <td>{transaction.user.fullname}</td>
                    <td className='text-capitalize'>
                      {transaction.house.typeRent}
                    </td>
                    <td>
                      <a
                        href={transaction.attachment}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img
                          src='./images/icons/file-image.svg'
                          alt=''
                          width='25'
                          height='25'
                        />
                      </a>
                    </td>
                    <td
                      className={transaction.status
                        .replace(' ', '-')
                        .toLowerCase()}
                    >
                      {transaction.status}
                    </td>
                    <td>
                      <img src={action_icon} alt='' onClick={toggleModal} />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        )}
        {transactions && (
          <>
            {transactions.map((transaction) => (
              <Modal
                show={isModalShow}
                toggle={toggleModal}
                key={transaction.id}
              >
                <DetailInvo transaction={transaction} />
              </Modal>
            ))}
          </>
        )}
      </div>
      {/* <DetailInvo isModalShow={isModalShow} toggleModal={toggleModal} /> */}
    </>
  )
}

export default HomeOwner
