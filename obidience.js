const result1 = document.getElementById("result-text1")
const result2 = document.getElementById("result-text2")
const result3 = document.getElementById("result-text3")
const result4 = document.getElementById("result-text4")
const result5 = document.getElementById("result-text5")
const result6 = document.getElementById("result-text6")
const result7 = document.getElementById("result-text7")
const result8 = document.getElementById("result-text8")
const result9 = document.getElementById("result-text9")
const result10 = document.getElementById("result-text10")
const q4result = document.getElementById("q4-input")
const q5result = document.getElementById("q5-input")
const q6result = document.getElementById("q6-input")
const q7result = document.getElementById("q7-input")
const lastQuestion = document.getElementById("last-question")
const finalResult = document.getElementById("final-result")

const pwelcome = document.getElementById("welcome-text")
const ptitle = document.getElementById("title")
const pname = document.getElementById("name")

scoreOne = 0
scoreTwo = 0
scoreThree = 0
scoreFour = 0
scoreFive = 0
scoreSix = 0
scoreSeven = 0
scoreEight = 0
scoreNine = 0
scoreTen = 0

function welcome() {
  pwelcome.textContent = `Welcome ${ptitle.value} ${pname.value}. You may begin.`
}

function q1_yes() {
  result1.textContent = 'True patriot! Congratulations. You can move on'
  scoreOne = 2
  console.log(scoreOne)
}

function q1_no() {
  result1.textContent = `Hehehehe...I laugh in APC. \
  You don't have PVC and you want to form OBI-dient? \
  ${pname.value}, when people were getting their PVCs, where were you? \
  Mtcheww. See ehn, the only reason I'll permit you to continue is because \
  some people genuinely could not get theirs and you could \
  be one of them. That being said, let's move on...`
  scoreOne = 0
  console.log(scoreOne)
  }

function q2_a() {
  result2.textContent = `Correct person! You are on point. We move!`
  scoreTwo = 2
  console.log(scoreTwo)
}

function q2_bc() {
  result2.innerHTML = `Are you Nigerian? \
                      <p><button class="btn btn-primary" onclick="naija_yes()">Yes</button> \
                      <button class="btn btn-primary" onclick="naija_no()">No</button></p>`
  scoreTwo = 0
  console.log(scoreTwo)
                    }

function naija_yes() {
  result2.innerHTML = ` <p>
  Shey you see that you are not a serious Nigerian?
  Sufferhead never tire you????
  Abi you join those people wey dey chop our money?...
  Anyways, this test is for the OBI-dient so THINK AGAIN!</p>`
}

function naija_no() {
  result2.innerHTML = `<p>So why would you want to vote in the first place?
  All of you that 'they' are importing from Niger, thunder is waiting.
  We that are Nigerians, we have gotten sense.
  So if you don't belong here, disappear!</p>`
}

function q2_d() {
  result2.textContent = `Your own is even worse. You are looking for fresh wahala.
  The ones we've seen are not enough shey? Continue.
  Sha know that if you are not OBI-dient, na here you go dey.`
  scoreTwo = 0
  console.log(scoreTwo)
}

function q2_e() {
  result2.textContent = `${pname.value}ginger, I knew you will want to do yeye.
  If your answer is not A, B or C, it is D. Choose one of them.
  You are not a mumu.`
  scoreTwo = 0
  console.log(scoreTwo)
}

function q3_a() {
  result3.textContent = `Chai! You are smart. You get sense. Move on...`
  scoreThree = 2
  console.log(scoreThree)
}

function q3_b() {
  result3.textContent = `Oga/madam, if you are joking, stop it.
  Have you forgotten that they said it's bats that gave us Covid?
  Or that Batman likes to destroy everything because of one thing?
  Or that bats no dey see well, na to suck blood dem sabi?
  Please be guided, or AVOID me.`
  scoreThree = 0
  console.log(scoreThree)
}

function q3_c() {
  result3.textContent = `Hahahahahahaha...LMFAO...
  For your mind now you want Arab money, thief.
  Omo, nothing for you. 
  In case you don't know who the Sheikh of Dubai is,
  it's that candidate that 'they' said lives in Dubai.
  If you know, you know. Please make the right choice.`
  scoreThree = 0
  console.log(scoreThree)
}

function q3_d() {
  result3.innerHTML = `Do you know who Thanos is? \
                      <p><button class="btn btn-primary" onclick="thanos_yes()">Yes</button> \
                      <button class="btn btn-primary" onclick="thanos_no()">No</button></p>`
  scoreThree = 0
  console.log(scoreThree)
 }

function thanos_yes() {
  result3.innerHTML = ` <p>
  So you want to disappear abi?
        Don't worry, boko haram, herdsmen and kidnappers are waiting.
        May you not enter their hand.
        You better choose the right option.</p>`
}

function thanos_no() {
  result3.innerHTML = `<p>My guy, try dey watch film sometimes. No be sin.\
  Thanos is a bad guy. We don't want bad guys. Try again.</p>`
}


function q4_all() {
  const states1 = ['ABIA', 'ADAMAWA', 'AKWA IBOM', 'BAUCHI', 'BAYELSA', 'BENUE', 'BORNO', 'CROSS RIVER', 'DELTA', 'EBONYI', 'EDO', 'EKITI', 'ENUGU', 'GOMBE', 'IMO', 'JIGAWA', 'KADUNA', 'KANO', 'KATSINA', 'KEBBI', 'KOGI', 'KWARA', 'LAGOS', 'NIGER', 'NASARAWA', 'PLATEAU', 'OGUN', 'ONDO', 'OSUN', 'OYO', 'RIVERS', 'SOKOTO', 'TARABA', 'YOBE', 'ZAMFARA']
  const states2 = ['ANAMBRA']
  const states3 = ['FCT', 'ABUJA', 'FEDERAL CAPITAL TERRITORY']
  let options1 = states1.includes(q4result.value.toUpperCase())
  let options2 = states2.includes(q4result.value.toUpperCase())
  let options3 = states3.includes(q4result.value.toUpperCase())
  
  if (options1 === true) {
    let randomState = Math.floor(Math.random()*states1.length)
    result4.textContent = `No be only ${q4result.value}, na ${states1[randomState]}...Mtcheww.
      Try again. You must get it.`
    q4result.value = ""
    scoreFour = 0
    console.log(scoreFour)
  } else if (options2 === true) {
    result4.textContent = `Sweet. You sabi your legend. Keep moving...`
    scoreFour = 2
    console.log(scoreFour)
  } else if (options3 === true) {
    result4.textContent = `Praise the Lord! Don't worry, he will soon get there.
    I know that you are my oversabi friend.
    I'm sha asking you for the Nigerian state he previously governed.`
    q4result.value = ""
    scoreFour = 0
    console.log(scoreFour)
  } else
  result4.textContent = `Which one be ${q4result.value} again? Na Nigerian state I talk oh!
  If you cannot spell, ask your neighbour. Stop stressing me.`
  q4result.value = ""
  scoreFour = 0
  console.log(scoreFour)
}

function q5_all() {
  let options1 = 'LP'
  let options2 = 'PDP'

  if (q5result.value.toUpperCase() === options1) {
    result5.textContent = 'I said BEFORE now. Shey you see that you are oversabi...'
    scoreFive = 0
    console.log(scoreFive)
  } else if (q5result.value.toUpperCase() === options2) {
    result5.textContent = `Nice. Historian ${pname.value}, you are doing well.`
    scoreFive = 2
    console.log(scoreFive)
  } else {
    result5.textContent = `Incorrect...Calm down your oversabi.
    You know the answer. If not, I will not play with you again.`
    scoreFive = 0
    console.log(scoreFive)
  }
  q5result.value = ''
}

function q6_all() {
  let options1 = 'LP'
  let options2 = 'PDP'

  if (q6result.value.toUpperCase() === options1) {
    result6.textContent = `Fantabulous job ${ptitle.value} ${pname.value}! Don't let your head swell sha. lol`
    scoreSix = 2
    console.log(scoreSix)
  } else if (q6result.value.toUpperCase() === options2) {
    result6.textContent = `I said NOW! Omo, your own oversabi don too much oh...`
    scoreSix = 0
    console.log(scoreSix)
  } else {
    result6.textContent = `Wetin be this? Wetin be ${q6result.value}? Omo, you never ready.`
    scoreSix = 0
    console.log(scoreSix)
  }
  q6result.value = ''
}

function q7_all() {
  const namesList = ['Buhari', 'Wizkid', 'dorime', 'Sabinus', 'PSquare', 'Burna boy', 'Buga won', 'Lai Okorocha', 'Dino Mohammed', 'Obiwannem', 'Porpouri Obinna']
  let randomState = Math.floor(Math.random()*namesList.length)

  if (q7result.value.toUpperCase() === 'GREGORY') {
    result7.textContent = `Wow! I'm impressed. Seems like you cheated though.
    Anyways, it's good to know that you know. We move`
    scoreSeven = 2
    console.log(scoreSeven)
  } else {
    result7.textContent = `No oh...It's not ${q7result.value}, it's ${namesList[randomState]}.
    Shebi I told you I've caught you... ntorrr! You go guess tire...`
    scoreSeven = 0
    console.log(scoreSeven)
  }
  q7result.value = ''
}

function q8_a() {
  result8.textContent = `I don't know what your definition of rigidity is sha oh,
  but that is not the answer so try again.`
  scoreEight = 0
  console.log(scoreEight)
}

function q8_b() {
  result8.textContent = `Shey you see why I said you should check dictionary.
  Buga your answer by yourself and try again.`
  scoreEight = 0
  console.log(scoreEight)
}

function q8_c() {
  result8.textContent = `Freaky freaky! I won't be frugal with my words right now but...
  To be very 'hunnest' with you, you are doing well. Ride on!`
  scoreEight = 2
  console.log(scoreEight)
}

function q8_d() {
  result8.textContent = `It's your president that is fragile. Rubbish...`
  scoreEight = 0
  console.log(scoreEight)
}

function q9_a() {
  result9.textContent = `That's not what he said oh. But we sef want that one too. Try again`
  scoreNine = 0
  console.log(scoreNine)
}

function q9_b() {
  result9.textContent = `*sighs* ${ptitle.value} ${pname.value}, I love you. That's exactly what he said and so it shall be.`
  scoreNine = 2
  console.log(scoreNine)
}

function q9_c() {
  result9.textContent = `He will. But that's not what he said. Go and find out.`
  scoreNine = 0
  console.log(scoreNine)
}

function q9_d() {
  result9.textContent = `Liar. He clearly stated that that is impossible.
  That's how others have been deceiving you in this country. You better receive sense.`
  scoreNine = 0
  console.log(scoreNine)
}

function q10_yes() {
  result10.innerHTML = `Chaii... I pray for you ${pname.value}, that you
  will enjoy the good of this our land. We will rise victorious in 2023.
  <p>Our expectations shall prevail.</p>
  You believe it. I believe it too. We will make it happen... together.`
  scoreTen = 2
  console.log(scoreTen)
}

function q10_no() {
  lastQuestion.innerHTML = `<img src="images/question_10.gif" id="question10">`
  result10.innerHTML = `Please tell me why.
  <p><input id="q10-input" type="text" class="input-info"></p>
  <button class="btn btn-primary" onclick="q10_b()">Reply</button>`
}

function q10_b() {
  result10.innerHTML = `So in your mind now you think I, a computer program, will read whatever rubbish you wrote?
  I laugh in Makoko.
  <p>${ptitle.value} Unbeliever if you do not believe why did you come here to waste my time?</p>
  I won't lie but you've hurt my feelings...whatever feelings have been programmed into me.
  <p>Therefore, as it stands, I will give you a chance to apologize.</p>
  Tell me sorry.
  
  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Sorry
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      </div>
      <div class="modal-body">
        Sorry for yourself...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="resetter()">Start Again</button>
      </div>
    </div>
  </div>
</div>`
}

function resetter() {
  location.reload()
}

function finalWord() {
totalPoints = scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive + scoreSix + scoreSeven + scoreEight + scoreNine + scoreTen

  if (totalPoints < 8) {
    finalResult.textContent = `    You are under-OBIdient. You didn't try at all.
    Please retake the quiz. Thank you.`
  } else if (totalPoints < 16) {
  finalResult.textContent = '      You are alright...at least you are semi-fundamentally OBIdient'
  } else {
    finalResult.innerHTML = `    Yeah! My real G. 
    By the power vested in me through this platform,
  I hereby certify you, ${ptitle.value} ${pname.value}, as FUNDAMENTALLY OBI-DIENT.
  <p><img src="images/congrats-1.gif"></p>
  Till the D-day...keep moving. Peace`
  }
  console.log(totalPoints)
  }


