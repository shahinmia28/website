// *******progress bar start **********
  
//progress bar countdown
window.addEventListener('scroll', () =>{
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > 350){
    window.addEventListener('DOMContentLoaded', ret11());
    window.addEventListener('DOMContentLoaded', ret22());
    window.addEventListener('DOMContentLoaded', ret33());
  }
});

//progress bar 1
const ret1 = document.querySelector('.ret-1');
let count0 = 0;
let i = 0;
let timer;
function ret11(){
  if(i===0){
    timer = setInterval(ret11 , 50);
    i = 1
  };
  count0 = count0 + 1;
  if(count0 >= 80){
    clearInterval(timer);
    i = 0;
    count0 = 80;
  };
  ret1.innerHTML = count0 + "%";
};
//progress bar 2
const ret2 = document.querySelector('.ret-2');
let count1 = 0;
let x = 0;
let timer1;
function ret22(){
  if(x===0){
    timer1 = setInterval(ret22, 50);
    x = 1
  };
  count1 = count1 + 1;
  if(count1 >= 92){
    clearInterval(timer1);
    x = 0;
    count1 = 92;
  };
  ret2.innerHTML = count1 + "%";
};
//progress bar 2
const ret3 = document.querySelector('.ret-3');
let count2 = 0;
let y = 0;
let timer2;
function ret33(){
  if(y===0){
    timer2 = setInterval(ret33, 50);
    y = 1
  };
  count2 = count2 + 1;
  if(count2 >= 78){
    clearInterval(timer2);
    y = 0;
    count2 = 78;
  };
  ret3.innerHTML = count2 + "%";
};




// ******Testimonials start here

const testimonialDetails = [
  {
    id : 101,
    name :'William Kets',
    img : "/images/1.jpg",
    docs : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, in vel impedit voluptatum maiores officia quidem velit expedita minus repudiandae a veniam nisi odit labore neque dignissimos odio praesentium consequuntur! Minus eum non illum vitae.',
  },
  {
    id : 102,
    name : 'John Moor',
    img : "/images/2.jpg",
    docs :'In vel impedit voluptatum maiores officia quidem velit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,  expedita minus repudiandae a veniam nisi odit labore neque dignissimos odio praesentium consequuntur! Minus eum non illum vitae.',
  },
  {
    id : 103,
    name :'Wiliam Blake',
    img : "/images/3.jpg",
    docs : 'Assumenda, in vel impedit voluptatum maiores officia quidem velit expedita minus repudiandae a veniam nisi odit labore neque dignissimos odio praesentium consequuntur! Minus eum non illum vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
];

const fullTestimonial = document.querySelector('.testimonials-container');

const img = document.querySelector('.testimonials-img');
const docs = document.querySelector('.testimonials-para');
const fullName = document.querySelector('.testimonials-name');

// button selects
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');

window.addEventListener('DOMContentLoaded', ()=> {
    showComments(0);
});
const showComments = (person) =>{
  const item = testimonialDetails[person];
  img.src = item.img;
  docs.textContent = item.docs;
  fullName.textContent = item.name;
};

btn1.addEventListener('click', () =>{
  showComments(0);
});
btn2.addEventListener('click', () =>{
  showComments(1);
});
btn3.addEventListener('click', () =>{
  showComments(2);
});

// ******Testimonials end here




// *******count bar start **********
window.addEventListener('scroll', () =>{
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > 3300){
    window.addEventListener('DOMContentLoaded', move1());
    window.addEventListener('DOMContentLoaded', move2());
    window.addEventListener('DOMContentLoaded', move3());
  }
});

// count bar 1
const projectsBar = document.querySelector('.total-projects h2');
let count3 = 0;
let timer3;
let z = 0;
function move1(){
  if(z===0){
    timer3 = setInterval(move1, 30);
    z = 1
  };
  count3 = count3 + 1;
  if(count3 >= 160){
    clearInterval(timer3);
    z = 0;
    count3 = 160;
  };
  projectsBar.innerHTML = count3;
};
// count bar 2
const clientsBar = document.querySelector('.total-clients h2');
let count4 = 0;
let timer4;
let n = 0;
function move2(){
  if(n===0){
    timer4 = setInterval(move2, 40);
    n = 1
  };
  count4 = count4 + 1;
  if(count4 >= 120){
    clearInterval(timer4);
    n = 0;
    count4 = 120;
  };
  clientsBar.innerHTML = count4;
};
// count bar 3
const officesBar = document.querySelector('.total-offices h2');
let count5 = 0;
let timer5;
let m = 0;
function move3(){
  if(m===0){
    timer5 = setInterval(move3, 70);
    m = 1
  };
  count5 = count5 + 1;
  if(count5 >= 16){
    clearInterval(timer5);
    m = 0;
    count5 = 16;
  };
  officesBar.innerHTML = count5;
};
