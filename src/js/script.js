$(function () {
  // Typing Effect
  var i = 0;
  var title = "Hello, I'm Neelam Khan ;)";
  var speed = 50;

  function typeWriter() {
    if (i < title.length && document.querySelector('.showcase-title')) {
      document.querySelector('.showcase-title').innerHTML += title.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

  var x = 0;
  var txt = '-frontend developer';

  function typeWriter2() {
    if (x < txt.length && document.querySelector('.showcase-text')) {
      document.querySelector('.showcase-text').innerHTML += txt.charAt(x);
      x++;
      setTimeout(typeWriter2, speed);
    }
  }
  setTimeout(() => {
    typeWriter2();
  }, 1900);

  // Nav Page Transitions
  // function zoomIn() {
  //   $('#showcase').css('scale', '10');
  //   $('#showcase').css('transition', 'scale 0.4s ease-in');
  // }

  // $('.projects-index').on('click', function () {
  //   zoomIn();
  //   setTimeout(() => {
  //     location.href = '_projects.html';
  //   }, 500);
  // });

  // $('.about-index').on('click', function () {
  //   zoomIn();
  //   setTimeout(() => {
  //     location.href = '_about.html';
  //   }, 500);
  // });

  // $('.skills-index').on('click', function () {
  //   zoomIn();
  //   setTimeout(() => {
  //     location.href = '_skills.html';
  //   }, 500);
  // });

  // $('.contact-index').on('click', function () {
  //   zoomIn();
  //   setTimeout(() => {
  //     location.href = '_contact.html';
  //   }, 500);
  // });

  // Nav Page Transitions within eachother
  $('.projects').on('click', function () {
    location.href = '_projects.html';
  });

  $('.about').on('click', function () {
    location.href = '_about.html';
  });

  $('.skills').on('click', function () {
    location.href = '_skills.html';
  });

  $('.contact').on('click', function () {
    location.href = '_contact.html';
  });

  // Close 'browser' and return to Showcase
  $('.close').on('click', function () {
    $(this)
      .parentsUntil('html')
      .css({ scale: '0', transition: 'scale 0.4s ease-out' });
    setTimeout(() => {
      location.href = 'index.html';
    }, 350);
  });

  // Secondary Nav Slide Down
  $('#secondary-nav').slideDown('slow');
  $('#secondary-nav').css('display', 'flex');

  // Footer Slide Up
  $('#footer').slideDown('slow');
  $('#footer').css('display', 'block');
});
