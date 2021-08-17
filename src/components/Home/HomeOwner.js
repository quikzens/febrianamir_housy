import React, { useEffect, useState } from 'react'
import { useGet } from '../../hooks/useGet'

import Header from '../Header/Header'
import DetailInvo from '../DetailInvo'
import Modal from '../Modal/Modal'
import { BsImage } from 'react-icons/bs'

import './HomeOwner.css'
import action_icon from '../../assets/images/search-icon-2.svg'

function HomeOwner() {
  const [isModalShow, setModalShow] = useState(false)
  const [transactions, setTransactions] = useState(null)
  const [transaction, setTransaction] = useState(null)
  let { data: dataTransactions, invoke } = useGet('/orders?type=incoming')

  const toggleModal = (transaction) => {
    if (isModalShow) {
      setTransaction(null)
      return setModalShow(false)
    }
    setTransaction(transaction)
    setModalShow(true)
  }

  useEffect(() => {
    setTransactions(dataTransactions.reverse())
    return () => {
      setTransactions(null)
      setTransaction(null)
      setModalShow(null)
    }
  }, [dataTransactions])

  return (
    <>
      <Header />
      <div className='home-owner'>
        <h2 className='home-owner__heading'>Incoming Transaction</h2>
        {!transactions ? (
          <p>Loading...</p>
        ) : (
          <>
            <table className='home-owner__table'>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Users</th>
                  <th>Type of Rent</th>
                  <th>Bukti Transfer</th>
                  <th>Status Payment</th>
                  <th>Action</th>
                </tr>
                {transactions?.map((transaction, index) => (
                  <React.Fragment key={index}>
                    <tr>
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
                          className='payment-proof'
                        >
                          <BsImage />
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
                        <img
                          src={action_icon}
                          alt=''
                          onClick={() => toggleModal(transaction)}
                        />
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            {transaction && (
              <Modal
                show={isModalShow}
                toggle={toggleModal}
                key={transaction.id}
              >
                <DetailInvo
                  transaction={transaction}
                  updateTransactions={invoke}
                />
              </Modal>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default HomeOwner
