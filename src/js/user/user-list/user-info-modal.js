import { createElement } from '../../helpers/helper'
import generateUserCard from '../user-handling/generate-user-card'
import { eventBus } from '../favorites'

function createFavoriteMark(className) {
  const favoriteMark = document.createElement('div')
  favoriteMark.className = className
  return favoriteMark
}

function setFavorite(userData) {
  const favoriteUsersUl = document.querySelector('.favorite-teachers-list')
  const favoriteUsers = document.querySelectorAll('.favorite-teachers-list > .teacher-item')
  const userElem = document.querySelector(`[data-id="${userData.id}"]`)

  if (userData.favorite) {
    userElem.prepend(createFavoriteMark('teacher-item__favorite'))
    favoriteUsersUl.appendChild(generateUserCard({
      user: userData,
      job: false,
    }))
  }
  else if (!userData.favorite) {
    userElem.firstElementChild.remove()
    Array.from(favoriteUsers).find(user => user.dataset.id === userData.id).remove()
  }
}

eventBus.on('favorite-change', setFavorite)

export function createUserInfo(userData) {
  const userInfoItem = createElement('div', {})
  const mainInfo = createElement('div', {
    className: 'main-info',
  })
  const mainInfoWrapper = createElement('div', {
    className: 'main-info__wrapper',
  })
  const infoFooter = createElement('div', {
    className: 'info-footer',
  })

  const isFavorite = userData.favorite
  const favoriteIcon = createElement('div', {
    className: isFavorite ? 'main-info__favorite main-info__favorite--active' : 'main-info__favorite',
  })
  favoriteIcon.addEventListener('click', () => {
    favoriteIcon.classList.toggle('main-info__favorite--active')
    userData.favorite = !userData.favorite
    eventBus.emit('favorite-change', null, userData)
  })

  const teacherAvatar = createElement('img', {
    className: 'main-info__img',
    srcset: userData.picture_large,
  })
  const teacherName = createElement('div', {
    className: 'main-info__name',
    textContent: userData.full_name,
  })
  const teacherJob = createElement('div', {
    className: 'main-info__speciality',
    textContent: userData.course,
  })
  const teacherLocation = createElement('div', {
    className: 'main-info__location',
    textContent: `${userData.city}, ${userData.country}`,
  })
  const personalData = createElement('div', {
    className: 'main-info__personal',
    textContent: `${userData.age}, ${userData.gender}`,
  })
  const email = createElement('div', {
    className: 'main-info__email',
    textContent: userData.email,
  })
  const phoneNumber = createElement('div', {
    className: 'main-info__phone-number',
    textContent: userData.phone,
  })
  const infoAbout = createElement('div', {
    className: 'info-footer__about',
    textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, distinctio odio nobis voluptas illum quae
    omnis aspernatur eius iste temporibus error possimus corrupti rem dolorum, voluptatibus fugiat consectetur
    nulla atque.`,
  })
  const footerMap = createElement('a', {
    className: 'info-footer__toggle-map',
    textContent: 'toggle map',
    href: '#',
  })

  mainInfo.appendChild(favoriteIcon)
  mainInfo.appendChild(teacherAvatar)
  mainInfo.appendChild(mainInfoWrapper)
  userInfoItem.appendChild(mainInfo)

  mainInfoWrapper.appendChild(teacherName)
  mainInfoWrapper.appendChild(teacherJob)
  mainInfoWrapper.appendChild(teacherLocation)
  mainInfoWrapper.appendChild(personalData)
  mainInfoWrapper.appendChild(email)
  mainInfoWrapper.appendChild(phoneNumber)
  mainInfo.appendChild(mainInfoWrapper)

  infoFooter.appendChild(infoAbout)
  infoFooter.appendChild(footerMap)
  userInfoItem.appendChild(infoFooter)

  return userInfoItem
}
