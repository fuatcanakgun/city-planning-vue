export default function () {
    setInterval(getTime, 100)
}



function getTime() {
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    return time
}