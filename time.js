function getTime(){
  const date = new Date()
  document.getElementById("result").innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
  
  
  setInterval(getTime,1000)

  
  
}

getTime()