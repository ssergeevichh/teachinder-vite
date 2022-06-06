import { formattedUsers } from '../data/users-data'
import generateUserCard from './generate-user-card'

export function fillTopUsersList() {
  const topUsersList = document.querySelector('#top-teachers-list')
  formattedUsers.forEach(user => topUsersList.appendChild(generateUserCard({
    user,
  })))
}
