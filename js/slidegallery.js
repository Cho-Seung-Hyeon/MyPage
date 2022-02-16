var gallerybox = document.querySelector('.gallerybox'),   
    slide = document.querySelectorAll('.gallerybox li'),
    currentIdx = 0,
    slideCount = slide.length,    /*각 슬라이드마다 번호 설정*/
    slideWidth = 300,   /*사진의 넓이*/
    slideMargin = 50,   /*각 사진의 간격*/
    nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev');


    /*갤러리 박스의 넓이의 값을 유동적으로 줌*/
    gallerybox.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px'; 

    function moveSlide(num) {
      gallerybox.style.left = -num * 350 + 'px';      /*오른쪽으로 350px만큼 움직임*/
      currentIdx = num;
    }

    nextBtn.addEventListener('click',  /*클릭시*/
    function() {
      if(currentIdx < slideCount - 3) { /*마지막 섹션이 오기까지(세칸씩 보여야하기 때문에 -3을 해주어야함)*/
        moveSlide(currentIdx + 1 );     /*한칸씩 오른쪽으로*/
      }
      else{                             /*가장 끝이미지 가면 다시 처음으로 돌아감*/
        moveSlide(0);
      }

    });

    prevBtn.addEventListener('click', 
    function() {
      if(currentIdx > 0 ) {          /*첫번째 사진이 아닐시*/
        moveSlide(currentIdx - 1 );  /*한칸씩 왼쪽으로*/
      }
      else {
        moveSlide(slideCount - 3);   /*마지막 섹션으로*/
      }

    });