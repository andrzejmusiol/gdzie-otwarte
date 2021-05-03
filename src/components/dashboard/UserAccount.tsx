import React, { useContext, useState } from "react"
import { User } from "../../types/types"
import { PostForm, UserInfoSection } from "../../utils/styled-components"
import { Modal, Button, List, Row, Card } from "antd"
import { EditOutlined } from "@ant-design/icons"
import { messages } from "../../utils/messages"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { GlobalContext } from "../../store"
import UpdateObjectForm from "./UpdateObjectForm"
import {hideModal, showModal} from "../../utils/utils"
import {USER_DESTROY_ENDPOINT} from "../../utils/constans"

const { Meta } = Card

const UserAccount = ({ user }: User): JSX.Element => {
  const [isDeletingModalVisible, setIsDeletingModalVisible] = useState(false)
  const [isEditingModalVisible, setIsEditingModalVisible] = useState(false)
  const [editingObjectId, setEditingObjectId] = useState()
  const [status, setStatus] = useState("")

  const history = useHistory()
  const token = sessionStorage.getItem("token")
  const date = new Date(user.created_at)
  const userInfo = [
    `Twój adres email: ${user.email}`,
    `Twoja nazwa:  ${user.username}`,
    `Konto utworzone:  ${date.toLocaleDateString("pl-PL")}`,
  ]

  const { mapObjects } = useContext(GlobalContext)

  const userObjects = mapObjects.filter(
    (object: any) => object.user_id === user.id
  )


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
    setIsDeletingModalVisible(false)
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
        <Row gutter={16}>
          {userObjects.map((obj: any) => (
            <Card
              key={obj.id}
              style={{ width: 300 }}
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => {
                    showModal(setIsEditingModalVisible)
                    setEditingObjectId(obj.id)
                  }}
                />,
              ]}
            >
              <Meta title={obj.name} description={obj.address} />
              {status}
            </Card>
          ))}
        </Row>
        <Modal
          title="Edytuj ten punkt"
          visible={isEditingModalVisible}
          width={1000}
          onCancel={() => hideModal(setIsEditingModalVisible)}
          footer={[]}
        >
          <PostForm>
            <UpdateObjectForm
              editingObjectId={editingObjectId}
              setIsEditingModalVisible={setIsEditingModalVisible}
            />
          </PostForm>
        </Modal>
      </UserInfoSection>
      <UserInfoSection>
        <Button
          onClick={() => showModal(setIsDeletingModalVisible)}
          type="primary"
          danger
        >
          Usuń konto
        </Button>
        <Modal
          title="Czy na pewno chcesz usunąć konto?"
          visible={isDeletingModalVisible}
          onCancel={() => hideModal(setIsEditingModalVisible)}
          footer={[
            <Button
              key="back"
              onClick={() => hideModal(setIsDeletingModalVisible)}
            >
              Nie
            </Button>,
            <Button
              danger
              key="submit"
              type="primary"
              onClick={handleUserDelete}
            >
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
