import { createUserInfo } from './user-info-modal'
import { UserList } from './UserList'
import { addSearchFormListeners } from '@/js/user/user-list/search'
import { initUserListFilters } from '@/js/user/user-list/filters'
import { createModalWrapper } from '@/js/modal/modal-wrapper'
import { openModal } from '@/js/modal/pop-up'
import filterParams from '@/js/data/filters'
import { eventBus } from '@/js/user/favorites-quantity-inner'
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
  eventBus.on('set-user-favorite', list.setFavorite)
  addSearchFormListeners(list)
  initUserListFilters(list, filterParams)
}
