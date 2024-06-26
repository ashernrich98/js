<script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>

<div class="sun">
  <svg class="eclipse-container" viewBox="0 0 100 100">
    <circle class="eclipse" cx="50" cy="50" r="49" transform="rotate(-90 50 50)" />
  </svg>
</div>

<style>
.sun {
  background-color: #F6C744;
  height: 20vmin;
  width: 20vmin;
  border-radius: 50%;
}
.sun:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-animation: thats-no-moon 6s infinite, night-and-day 6s infinite;
          animation: thats-no-moon 6s infinite, night-and-day 6s infinite;
  background-color: #fff;
  border-radius: 50%;
}

@-webkit-keyframes thats-no-moon {
  from, 5% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
  30%, 60% {
    -webkit-transform: none;
            transform: none;
  }
  95%, to {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
}

@keyframes thats-no-moon {
  from, 5% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
  30%, 60% {
    -webkit-transform: none;
            transform: none;
  }
  95%, to {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
}
body {
  -webkit-animation: night-and-day 6s infinite;
          animation: night-and-day 6s infinite;
}

.eclipse {
  fill: none;
  stroke: #F6C744;
  stroke-width: 2;
  stroke-dasharray: 308 616;
  stroke-dashoffset: 308;
  stroke-linecap: round;
  -webkit-animation: eclipse-reveal 6s cubic-bezier(0.75, 0.02, 0.18, 0.98) infinite;
          animation: eclipse-reveal 6s cubic-bezier(0.75, 0.02, 0.18, 0.98) infinite;
}

@-webkit-keyframes eclipse-reveal {
  0%, 30% {
    stroke-dashoffset: -308;
  }
  50% {
    stroke-dashoffset: 0;
  }
  60%, 100% {
    stroke-dashoffset: 308;
  }
}

@keyframes eclipse-reveal {
  0%, 30% {
    stroke-dashoffset: -308;
  }
  50% {
    stroke-dashoffset: 0;
  }
  60%, 100% {
    stroke-dashoffset: 308;
  }
}
@-webkit-keyframes night-and-day {
  from, 5%, 95%, to {
    background-color: white;
  }
  45%, 55% {
    background-color: black;
  }
}
@keyframes night-and-day {
  from, 5%, 95%, to {
    background-color: white;
  }
  45%, 55% {
    background-color: black;
  }
}
html, body {
  height: 100%;
  width: 100%;
  
 
}

*, *:before {
  box-sizing: border-box;
  position: relative;
}


</style>
