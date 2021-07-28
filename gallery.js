/*gallery.js*/
$(function(){
    // 초기화(첫번째 이미지만 출력)
    $('.gallery img').hide().eq(0).show();

    var imgNum = 0; // 이미지 번호
      var pauseTime = 8000; //정지 시간
   changeGallery(imgNum);

   
     // 이미지 변경 함수 changeGallery(이미지번호)
     function changeGallery(imgNum) {
      $('.gallery img').stop().fadeOut().eq(imgNum).fadeIn();
    }
    // 추가 기능: 자동재생 기능
    setInterval(function(){
        imgNum = imgNum + 1;
        if(imgNum > 2) {imgNum = 0;}
        changeGallery(imgNum);
    },pauseTime);
 

   // 다음 이미지 클릭
   $('.btn-next').click(function(){
      imgNum = imgNum + 1;
      if(imgNum > 2) { imgNum = 0;}
      changeGallery(imgNum);
    })

    // 이전 이미지 클릭
    $('.btn-prev').click(function(){
      if(imgNum < 0) { imgNum = 2; }
      imgNum = imgNum - 1;
      changeGallery(imgNum);
    }) 
    
  });