export default function (context) {
  const { $axios } = context
  console.log(context)

  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })
}

// const axiosPlugin = () => {

// }
// export default axiosPlugin
