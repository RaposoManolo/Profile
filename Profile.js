total = 158,
    buttons = document.querySelector('.buttons'),
    pie = document.querySelector('.chart'),
    icon= document.querySelector('.skillicon'),
    activeClass = 'active';

var skills = {
  "QlikView" : 97,
  QlikSense   :85, 
  SQL         : 65,
  CSS  : 70,
  JavaScript  : 40
  
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
      document.querySelector(".skill-icon").style.backgroundPosition = "0px 0px";
      document.querySelector(".skill-summary").innerHTML = "Qlikview development skill acquired by working throughout many successful implementations since 2015 in both financial and pharmaceutical sectors. Created new applications, maintained existing ones and explored other Qlik technologies such as Nprinting.";
    }
    else  if(name=='QlikSense'){
        document.querySelector(".skill-icon").style.backgroundPosition = "-151px 0px";
        document.querySelector(".skill-summary").innerHTML = "Explored and created applications for internal use, including requirement gathering, data model, dashboard design and QVF publishing. Involved in the plannning to make some QlikView products available in QlikSense.";
      }
   else  if(name=='CSS'){
        document.querySelector(".skill-icon").style.backgroundPosition = "-300px 0px";
        document.querySelector(".skill-summary").innerHTML = "Started the path towards web technologies by fixing and changing the look and feel from QlikView extensions. That motivated me to improve my CSS skills to an upper level including the creation of this portfolio website from scratch.";
      }
    else  if(name=='JavaScript'){
        document.querySelector(".skill-icon").style.backgroundPosition = "-448px 0px";
         document.querySelector(".skill-summary").innerHTML = "Dived into the JavaScript during the fixes and maintenance of the QlikView extension UI, following best practices and version control using Git.";
      }
      else{
        document.querySelector(".skill-icon").style.backgroundPosition ="-600px 0px";
        document.querySelector(".skill-summary").innerHTML = "Created queries and reports on the available data. Manipulated data during it's extraction to QlikView applications  and consequently improving it's loading performance.";
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