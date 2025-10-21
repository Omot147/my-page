const form = document.querySelector("form");
const userName = document.getElementById('username');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit' , e => {
     e.preventDefault();
     validateInputs();
});

const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');

      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success');
    };

    const setSuccess = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
  
        errorDisplay.innerText = message;
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
      };

      const isValueEmail = email => {
        const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(string(email).toLowerCase());
      }

const validateInputs = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if(userNameValue === '' ){
      setError(userName, 'Fullname is required');
    }else{
        setSuccess(userName);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    }else{
        setSuccess(email);
    }

    if(subjectValue === ''){
        setError(subject, 'Please input your subject!');
    }else{
        setSuccess(subject);
    }

    if(messageValue === ''){
        setError(message, 'Please fill out this part!');
    }else{
        setSuccess(message);
    }
};
const thankYouMessage = document.querySelector('#thank-you-message');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  thankYouMessage.classList.add('show');
  setTimeout(() => form.submit(), 2000);
});
const incompleteDetailsMessage = document.querySelector('#incomplete-details-message');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  incompleteDetailsMessage.classList.add('show');
  setTimeout(() => form.submit(), 2000);
});
