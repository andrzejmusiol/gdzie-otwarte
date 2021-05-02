import React, { useState } from "react"
import { User } from "../../types/types"
import { UserInfoSection } from "../../utils/styled-components"
import { Modal, Button, List } from "antd"
import { messages } from "../../utils/messages"
import axios from "axios"
import { useHistory } from "react-router-dom"

const UserAccount = ({ user }: User): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [status, setStatus] = useState("")
  const history = useHistory()
  const token = sessionStorage.getItem("token")
  const date = new Date(user.created_at)
  const userInfo = [
    `Twój adres email: ${user.email}`,
    `Twoja nazwa:  ${user.username}`,
    `Konto utworzone:  ${date.toLocaleDateString("pl-PL")}`,
  ]
  const USER_DESTROY_ENDPOINT = process.env.REACT_APP_USER_DESTROY

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleUserDelete = () => {
    axios
      .delete(`${USER_DESTROY_ENDPOINT}/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("auth")
        sessionStorage.removeItem("user")
        history.push("/")
        window.location.reload()
      })
      .catch(() => {
        setStatus(messages.axios.axiosFailure)
      })
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <UserInfoSection>
        <h1>{messages.site.userAccountHeaderText}</h1>
        <p>{messages.site.userAccountSubHeaderText}</p>
        <List
          size="large"
          bordered
          dataSource={userInfo}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </UserInfoSection>
      <UserInfoSection>
        <h1>{messages.site.usersObjectsHeaderText}</h1>
        <p>{messages.site.usersObjectsSubHeaderText}</p>
        <a href="mailto: kontakt@gdzie-otwarte.pl">kontakt@gdzie-otwarte.pl</a>
      </UserInfoSection>
      <UserInfoSection>
        <Button onClick={showModal} type="primary" danger>
          Usuń konto
        </Button>
        <Modal
          title="Czy na pewno chcesz usunąć konto?"
          visible={isModalVisible}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Nie
            </Button>,
            <Button key="submit" type="primary" onClick={handleUserDelete}>
              Tak, usuwam
            </Button>,
          ]}
        >
          <p>Operacja jest nieodwracalna</p>
        </Modal>
        {status}
      </UserInfoSection>
    </>
  )
}

export default UserAccount
