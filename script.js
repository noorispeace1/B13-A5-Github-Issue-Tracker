
const loginBtn = document.getElementById('login-btn');
const loginContainer = document.getElementById('login-container');
const dashboardContainer = document.getElementById('dashboard-container');
const mainBody = document.getElementById('main-body');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


loginBtn.addEventListener('click', function() {
    const userValue = usernameInput.value;
    const passValue = passwordInput.value;


    if (userValue === 'admin' && passValue === 'admin123') {
        

        loginContainer.classList.add('hidden');
        dashboardContainer.classList.remove('hidden');

        mainBody.classList.remove('flex', 'items-center', 'justify-center');
        mainBody.classList.add('block'); 
    } else {
        alert('invalid password try again');
    }
});



