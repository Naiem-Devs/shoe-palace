  
  // filter__sidebar Active()
  // var fltBtn = document.querySelector('.Filter__btn')
  // var fltClose = document.querySelector('.fltClose')
  // var fltSideBar = document.querySelector('.filter__sidebar')
  // var body = document.querySelector('body')

  // fltBtn.addEventListener('click', () => {
  //   fltSideBar.classList.add('show')
  //   body.classList.add('overflow-hidden')
  // })

  // fltClose.addEventListener('click', () => {
  //   fltSideBar.classList.remove('show')
  //   body.classList.remove('overflow-hidden')
  // })
  
  //Mobile filter__sidebar Active()
  // var mfbtn = document.querySelector('.m-fbtn')
  // var mfltClose = document.querySelector('.fltClose')
  // var fltSideBar = document.querySelector('.filter__sidebar')
  // var body = document.querySelector('body')

  // mfbtn.addEventListener('click', () => {
  //   fltSideBar.classList.add('show')
  //   body.classList.add('overflow-hidden')
  // })

  // mfltClose.addEventListener('click', () => {
  //   fltSideBar.classList.remove('show')
  //   body.classList.remove('overflow-hidden')
  // })


  // login Side Bar Active()
  var loginSideBarClose = document.querySelector('.loginSideBar .close__btn');
  var Accountbtn = document.querySelector('.Accountbtn');
  var loginSideBar = document.querySelector('.loginSideBar');

  var signInBlk = document.querySelector('.signIn__blk');
  var signUpBlk = document.querySelector('.signUp__blk');
  var ForgotBlk = document.querySelector('.Forgot__blk');
  var ForgotCodeBlk = document.querySelector('.ForgotCode__blk');
  var resetBlk = document.querySelector('.reset__blk');
  var CodeDoneBlk = document.querySelector('.CodeDone__blk');

  var creatBtn = document.querySelector('.creatBtn');
  var signInBtn = document.querySelector('.signInBtn');
  var forgotBtn = document.querySelector('.Forgot__btn');
  var changePassBtn = document.querySelector('.changePassBtn');
  var checkSms = document.querySelector('.checkSms');
  var resetBtn = document.querySelector('.resetbtn');


  creatBtn.addEventListener('click', function(e){
      e.preventDefault();
      signInBlk.classList.add('d-none');
      signUpBlk.classList.remove('d-none');
  });

  signInBtn.addEventListener('click', function(e){
      e.preventDefault();
      signInBlk.classList.remove('d-none');
      signUpBlk.classList.add('d-none');
  });

  forgotBtn.addEventListener('click', function(e){
      e.preventDefault();
      signInBlk.classList.add('d-none');
      ForgotBlk.classList.remove('d-none');
  });

  changePassBtn.addEventListener('click', function(e){
      e.preventDefault();
      ForgotBlk.classList.add('d-none');
      ForgotCodeBlk.classList.remove('d-none');
  });

  checkSms.addEventListener('click', function(e){
      e.preventDefault();
      ForgotCodeBlk.classList.add('d-none');
      resetBlk.classList.remove('d-none');
  });

  resetBtn.addEventListener('click', function(e){
      e.preventDefault();
      resetBlk.classList.add('d-none');
      CodeDoneBlk.classList.remove('d-none');
  });

  loginSideBarClose.addEventListener('click', function(e){
      e.preventDefault();
      loginSideBar.classList.remove('show');
  });

  Accountbtn.addEventListener('click', function(e){
      e.preventDefault();
      loginSideBar.classList.add('show');
  });


  
document.addEventListener('DOMContentLoaded', () => {
    // filter__sidebar Active()
    var fltBtn = document.querySelector('.Filter__btn');
    var fltClose = document.querySelector('.fltClose');
    var fltSideBar = document.querySelector('.filter__sidebar');
    var body = document.querySelector('body');
  
    if (fltBtn && fltClose && fltSideBar) {
      fltBtn.addEventListener('click', () => {
        fltSideBar.classList.add('show');
        body.classList.add('overflow-hidden');
      });
  
      fltClose.addEventListener('click', () => {
        fltSideBar.classList.remove('show');
        body.classList.remove('overflow-hidden');
      });
    }
  
    // Mobile filter__sidebar Active()
    var mfbtn = document.querySelector('.m-fbtn');
    var mfltClose = document.querySelector('.fltClose');
  
    if (mfbtn && mfltClose && fltSideBar) {
      mfbtn.addEventListener('click', () => {
        fltSideBar.classList.add('show');
        body.classList.add('overflow-hidden');
      });
  
      mfltClose.addEventListener('click', () => {
        fltSideBar.classList.remove('show');
        body.classList.remove('overflow-hidden');
      });

}


  
  // mycard__sideBar Active()
  var MycardBtn = document.querySelector('.MycardBtn')
  var MycardClose = document.querySelector('.MyClose')
  var MycardSideBar = document.querySelector('.myCard__sideBar')
  var body = document.querySelector('body')

  MycardBtn.addEventListener('click', (e) => {
    e.preventDefault()
    MycardSideBar.classList.add('show')
    body.classList.add('overflow-hidden')
  })

  MycardClose.addEventListener('click', () => {
    MycardSideBar.classList.remove('show')
    body.classList.remove('overflow-hidden')
  })
    
  
    // increment decrement
    let counter = 0;
  });

    // size__sideBar Active()
    // var sizeBtn = document.querySelector('.sizeBtn')
    // var sizeClose = document.querySelector('.fltClose')
    // var sizeSideBar = document.querySelector('.size__sideBar')
    // var body = document.querySelector('body')
  
    // sizeBtn.addEventListener('click', () => {
    //     sizeSideBar.classList.add('show')
    //     body.classList.add('overflow-hidden')
    // })
  
    // sizeClose.addEventListener('click', () => {
    //     sizeSideBar.classList.remove('show')
    //     body.classList.remove('overflow-hidden')
    // })








