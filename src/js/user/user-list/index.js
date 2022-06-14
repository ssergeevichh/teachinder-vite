import { createUserInfo } from '@/js/user/user-list/modals/user-info-modal'
import { UserList } from '@/js/user/user-list/UserList'
import { addSearchFormListeners } from '@/js/user/user-list/forms/search'
import { initUserListFilters } from '@/js/user/user-list/forms/filters'
import { createModalWrapper } from '@/js/modal/modal-wrapper'
import openModal from '@/js/modal/pop-up'
import filterParams from '@/js/data/filters'
import { favoritesBus } from '@/js/user/favorites-quantity-inner'
import EventBus from 'js-event-bus'
import { formattedUsers } from '@/js/data/users-data'
import initAddTeacherModal from '@/js/user/user-list/modals/modal-add-teacher'

export const listUpdateBus = new EventBus()

export const initUserList = () => {
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
  favoritesBus.on('set-user-favorite', list.setFavorite)
  addSearchFormListeners(list)
  initUserListFilters(list, filterParams)
  initAddTeacherModal((newUser) => {
    list.addUser(newUser)
    listUpdateBus.emit('user-list-updated', null, newUser)

    if (newUser.favorite)
      favoritesBus.emit('set-user-favorite', null, newUser)
  })
}

export default initUserList