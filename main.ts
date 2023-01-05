import axios from 'axios'

async function debug() {
  await axios
    .get('https://s.namemc.com/2d/skin/face.png?id=02a3b3079e99fd6f&scale=16', {
      responseType: 'stream',
      validateStatus: () => true,
    })
    .then(console.info)
    .catch(console.error)
}

debug()
