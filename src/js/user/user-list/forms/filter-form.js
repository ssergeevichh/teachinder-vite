/* eslint-disable quote-props */
import { createElement } from '@/js/helpers/helper'

function createSelectField(param) {
  const filterItem = createElement('div', {
    className: param.itemClassName,
  })

  const filterItemLabel = createElement('label', {
    className: param.labelClassName,
    textContent: param.title,
    for: param.name,
  })

  const filterItemSelect = createElement('select', {
    className: param.selectClassName,
    name: param.name,
    id: param.name,
    'data-filterType': param.filterType,
    'data-id': 'filtering',
  })

  param.options.forEach((option) => {
    const optionItem = createElement('option', {
      value: option,
      textContent: option,
    })
    filterItemSelect.appendChild(optionItem)
  })
  filterItem.appendChild(filterItemLabel)
  filterItem.appendChild(filterItemSelect)

  return filterItem
}

function createCheckboxField(param) {
  const filterItem = createElement('div', {
    className: param.itemClassName,
  })

  const filterItemInput = createElement('input', {
    type: param.type,
    name: param.name,
    id: param.name,
    'data-filterType': param.filterType,
    'data-id': 'filtering',
  })

  const filterItemLabel = createElement('label', {
    className: param.labelClassName,
    textContent: param.title,
  })
  filterItemLabel.setAttribute('for', param.name)
  filterItem.appendChild(filterItemInput)
  filterItem.appendChild(filterItemLabel)

  return filterItem
}

const filterFormFields = [
  {
    type: 'checkbox',
    function: createCheckboxField,
  },
  {
    type: 'select',
    function: createSelectField,
  },
]

export default function createFilteringForm(params, { onChange } = {}) {
  const form = createElement('form', {
    className: 'filter-block top-teachers__filter',
    name: 'filtering',
    action: '#',
  })
  params.forEach((param) => {
    const fieldCreator = filterFormFields.find(field => field.type === param.type)
    form.appendChild(fieldCreator.function(param))
  })

  if (onChange) {
    form.addEventListener('change', ({ target }) => {
      if (target.dataset.id === 'filtering') {
        onChange({
          name: target.name,
          value: target.value === 'on' ? target.checked : target.value,
          filterType: target.dataset.filtertype,
        })
      }
    })
  }

  return form
}
