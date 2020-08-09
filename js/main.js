function prof() {
  var k = document.getElementsByClassName("pImg");
  for (var i = 0; i < k.length; i++) {
    k[i].addEventListener("click", function () {
      document.getElementsByClassName("overlay")[1].style.display = "block";
    });
  }
}

function indexLoad() {
  var a = document.getElementById("all");
  if (page == null) {
  } else {
    a.innerHTML = page;
  }
  
  var vb = document.getElementById('friends');
  
  if (pagefr == null) {
  
  } else {
    vb.innerHTML = pagefr;
    prof();
    profPageLoad();
  
  }
  openTap("all", "0");
  prof();
  n();
  profPageLoad();
  document.getElementsByClassName("overlay")[0].style.backgroundColor = "white";
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
  if (recLast == null) {
  } else {
    if (recLast.innerHTML.includes("hi")) {
      creat_sender("nice to meet you");
      creat_sender("nice ou");
      creat_sender("nice you");
    }
  }
}

function add() {
  on(2);
  var addUser = document.getElementById("addUser");
  addUser.addEventListener("click", addContacts);

  function addContacts() {
    var user = document.getElementById("userForm");
    var name = user["userName"].value;
    var Eml = user["userEmail"].value;
    var Phone = user["userPhone"].value;
    
    var selectedOption = document.getElementsByClassName('same-as-selected')[0];

    if (name == "" || Eml == "" || Phone == ""||selectedOption==undefined) {
      alert("Please complete the information");
    } else {
     // alert(selectedOption.innerHTML);
      if(selectedOption.innerHTML=='All'){
        //alert('al');
        var oldDiv = document.getElementById("all");

      var newName = document.createElement("h3");
      newName.className = "perName";
      var newDiv = document.createElement("div");
      var sec = document.getElementById("newAdd");
      var newPPic = document.createElement("img");
      newPPic.className = "pImg";
      newPPic.src = "pics/user-circle.svg";
      newDiv.appendChild(newPPic);
      newDiv.className = "contact";
      newName.innerHTML = name;
      newDiv.appendChild(newName);
      sec.appendChild(newDiv);
      oldDiv.appendChild(sec);

      newDiv.setAttribute("email", Eml);

      newDiv.setAttribute("phone", Phone);
      //newDiv.scrollIntoView();

      localStorage.setItem("page", oldDiv.innerHTML);
      prof();
      off(2);
      n();
      user.reset();
      addUser.removeEventListener("click", addContacts);
  
      }
      else{
        //alert('fr');
        var oldDiv = document.getElementById("friends");

      var newName = document.createElement("h3");
      newName.className = "perName";
      var newDiv = document.createElement("div");
      var sec = document.getElementById("newAddFriend");
      var newPPic = document.createElement("img");
      newPPic.className = "pImg";
      newPPic.src = "pics/user-circle.svg";
      newDiv.appendChild(newPPic);
      newDiv.className = "contact";
      newName.innerHTML = name;
      newDiv.appendChild(newName);
      sec.appendChild(newDiv);
      oldDiv.appendChild(sec);

      newDiv.setAttribute("email", Eml);

      newDiv.setAttribute("phone", Phone);
      //newDiv.scrollIntoView();

      localStorage.setItem("pageFriend", oldDiv.innerHTML);
      prof();
      off(2);
      n();
      user.reset();
      location.reload();
      addUser.removeEventListener("click", addContacts);
 
      }
        }
  }
}

function chatPageLoad() {
  creat_sender("Welcome");
  var mName = document.getElementById("msgName");
  mName.innerHTML = localStorage.getItem("addName");
  chatPicChange();
}

function chatPicChange() {
  var chatp = document.getElementById("chatProfile");
  chatp.src = "pics/user-circle.svg";
}

function creat_sender(text) {
  var textArea = document.getElementById("chatArea");
  var newSend = document.createElement("div");
  newSend.id = "sender";
  var newText = document.createElement("p");
  newText.innerHTML = text;
  newText.className = "senderP";
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
  newRec.addEventListener("mousemove", function () {
    alert("gg");
  });
  var c = document.getElementsByClassName("recP");
  var ln = c[c.length - 1].innerHTML.length;
  var recLast = c[c.length - 1];

  /*if (ln < 33) {
    newRec.style.height = "20px";
  } else {
    newRec.style.height = eval("ln/33*20") + "px";
  }*/
  if (recLast == null) {
  } else {
    recLast.scrollIntoView();
  }
}

function on(i) {
  document.getElementsByClassName("overlay")[i].style.display = "block";
}

function off(i) {
  document.getElementsByClassName("overlay")[i].style.display = "none";
}

var ss = localStorage.getItem("y");
var page = localStorage.getItem("page");
var pagefr = localStorage.getItem("pageFriend");

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
  if (pName == null || pEmail == null || pPhone == null) {
    on(0);
  }

  var profCloseBu = document.getElementById("closeProf");
  var f = document.getElementById("profForm");
  var j = document.getElementById("ch");

  profCloseBu.addEventListener("click", function () {
    var name = f["profName"].value;
    var email = f["profEmail"].value;
    var phone = f["profPhone"].value;
    if (name == "" || email == "" || phone == "") {
      alert("please enter your information");
    } else {
      localStorage.setItem("loginName", name);
      localStorage.setItem("loginEmail", email);
      localStorage.setItem("loginPhone", phone);
      document.getElementsByClassName("overlay")[0].style.display = "none";
    }
  });
  f[0].value = pName;
  f[1].value = pEmail;
  f[2].value = pPhone;
  j.addEventListener("change", function () {
    var k = j.checked.toString();
    localStorage.setItem("check", k);
  });
  if (kk == "true") {
    j.checked = true;

    document.getElementsByClassName("overlay")[0].style.display = "none";
  }
}
var pName = localStorage.getItem("loginName");
var pEmail = localStorage.getItem("loginEmail");
var pPhone = localStorage.getItem("loginPhone");
var kk = localStorage.getItem("check");

function openTap(tapName, n) {
  var i;
 
  var x = document.getElementsByClassName("tap");
  var k = document.getElementsByClassName("tapBu")[n];
  k.style.borderBottom = "4px solid #465ef6";
  if (n == 0) {
    document.getElementsByClassName("tapBu")[1].style.borderBottom = "none";
    document.getElementsByClassName("tapBu")[2].style.borderBottom = "none";
  } else if (n == 1) {
    document.getElementsByClassName("tapBu")[0].style.borderBottom = "none";
    document.getElementsByClassName("tapBu")[2].style.borderBottom = "none";
    var vb=document.getElementById('friends');
    
    if (pagefr==null) {
      
    } else {
      vb.innerHTML=pagefr;
      prof();
      profPageLoad();
      
    }
  } else {
    document.getElementsByClassName("tapBu")[1].style.borderBottom = "none";
    document.getElementsByClassName("tapBu")[0].style.borderBottom = "none";
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tapName).style.display = "block";
}


function n() {
  var k = document.getElementsByClassName("contact");
  var kl = document.getElementsByClassName("perName");
  for (var i = 0; i < k.length; i++) {
    kl[i].addEventListener("click", clickChat1);
    k[i].setAttribute("outName", kl[i].innerHTML);

    k[i].addEventListener("click", function () {
      var otName = this.getAttribute("outName");
      var emailInfo = this.getAttribute("email");
      var phoneInfo = this.getAttribute("phone");
      localStorage.setItem("addPhone", phoneInfo);
      localStorage.setItem("addName", otName);
      localStorage.setItem("addEmail", emailInfo);
    });
  }
}


function cc() {
  on(0);
  document.getElementById("closeProf").style.display = "none";
  document.getElementById("close").style.display = "block";
  document.getElementsByClassName("container")[0].style.display = "none";

  var input = document.querySelectorAll("#profForm  input");
  for (var i = 0; i < input.length; i++) {
    input[i].setAttribute("readonly", true);
  }
}

function info() {
  var mm = localStorage.getItem("addName");
  var em = localStorage.getItem("addEmail");
  var pm = localStorage.getItem("addPhone");

  on(3);
  document.getElementById("userN").value = mm;
  document.getElementById("userE").value = em;
  document.getElementById("userP").value = pm;
  var input = document.querySelectorAll("#user  input");
  for (var i = 0; i < input.length; i++) {
    input[i].setAttribute("readonly", true);
  }
}
function copyPhoneNumber() {
  var pIcon = document.getElementById("phoneLink");

  var tel = "tel:" + localStorage.getItem("addPhone");
  pIcon.href = tel;
}

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
