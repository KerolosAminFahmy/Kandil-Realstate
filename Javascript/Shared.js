var Header=document.getElementById('Header')
var AllDropDown=document.querySelectorAll('.select-selected')
var AllCounter=document.querySelectorAll(".number")
var section = document.querySelector(".VideoArea")
const ButtonUp=document.getElementById("scrollUp")
const Widget=document.getElementById("widgetWrapper")
const ToggleButtonHeader=document.querySelector(".toggle-btn")
const ButtonHeader=document.querySelector(".BtnClose")
const ArrowElements = document.querySelectorAll(".Arrow")
const HeaderMobile= document.querySelector(".headerModileContainer")
const pageOverlay = document.getElementById("page-overlay")
const select = document.querySelector(".nice-select")
var started = false
const headerOffset = Header.offsetTop;
const ArrFirst=['اختر المشروع','النرجس الجديدة','بيت الوطن','نورث هاوس']
const ArrSecond=['اختر المشروع','منطقة الشروق']

window.onload=()=>{
  window.addEventListener('scroll', function() {
    if (window.scrollY > headerOffset) {
      Header.classList.add('FixedAtTop');
      if(window.scrollY > headerOffset+400){
        Header.classList.add('ColorBlack');
        ButtonUp.style.display="block"
      }else{
        Header.classList.remove('ColorBlack');
        ButtonUp.style.display="none"
      }
    } else {
      Header.classList.remove('FixedAtTop');
      
        Header.classList.remove('ColorBlack');
      
    }
    if ( section && window.scrollY >= section.offsetTop+100) {
      if (!started) {
        AllCounter.forEach((e) => IncreaseNumberAnimation(e));
      }
      started = true;
    }
  });
  if(AllDropDown){
    AllDropDown.forEach((e,i)=>{
      e.addEventListener('click', function() {
        if(e.classList.contains("Disabled")){
          return
        }
        this.nextElementSibling.classList.toggle('select-hide');
        this.nextElementSibling.querySelectorAll('.select-option').forEach(option => {
          option.addEventListener('click', function() {
              if(option.textContent==="التجمع الخامس" && e.textContent!="التجمع الخامس" ){
                if(AllDropDown[1].nextElementSibling.hasChildNodes()){
                  ClearOptions()
                }
                AllDropDown[1].classList.remove("Disabled");
                ArrFirst.forEach((project)=>{
                  let divDropdown= document.createElement("div")
                  divDropdown.textContent=project
                  divDropdown.classList.add("select-option")
                  AllDropDown[1].nextElementSibling.appendChild(divDropdown)
                })
              }else if(option.textContent==="مدينة الشروق" && e.textContent!="مدينة الشروق" ){
                if(AllDropDown[1].nextElementSibling.hasChildNodes()){
                  ClearOptions()
                }
                AllDropDown[1].classList.remove("Disabled");
                ArrSecond.forEach((project)=>{
                  let divDropdown= document.createElement("div")
                  divDropdown.textContent=project
                  divDropdown.classList.add("select-option")
                  AllDropDown[1].nextElementSibling.appendChild(divDropdown)
                })
              }else if(e.textContent==="اختر المنطقة"){
                ClearOptions()
              }
              e.textContent = this.textContent;
              this.parentElement.classList.add('select-hide');
          });
      });
      });
  })
  function ClearOptions(){
    AllDropDown[1].classList.add("Disabled");
    AllDropDown[1].nextElementSibling.querySelectorAll('.select-option').forEach((e)=>{
      AllDropDown[1].nextElementSibling.removeChild(e)
    })

  }
  }
  if(select){
    select.addEventListener("click",()=>{
      select.classList.toggle("open")
    })
  }
  function IncreaseNumberAnimation(ele){
    let Final = ele.getAttribute('dataValue');
    let Timer = setInterval(() => {
      ele.textContent++;
      if (ele.textContent == Final) {
        clearInterval(Timer);
      }
    }, 2000 / Final);
  }
  Widget.addEventListener("click",()=>{
    toggleClass("contentWrapper","hide")
    toggleClass("channels","show")
    toggleClass("widgetBubbleWrapper","--wiggle-animation")
    toggleClass("widgetBubble","open")
  })
  ToggleButtonHeader.addEventListener("click",()=>{
    ToggleButtonHeader.classList.toggle("ActiveMenu");
    HeaderMobile.classList.toggle("open-sidebar")
    pageOverlay.classList.toggle("HiddenOverlay")
  })
  ButtonHeader.addEventListener("click",()=>{
    ToggleButtonHeader.classList.toggle("ActiveMenu");
    HeaderMobile.classList.toggle("open-sidebar")
    pageOverlay.classList.toggle("HiddenOverlay")
  })
  ArrowElements.forEach((ele)=>{
    ele.addEventListener("click",()=>{
      console.log("hello")
      ele.nextElementSibling.nextElementSibling.classList.toggle("active-sub-menu")
      if(ele.nextElementSibling.nextElementSibling.nextElementSibling){
        ele.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle("active-sub-menu")
      }
      ele.querySelectorAll(".ArrowLine")[0].classList.toggle("ActiveArrowLine")
      ele.querySelectorAll(".ArrowLine")[1].classList.toggle("ActiveArrowLine")
    })
  })
}
function toggleClass(IdElement,ClassToToggle){
  let element =document.getElementById(IdElement)
  element.classList.toggle(ClassToToggle)
}