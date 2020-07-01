var per =['Alex Green','Sarah Micheal','Sydney Padilha','Katty Alexon'];

function rldChatNames(){

var c=document.getElementsByClassName('perName');

c[0].innerHTML=per[0];

c[1].innerHTML=per[1];

c[2].innerHTML=per[2];

c[3].innerHTML=per[3]; 

}

function j(){

  var k=document.getElementsByClassName('perName');

for (var i = 0; i < k.length; i++) {

 k[i].addEventListener("click", clickChat1);

}

  }

function prof() {

  var k = document.getElementsByClassName('pImg');

var b=document.getElementById('showImg');

  for (var i = 0; i < k.length; i++) {

    // alert(k[i].innerHTML);

    k[i].addEventListener("click", on);

    k[i].setAttribute('data-index', i); k[i].addEventListener('click', function(){

    if (this.getAttribute('data-index')==0) {

      b.src=k[0].src;

    }

    else if(this.getAttribute('data-index')==1){

      b.src=k[1].src;

    }

    else if(this.getAttribute('data-index')==2){

      b.src=k[2].src;

    }

    else if(this.getAttribute('data-index')==3){

      b.src=k[3].src;

    }

    else if(this.getAttribute('data-index')==4){

      b.src=k[4].src;

    }

    else{b.src='pics/EmptyProf.jpg'}

    });

  }

}

function indexLoad() {

  rldChatNames();

  var a =document.getElementById('allCont');

  var b =document.getElementById('all');

  var c=document.getElementById('allP');

  var k=document.getElementById('newAdd');

  c.style.borderBottom='2px solid #465EF6';

  a.innerHTML=b.innerHTML;

 

  if (page==null) {

    //alert('hh');

  } else {

     a.innerHTML=page;

  }

 

j();

  prof(); 

}

function clickChat1(){

  

location.href='./chat.html';

}

function sendText() {

creat_reciver();

bot();

}

function bot() {

 var se=document.getElementsByClassName('recP');

var recLast=se[se.length-1];

  if (recLast.innerHTML.includes('hi')) {

    creat_sender('nice to meet you');

    creat_sender('nice ou');

    creat_sender('nice you');

}

}

function allTap() {

  Tap('all','allP');

  var hp1=document.getElementById('callsP');

 hp1.style.border='none';

 var hp2=document.getElementById('friendsP');

 hp2.style.border='none';

 var a=document.getElementById('allCont');

 j();

 prof();

 if (page==null) {

    //alert('hh');

  } else {

     a.innerHTML=page;

  }

}

function callsTap() {

  Tap('callsCont','callsP');

  var hp1=document.getElementById('allP');

 hp1.style.border='none';

 var hp2=document.getElementById('friendsP');

 hp2.style.border='none';

 rldChatNames();

 j();

 prof();

}

function frndTap() {

  Tap('friendsCont','friendsP');

  var hp1=document.getElementById('callsP');

 hp1.style.border='none';

 var hp2=document.getElementById('allP');

 hp2.style.border='none';

 rldChatNames();

 j();

 prof();

}

function Tap(secId,tabN) {

  var tapName= document.getElementById(secId);

  var actSec=document.getElementById('allCont');

  actSec.innerHTML=tapName.innerHTML;

 var hp=document.getElementById(tabN);

 hp.style.borderBottom='2px solid #465EF6';

}

function add() {

  var name=prompt('Contact Name');

  if (name==''||name==null) {

  } else {

  var oldDiv=document.getElementById('allCont');

  var newName=document.createElement('h3');

  newName.className='perName';

  var newDiv=document.createElement('div');

  var sec=document.getElementById('newAdd');

  var newPicDiv=document.createElement('div');

  var newPPic=document.createElement('img');

  newPPic.className='pImg';

  newPPic.src='pics/EmptyProf.jpg'

  newPicDiv.appendChild(newPPic);

  newPicDiv.className='profilePic';

  newDiv.appendChild(newPicDiv);

  newDiv.className='contact';

  newName.innerHTML=name;

  newDiv.appendChild(newName);

  sec.appendChild(newDiv);

  oldDiv.appendChild(sec);

  newDiv.scrollIntoView();

  localStorage.setItem('page',oldDiv.innerHTML);

    console.log('pls reload the page to interact with the new contact you added');

  /*  per.push(newName);

    alert(per[per.length-1].innerHTML);*/

    

  }

  }

  function chatPageLoad() {

    creat_sender('Welcome');

    

}

  

  function creat_sender(text){

var textArea = document.getElementById('chatArea');

var newSend = document.createElement('div');

newSend.id = 'sender';

var newText=document.createElement('p');

  newText.innerHTML=text;

  newText.className='senderP';

  newSend.style.height='20px';

  newSend.appendChild(newText);

  textArea.appendChild(newSend);

  var c =document.getElementsByClassName('senderP');

var ln=c[c.length-1].innerHTML.length;

var sendLast=c[c.length-1];

if (ln<33) {

  newSend.style.height='19px';

} else if(ln>33&&ln<=66){

  newSend.style.height='38px';

}

else {

  newSend.style.height=eval('ln/33*19')+'px';

}

sendLast.scrollIntoView();

}

function creat_reciver(text){

  var textB = document.getElementById('textBox');

if (textB.value=='') {

}

else{

var textArea = document.getElementById('chatArea');

var newRec = document.createElement('div');

newRec.id = 'reciver';

var newText=document.createElement('p');

text=textB.value

  newText.innerHTML=text;

  newText.className='recP';

  newRec.appendChild(newText);

  textArea.appendChild(newRec);

  textB.value='';

  var c =document.getElementsByClassName('recP');

var ln=c[c.length-1].innerHTML.length;

var recLast=c[c.length-1];

alert(ln);

if (ln<33) {

  newRec.style.height='19px';

  

} else if(ln>33&&ln<=66){

  newRec.style.height='38px';

}

else {

  newRec.style.height=eval('ln/33*19')+'px';

}

}

recLast.scrollIntoView();

}

function on() {

  document.getElementById("overlay").style.display = "block";

  

}

function off() {

  document.getElementById("overlay").style.display = "none";

}

  var ss=localStorage.getItem('y');

  var page=localStorage.getItem('page');
