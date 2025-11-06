const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click',()=>{
 wrapper.classList.add('active');
});

loginlinklink.addEventListener('click',()=>{
 wrapper.classList.remove('active');
});
