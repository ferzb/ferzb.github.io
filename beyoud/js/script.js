$('.nav-toggle-block').click(function() {
	$(this).toggleClass('open');
	$('.nav-toggle-line').toggleClass('active-line');
	$('nav').toggleClass('nav-open');
	$('header').toggleClass('header-menu-open');
});

$(function() {
	$(window).scroll(function(){
		if  ($(window).scrollTop() > 100)
			$('header').addClass('header-fixed');
		else
			$('header').removeClass('header-fixed');
	});
});

var time = 2, show = 1 ;
	$(window).scroll(function() {
		$('#counter').each(function(){
			var
				cPos = $(this).offset().top,
				topWindow = $(window).scrollTop();
			if(cPos < topWindow + 500){
				if(show < 2){
					$('.circul').addClass('viz');
					$('p').each(function(){
					var 
						i = 1,
						num = $(this).data('num'),
						step = 1000 * time / num,
						that = $(this),
						int = setInterval(function(){
							if (i <= num) {
								that.html(i);
							}
							else {
								show = show + 2
								clearInterval(int);
							}
							i++;
						},step);
					});
				}	
			}
		});
});

$('.portfolio-sliders').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    nav:true,
    margin:10
});

$('.testimonials').owlCarousel({
	loop:true,
	margin:80,
	responsive:{
		0:{
			items:1,
			dots:true,
			nav:false
		},
		960:{
			nav:true,
			dots:false,
			items:2
		},
	}
})

$('.skillsAboutSlider').owlCarousel({
	loop:true,
	margin:50,
	dots:false,
	autoplay:true,
	responsive:{
		0:{
			dots:true,
			items:2
		},
		640:{
			dots:true,
			items:4
		},
		960:{
			items:6
		},
	}
})
$('.expert-slider').owlCarousel({
	loop:true,
	margin:50,
	dots:false,
	responsive:{
		0:{
			dots:true,
			items:1
		},
		640:{
			dots:true,
			items:2
		},
		960:{
			items:3
		},
	}
})
$('.career-slider').owlCarousel({
	loop:true,
	margin:0,
	dots:false,
	items:1,
	responsive:{
		0:{
			dots:true,
			nav:false
		},
		960:{
			dots:false,
			nav:true
		}
	}
})
function validate() {
	var userName = $('#userName');
	var userEmail = $('#userEmail');
	var userPhone = $('#userPhone');

	if(!userName.value) {
		userName.css('border', '1px solid red');
		return false;
	}

	if(!userEmail.value) {
		userEmail.css('border', '1px solid red');
		return false;
	}
	if(!userPhone.value) {
		userPhone.css('border', '1px solid red');
		return false;
	}

	return true;

}

function validateRemodal() {
	var userNameRemodal = $('#userNameRemodal');
	var userEmailRemodal = $('#userEmailRemodal');
	var userPhoneRemodal = $('#userPhoneRemodal');

	if(!userName.value) {
		userNameRemodal.css('border', '1px solid red');
		return false;
	}

	if(!userEmail.value) {
		userEmailRemodal.css('border', '1px solid red');
		return false;
	}
	if(!userPhone.value) {
		userPhoneRemodal.css('border', '1px solid red');
		return false;
	}

	return true;

}
var input = document.querySelector('#downloadFile');
var preview = document.querySelector('.block-download');
input.addEventListener('change', updateImageDisplay);
function updateImageDisplay() {
	var curFiles = input.files;
 	if(curFiles.length === 0) {
    	var para = document.createElement('p');
    	para.textContent = 'Upload your resume <i>(doc, jpg, Pdf)</i>';
    	preview.appendChild(para);
  	} else {
    	for(var i = 0; i < curFiles.length; i++) {
      		var para = document.querySelector('.text-download');
      		if(validFileType(curFiles[i])) {
        		para.textContent = curFiles[i].name;
      		} else {
        		para.textContent = curFiles[i].name;
   			}
		}
	}
}
var fileTypes = [
  'image/jpg',
  'image/pdf',
  'image/doc',
  'image/png'
]
function validFileType(file) {
  for(var i = 0; i < fileTypes.length; i++) {
    if(file.type === fileTypes[i]) {
      return true;
    }
  }

  return false;
}
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
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
  a.addEventListener("click", function(e) {
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
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);