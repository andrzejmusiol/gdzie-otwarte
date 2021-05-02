import React from "react"
import {User} from "../../types/types"
import { UserInfoSection } from "../../utils/styled-components"
import { List } from 'antd'
import {messages} from "../../utils/messages"

const UserAccount = ({user}: User): JSX.Element => {
    const date = new Date(user.created_at)
    const userInfo = [
        `Twój adres email: ${user.email}`,
        `Twoja nazwa:  ${user.username}`,
        `Konto utworzone:  ${date.toLocaleDateString('pl-PL')}`
    ]

    return (
        <>
            <UserInfoSection>
            <h1>{messages.site.userAccountHeaderText}</h1>
            <p>{messages.site.userAccountSubHeaderText}</p>
            <List
                size="large"
                bordered
                dataSource={userInfo}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            </UserInfoSection>
            <UserInfoSection>
            <h1>{messages.site.usersObjectsHeaderText}</h1><p>{messages.site.usersObjectsSubHeaderText}</p>
                <a href = "mailto: kontakt@gdzie-otwarte.pl">kontakt@gdzie-otwarte.pl</a>
        </UserInfoSection>
        </>
    )
}

export default UserAccount
