document.addEventListener('DOMContentLoaded', function() {

  const minute = document.querySelector('p.text-7xl.font-bold')
  const second = document.querySelectorAll('p.text-7xl.font-bold')[1]
  const start = document.getElementById('startBtn')
  const play = document.getElementById('playBtn')
  const reset = document.querySelector('img[alt="Restart"]').parentElement
  const colon = document.getElementById('colon')
  const ringgy = document.getElementById('Ring')

  let timer = null
  let running = false
  let timeLeft = 25 * 60 

  start.addEventListener('click', startTime)
  play.addEventListener('click', playPause)
  reset.addEventListener('click', resetTime)

  function showTime() {
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60

    minute.textContent = String(minutes).padStart(2, '0')
    colon.textContent = ':'
    second.textContent = String(seconds).padStart(2, '0')

  }

  function startTime() {
    if (running) return 

    running = true
    ringgy.classList.add('animate-pulse')

    timer = setInterval(() => {
      if (timeLeft <= 0) {
        stop()
        running = false
        ringgy.classList.remove('animate-pulse')
        alert('Great job! Ur time is up! Take a well-deserved break!')

        timeLeft = 25 * 60 
        showTime()

        return
      }

      timeLeft--
      showTime()

    }, 1000)
  }

  function playPause() {
    if (running) {
      stop()
      running = false
      ringgy.classList.remove('animate-pulse')
    } else {
      startTime()
    }
  }

  function resetTime() {
    stop()
    running = false
    ringgy.classList.remove('animate-pulse')
    timeLeft = 25 * 60
    alert("Ur timer's reset! It's time! Let's go!")
    showTime()
  }

  function stop() {
    clearInterval(timer)
    running = false
  }
  
  showTime()  
  
})