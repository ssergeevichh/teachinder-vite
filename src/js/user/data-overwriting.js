import { createElement } from '../helpers/helper'
import generateUserCard from './generate-user-card'

export default function overwriteUsersList(newUsers, userList) {
  userList.innerHTML = ''
  if (newUsers.length) {
    newUsers.forEach(user => userList.appendChild(generateUserCard({
      user,
    })))
  }
  else {
    userList.appendChild(createElement('div', {
      className: 'empty-list',
      textContent: 'No results...',
    }))
  }
}
