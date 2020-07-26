var per = ["Alex Green", "Sarah Micheal", "Sydney Padilha", "Katty Alexon"];

function rldChatNames() {
  var c = document.getElementsByClassName("perName");
  c[0].innerHTML = per[0];
  c[1].innerHTML = per[1];
  c[2].innerHTML = per[2];
  c[3].innerHTML = per[3];
}

function j() {
  var k = document.getElementsByClassName("perName");
  var picsMain = document.getElementsByClassName("pImg");

  for (var i = 0; i < k.length; i++) {
    k[i].addEventListener("click", clickChat1);
    k[i].setAttribute("name", k[i].innerHTML);
    k[i].setAttribute("dataIndex", i);
    k[i].addEventListener("click", function() {
      var index = this.getAttribute("name");
      var dtIndex = this.getAttribute("dataIndex");
      localStorage.setItem("names", index);
      localStorage.setItem("dtI", dtIndex.toString());
    });
  }
}
var io = localStorage.getItem("dtI");
var lop = localStorage.getItem("names");

function prof() {
  var k = document.getElementsByClassName("pImg");
  var b = document.getElementById("showImg");
  for (var i = 0; i < k.length; i++) {
    // alert(k[i].innerHTML);
    k[i].addEventListener("click", on);
    k[i].setAttribute("data-index", i);
    k[i].addEventListener("click", function() {
      if (this.getAttribute("data-index") == 0) {
        b.src = k[0].src;
      } else if (this.getAttribute("data-index") == 1) {
        b.src = k[1].src;
      } else if (this.getAttribute("data-index") == 2) {
        b.src = k[2].src;
      } else if (this.getAttribute("data-index") == 3) {
        b.src = k[3].src;
      } else if (this.getAttribute("data-index") == 4) {
        b.src = k[4].src;
      } else {
        b.src = "pics/EmptyProf.svg";
      }
    });
  }
}

function indexLoad() {
  rldChatNames();
  var a = document.getElementById("allCont");
  var b = document.getElementById("all");
  var c = document.getElementById("allP");
  var k = document.getElementById("newAdd");
  c.style.borderBottom = "2px solid #465EF6";
  a.innerHTML = b.innerHTML;

  if (page == null) {
    //alert('hh');
  } else {
    a.innerHTML = page;
  }

  prof();
  j();
}

function clickChat1() {
  location.href = "./chat.html";
}

function sendText() {
  var textB = document.getElementById("textBox");
  if (textB.value == "") {
    console.log("pls write a msg");
  } else {
    creat_reciver();
    bot();
  }
}

function bot() {
  var se = document.getElementsByClassName("recP");
  var recLast = se[se.length - 1];
  if (recLast == null) {} else {
    if (recLast.innerHTML.includes("hi")) {
      creat_sender("nice to meet you");
      creat_sender("nice ou");
      creat_sender("nice you");
    }
  }
}

function allTap() {
  indexLoad();
}

function callsTap() {
  Tap("callsCont", "callsP");
  var hp1 = document.getElementById("allP");
  hp1.style.border = "none";
  var hp2 = document.getElementById("friendsP");
  hp2.style.border = "none";
  rldChatNames();
  j();
  prof();
}

function frndTap() {
  Tap("friendsCont", "friendsP");
  var hp1 = document.getElementById("callsP");
  hp1.style.border = "none";
  var hp2 = document.getElementById("allP");
  hp2.style.border = "none";
  rldChatNames();
  j();
  prof();
}

function Tap(secId, tabN) {
  var tapName = document.getElementById(secId);
  var actSec = document.getElementById("allCont");
  actSec.innerHTML = tapName.innerHTML;
  var hp = document.getElementById(tabN);
  hp.style.borderBottom = "2px solid #465EF6";
}

function add() {
  var name = prompt("Contact Name");
  if (name == "" || name == null) {} else {
    var oldDiv = document.getElementById("allCont");
    var newName = document.createElement("h3");
    newName.className = "perName";
    var newDiv = document.createElement("div");
    var sec = document.getElementById("newAdd");
    var newPicDiv = document.createElement("div");
    var newPPic = document.createElement("img");
    newPPic.className = "pImg";
    newPPic.src = "pics/EmptyProf.svg";
    newPicDiv.appendChild(newPPic);
    newPicDiv.className = "profilePic";
    newDiv.appendChild(newPicDiv);
    newDiv.className = "contact";
    newName.innerHTML = name;
    newDiv.appendChild(newName);
    // newName.addEventListener('click', clickChat1);
    sec.appendChild(newDiv);
    oldDiv.appendChild(sec);
    newDiv.scrollIntoView();
    localStorage.setItem("page", oldDiv.innerHTML);
    j();
    prof();
    console.log(
      "pls reload the page to interact with the new contact you added"
    );
    /*  per.push(newName);
    alert(per[per.length-1].innerHTML);*/
  }
}

function chatPageLoad() {
  creat_sender("Welcome");
  var mName = document.getElementById("msgName");
  mName.innerHTML = lop;
  chatPicChange();
}

function chatPicChange() {
  var chatp = document.getElementById("chatProfile");
  if (io == 0) {
    chatp.src = "pics/1.jpg";
  } else if (io == 1) {
    chatp.src = "pics/2.jpg";
  } else if (io == 2) {
    chatp.src = "pics/3.jpg";
  } else if (io == 3) {
    chatp.src = "pics/4.jpg";
  } else {
    chatp.src = "pics/EmptyProf.svg";
  }
}

function creat_sender(text) {
  var textArea = document.getElementById("chatArea");
  var newSend = document.createElement("div");
  newSend.id = "sender";
  var newText = document.createElement("p");
  newText.innerHTML = text;
  newText.className = "senderP";
  newSend.style.height = "20px";
  newSend.appendChild(newText);
  textArea.appendChild(newSend);
  var newTimeDiv = document.createElement("div");
  var timeSs = document.createElement("p");

  timeSs.className = "tms";
  newTimeDiv.appendChild(timeSs);

  newTimeDiv.className = "timeSent";
  textArea.appendChild(newTimeDiv);
  var c = document.getElementsByClassName("senderP");
  getTime("tms");
  var ln = c[c.length - 1].innerHTML.length;
  var sendLast = c[c.length - 1];
  if (ln < 33) {
    newSend.style.height = "20px";
  } else if (ln > 33 && ln <= 66) {
    newSend.style.height = "40px";
  } else {
    newSend.style.height = eval("ln/33*20") + "px";
  }
  sendLast.scrollIntoView();
}

function creat_reciver(text) {
  var textB = document.getElementById("textBox");

  var textArea = document.getElementById("chatArea");
  var newRec = document.createElement("div");
  newRec.id = "reciver";
  var newText = document.createElement("p");
  text = textB.value;
  newText.innerHTML = text;
  newText.className = "recP";
  newRec.appendChild(newText);
  textArea.appendChild(newRec);
  var newTimeDiv = document.createElement("div");
  var timeS = document.createElement("p");
  newTimeDiv.className = "timeRec";
  timeS.className = "tm";
  newTimeDiv.appendChild(timeS);
  textArea.appendChild(newTimeDiv);
  textB.value = "";
  getTime("tm");
  newRec.addEventListener("mousemove", function() {
    alert("gg");
  });
  var c = document.getElementsByClassName("recP");
  var ln = c[c.length - 1].innerHTML.length;
  var recLast = c[c.length - 1];

  if (ln < 33) {
    newRec.style.height = "20px";
  } else {
    newRec.style.height = eval("ln/33*20") + "px";
  }
  if (recLast == null) {} else {
    recLast.scrollIntoView();
  }
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

var ss = localStorage.getItem("y");
var page = localStorage.getItem("page");

function getTime(classN) {
  var date = new Date();

  var hours = date.getHours();

  var minutes = date.getMinutes();

  // Check whether AM or PM
  var newformat = hours >= 12 ? "PM" : "AM";

  // Find current hour in AM-PM Format
  hours = hours % 12;
  // To display "0" as "12"
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var t = document.getElementsByClassName(classN);
  var tLast = t[t.length - 1];
  tLast.innerHTML = hours + ":" + minutes + " " + newformat;
}

function profPageLoad() {
  var profCloseBu = document.getElementById('closeProf');
  var f = document.getElementById('profForm');
  profCloseBu.addEventListener('click', function() {
    var name = f['profName'].value;
    var email = f['profEmail'].value;
    var phone = f['profPhone'].value;
    if (name==''||email==''||phone=='') {
    
    } else {
      localStorage.setItem('nn', name);
    localStorage.setItem('ee', email);
    localStorage.setItem('pp', phone);
    location.href = './contacts.html';
    }
  })
  f[0].value = pName;
  f[1].value = pEmail;
  f[2].value = pPhone;
}
var pName = localStorage.getItem('nn');
var pEmail = localStorage.getItem('ee');
var pPhone = localStorage.getItem('pp');