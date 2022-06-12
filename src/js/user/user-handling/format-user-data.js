import { getRandomInt, getAge } from '@/js/helpers/helper'

export default function formatExistingUserData(user) {
  function getCourse() {
    const courses = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry',
      'Law', 'Art', 'Medicine', 'Statistics']

    return courses[getRandomInt(0, courses.length - 1)]
  }
  return {
    id: `${user.id.name}${user.id.value}`,
    favorite: false,
    course: getCourse(),
    bg_color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    gender: user.gender,
    note: '',
    title: user.name.title,
    full_name: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    state: user.location.state,
    country: user.location.country,
    postcode: user.location.postcode,
    coordinates: user.location.coordinates,
    timezone: user.location.timezone,
    email: user.email,
    b_date: user.dob.date,
    age: user.dob.age,
    phone: user.phone,
    picture_large: user.picture.large,
    picture_thumbnail: user.picture.thumbnail,
  }
}

export function formatNewUserData(user) {
  
  return {
    ...user,
    id: `${getRandomInt(1000, 999999)}`,
    favorite: user.favorite === 'on' ? true : false,
    picture_large: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    age: getAge(user.b_date),
  }
}