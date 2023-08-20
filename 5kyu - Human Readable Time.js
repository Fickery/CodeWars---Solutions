function humanReadable (seconds) {
  let hourCalc = Math.floor(seconds / 3600)
  let minuteCalc = Math.floor((seconds % 3600) / 60)
  let secondCalc = seconds % 60
  return `${hourCalc.toString().padStart(2, '0')}:${minuteCalc.toString().padStart(2, '0')}:${secondCalc.toString().padStart(2, '0')}`
}

console.log(humanReadable(0))
console.log(humanReadable(59))
console.log(humanReadable(164559))
console.log(humanReadable(359999))