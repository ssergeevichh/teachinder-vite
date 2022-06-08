/* eslint-disable quote-props */
import { createElement } from '../../helpers/helper'

export default function generateUserCard({ user, job = true }) {
  const teacherItem = createElement('li', {
    className: 'teacher-item teachers-list__item',
    'data-id': user.id,
  })
  const teacherAvatar = createElement('img', {
    className: 'teacher-item__img',
    srcset: user.picture_large,
  })
  const teacherName = createElement('div', {
    className: 'teacher-item__name',
    textContent: user.full_name,
  })
  const teacherLocation = createElement('div', {
    className: 'teacher-item__location',
    textContent: user.country,
  })

  teacherItem.appendChild(teacherAvatar)
  teacherItem.appendChild(teacherName)
  if (job) {
    teacherItem.appendChild(createElement('div', {
      className: 'teacher-item__job',
      textContent: user.course,
    }))
  }
  teacherItem.appendChild(teacherLocation)

  if (user.favorite) {
    teacherItem.appendChild(createElement('div', {
      className: 'teacher-item__favorite',
    }))
  }

  return teacherItem
}
