const email = document.querySelector('input');
const submit = document.querySelector('.submit');
const popup = document.querySelector('.pop-up');
const success = document.querySelector('.success');
const dismiss = document.querySelector('.dismiss');
const span = document.querySelector('span');

submit.addEventListener('click', () => {
   if(email.validity.valid) {
    success.classList.replace('opacity-0', 'opacity-100');
    success.classList.replace('-z-10', 'z-10');
    submit.parentElement.parentElement.parentElement.classList.remove('bg-white');
    submit.parentElement.parentElement.classList.add('opacity-0');
    submit.parentElement.parentElement.previousElementSibling.classList.add('opacity-0');

    span.textContent = email.value;
   } 
});

dismiss.addEventListener('click', () => {
    success.classList.replace('opacity-100', 'opacity-0');
    success.classList.replace('z-10', '-z-10');

    submit.parentElement.parentElement.parentElement.classList.add('bg-white');
    submit.parentElement.parentElement.classList.remove('opacity-0');
    submit.parentElement.parentElement.previousElementSibling.classList.remove('opacity-0');
});
