

"use strict";

window.addEventListener('DOMContentLoaded', ()=>{
  const arrowPrev =  document.querySelector('.arrow-left'),
        arrowNext =  document.querySelector('.arrow-right'),
        ParentSlider = document.querySelector('.slider_commentsAboutU'),
        childrenSlide = document.querySelectorAll('.block_slick_item'),
        comments = document.querySelectorAll('.commentsAboutUs_content'),
        NowTimeControler =document.querySelector('.container-nowTime-item'),
        nowTimeParent = document.querySelector('.nowTime'),
        nowTimeItemControler = [...NowTimeControler.children],
        activeClasse = 'activeCommentsAboutUs';

  let offset = 0;
  function hideblocks(elements ){
    elements.forEach(element => {

        element.classList.remove( activeClasse );
    
    })
  }
  function showBlock(element = 0 ){
    hideblocks(childrenSlide);
    hideblocks(comments);
    childrenSlide[element].classList.add( activeClasse );
    comments[element].classList.add(activeClasse);
  }

  hideblocks(childrenSlide);
  hideblocks(comments);
  showBlock();


  arrowNext.addEventListener('click', (e)=>{
    if(offset == childrenSlide.length - 1 ){
      offset = 0 ; 

    }else{
      offset ++;
    }
    showBlock(offset);
  });
  arrowPrev.addEventListener('click', (e)=>{
    if(offset == 0){
      offset = childrenSlide.length-1 ; 

    }else{
      offset --;
    }
    showBlock(offset);
  });
  function sliderGlide(nameGlide){
        new Glide(nameGlide,{
          type: 'slider',
          startAt: 0,
          perView: 2,
          bound:true,
          peek:100,
          keyboard: true,
          rewind: true,
          breakpoints:{
            1200: { 
              perView: 1,
              peek:0,
            }
          }
        }).mount()
  };
  sliderGlide('.slider-flights');
  sliderGlide('.slider-BecomePartner');

function hideMass(items, ActiveNameClass){
  items.forEach(e=> e.classList.remove(ActiveNameClass));
}
function showMass(items ,NumberItems, ActiveNameClass){
  items[NumberItems].classList.add(ActiveNameClass);
}
  hideMass(nowTimeItemControler , 'activeNowTime');
  showMass(nowTimeItemControler, 0 , 'activeNowTime' )
 nowTimeItemControler.forEach((e, i) => {
    e.addEventListener('mouseover',()=>{
      nowTimeParent.style.backgroundImage=`url(img/nowTime/IMAGE${i+1}.png)`;
      hideMass(nowTimeItemControler , 'activeNowTime');
      showMass(nowTimeItemControler, i , 'activeNowTime' );
    })
  });

});



