import { createUser } from '../user-displaying/user-index'
import { createElement } from './helper'

export default function overwriteUsersList(newUsers, userList) {
  userList.innerHTML = ''
  if (newUsers.length) {
    newUsers.forEach(user => userList.appendChild(createUser(user, true)))
  }
  else {
    userList.appendChild(createElement('div', {
      className: 'empty-list',
      textContent: 'No results...',
    }))
  }
}

// move to user-index.js
