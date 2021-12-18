import axios from 'axios'

const axiosProfile = function (id) {
  axios.get('localhost:9500/home/getProfile', {
    params: {
      id: id
    }
  }).then(function (response) {
    console.log(response)
  }).catch(function (error) {
    console.log(error)
  })
}

const showProfile = function (userId) {
  axiosProfile(userId)
}

export { axiosProfile, showProfile }
