
import filterParams from '../../data/filters'
import { createModalWrapper } from '../../modal/modal-wrapper'
import { createUserInfo } from '../user-info'
import { openModal } from '../../modal/pop-up'
import { initUserListFilters } from './filters'
import { UserList } from './UserList'
import { formattedUsers } from '@/js/data/users-data'

export const initUserList = () => {
  const container = document.querySelector('#top-teachers-list')
  const list = new UserList(formattedUsers, container)

  list.hooks.on('user-card-clicked', (user) => {
    const modalBlock = document.querySelector('.hidden')
    const modalElement = createModalWrapper({
      headerTitleText: 'Teacher info',
      headerTitleClassName: 'modal-header__title',
      modalClassName: 'modal-teacher-info modal-block--md-sizing',
      headerClassName: 'modal-header',
    })
    modalBlock.appendChild(modalElement)
    modalElement.appendChild(createUserInfo(user))

    openModal('.modal-teacher-info')
  })

  initUserListFilters(list, filterParams)
}
