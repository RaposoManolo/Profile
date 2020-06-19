totalMobile = 135,
    buttons = document.querySelector('.buttonsMobile'),
    pie = document.querySelector('.chart-mobile'),
    activeClass = 'active';
/*var total = 135,
    buttons = document.querySelector('.buttons'),
    pie = document.querySelector('.pie'),
    activeClass = 'active';*/



var skillsMobile = {
  QlikView  : 90,
  QlikSense : 80,
  "HTML/CSS": 70,
  JavaScript: 40,
  D3: 1
};

// work out percentage as a result of total
var numberFixer = function(num){
  var result = ((num * totalMobile) / 100);
  return result;
}

// create a button for each country
for(property in skillsMobile){
  var newEl = document.createElement('button');
  newEl.innerText = property;
  newEl.setAttribute('data-name', property);
  buttons.appendChild(newEl);
}

// when you click a button setPieChart and setActiveClass
  buttons.addEventListener('click', function(e){
    if(e.target != e.currentTarget){
      var el = e.target,
          name = el.getAttribute('data-name');
      setPieChart(name);
      setActiveClass(el);
    }
    e.stopPropagation();
  });

var setPieChart = function(name){
  var number = skillsMobile[name],
      fixedNumber = numberFixer(number),
      result = fixedNumber + ' ' + totalMobile;
  
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