//document.querySelector(".skillicon").style.backgroundPosition = "6px 0px";
total = 158,
    buttons = document.querySelector('.buttons'),
    pie = document.querySelector('.chart'),
    icon= document.querySelector('.skillicon'),
    activeClass = 'active';

var skills = {
  QlikView  : 90, 
  QlikSense : 80,
  "HTML/CSS": 70,
  JavaScript: 40,
  "D3.JS": 1
};

// work out percentage as a result of total
var numberFixer = function(num){
  var result = ((num * total) / 100);
  return result;
}

// create a button for each country
for(property in skills){
  var newEl = document.createElement('button');
  newEl.innerText = property;
  newEl.setAttribute('data-name', property);
  buttons.appendChild(newEl);
  //location.reload();
}

// when you click a button setPieChart and setActiveClass
 buttons.addEventListener('click', function(e){
   
    if(e.target != e.currentTarget){
      var el = e.target,
          name = el.getAttribute('data-name');
      setPieChart(name);
      setActiveClass(el);
    }

    if(name=='QlikView'){
      document.querySelector(".skillicon").style.backgroundPosition = "0px 0px";
      document.querySelector(".desc").innerHTML = "New text!";
    }
    else  if(name=='QlikSense'){
        document.querySelector(".skillicon").style.backgroundPosition = "-151px 0px";
      }
   else  if(name=='HTML/CSS'){
        document.querySelector(".skillicon").style.backgroundPosition = "-300px 0px";
      }
    else  if(name=='JavaScript'){
        document.querySelector(".skillicon").style.backgroundPosition = "-448px 0px";
      }
      else{
        document.querySelector(".skillicon").style.backgroundPosition ="-600px 0px";
      }


  e.stopPropagation();

  

  });

var setPieChart = function(name){
  var number = skills[name],
      fixedNumber = numberFixer(number),
      result = fixedNumber + ' ' + total;
  
  pie.style.strokeDasharray = result;
}

var setActiveClass = function(el) {
  for(var i = 0; i < buttons.children.length; i++) {
    buttons.children[i].classList.remove(activeClass);
    el.classList.add(activeClass);

  }
}


// Set up default settings
setPieChart('QlikView');
setActiveClass(buttons.children[0]);


 
console.log(setActiveClass);
 // if(setPieChart=='QlikView'){
// div.style.backgroundPosition  = "-100px 0px";
 //alert("JBJBH")//;}


  /* if(e.target=='QlikView'){
  div.style.backgroundPosition  = "-100px 0px";
  }*/

    /*if(skills=='QlikView'){
   icon.style.backgroundPosition = "-100px 0px";
  } ;*/