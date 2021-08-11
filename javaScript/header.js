// nav-toggle
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container'); 
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links');

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
  }else{
    linksContainer.style.height = 0;
  }
});

// fixed nav
const navbar = document.querySelector('#nav');
// top-link 
const topLink = document.querySelector('.top-link');
// progress bar selection
const progressRets = document.querySelectorAll('.progress-ret');
const progressBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  // console.log(scrollHeight);
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav');
  }else{
    navbar.classList.remove('fixed-nav');
  };

  //top-link
  if(scrollHeight > 500){
    topLink.classList.add('show-top-link');
  }else{
    topLink.classList.remove('show-top-link');
  };

  //progress bar animation starting point
  if(scrollHeight > 350){
    progressRets.forEach((progressRet) =>{
      progressRet.classList.add('progress-ret-anim');
    });
    progressBars.forEach((after) =>{
      after.classList.add('progress-bar1');
    });
    progressBars.forEach((before) =>{
      before.classList.add('progress-bar2');
    });
  }
});

//smooth scroll

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if(!fixedNav){
      position = position - navHeight;
    }
    if(navHeight > 84){
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

// *********navbar end ************


// footer -copy right current date
document.querySelector('.date').innerHTML = new Date().getFullYear();


