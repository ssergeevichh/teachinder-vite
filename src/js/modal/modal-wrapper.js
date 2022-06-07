import { createElement } from '../helpers/helper'

export function createModalWrapper({ headerTitleText, headerTitleClassName, modalClassName, headerClassName }) {
  const modal = createElement('div', {
    className: modalClassName,
  })
  const modalHeader = createElement('div', {
    className: headerClassName,
  })

  const modalHeaderTitle = createElement('div', {
    className: headerTitleClassName,
    textContent: headerTitleText,
  })

  modal.appendChild(modalHeader)
  modalHeader.appendChild(modalHeaderTitle)

  return modal
}
