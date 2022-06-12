import { createUserInfo } from '@/js/user/user-list/modals/user-info-modal'
import { UserList } from '@/js/user/user-list/UserList'
import { addSearchFormListeners } from '@/js/user/user-list/forms/search'
import { initUserListFilters } from '@/js/user/user-list/forms/filters'
import { createModalWrapper } from '@/js/modal/modal-wrapper'
import openModal from '@/js/modal/pop-up'
import filterParams from '@/js/data/filters'
import { eventBus } from '@/js/user/favorites-quantity-inner'
import { formattedUsers } from '@/js/data/users-data'
import initAddTeacherModal from '@/js/user/user-list/modals/modal-add-teacher'

const initUserList = () => {
  const container = document.querySelector('#top-teachers-list')
  const list = new UserList(formattedUsers, container)

  list.hooks.on('user-card-clicked', (user) => {
    const userInfo = createUserInfo(user)
    const modalElement = createModalWrapper({
      headerTitleText: 'Teacher info',
      modalClassName: 'modal-teacher-info modal-block--md-sizing',
    })
    modalElement.appendChild(userInfo)

    openModal(modalElement)
  })
  eventBus.on('set-user-favorite', list.setFavorite)
  // eventBus.on('users-list-updated', list.setUserList)
  addSearchFormListeners(list)
  initUserListFilters(list, filterParams)
  initAddTeacherModal(list)
}

export default initUserList