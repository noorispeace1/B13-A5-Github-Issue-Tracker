const loginBtn = document.getElementById('login-btn');
const loginContainer = document.getElementById('login-container');
const dashboardContainer = document.getElementById('dashboard-container');
const mainBody = document.getElementById('main-body');

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const allContainer = document.getElementById("allContainer");

let currentPage = ("all")




const toggleBtn = (id) => {
    [allBtn, openBtn, closeBtn].forEach(btn => {
        btn.classList.remove("bg-indigo-600","text-white");
        btn.classList.add("bg-white","text-gray-500");
    });

    const active = document.getElementById(id);
    active.classList.remove("bg-white","text-gray-500");
    active.classList.add("bg-indigo-600","text-white");
};


loginBtn.addEventListener('click', function () {
    const userValue = usernameInput.value;
    const passValue = passwordInput.value;

    if (userValue === 'admin' && passValue === 'admin123') {
        loginContainer.classList.add('hidden');
        dashboardContainer.classList.remove('hidden');

        mainBody.classList.remove('flex','items-center','justify-center');
        mainBody.classList.add('block');

        CardLoad(); 
    } else {
        alert('Invalid password. Try again');
    }
});


const createCard = (element) => {
    const card = document.createElement("div");

    card.innerHTML = `
      <div class="bg-white border border-green-100 p-5 border-t-4
       ${element.status == 'open'?' border-green-800   ':' border-purple-800'} rounded-md">
        <div class="flex justify-between items-start mb-4">
         <div>${element.status == 'open'? '<img src="/assets/Open-Status.png"' : '<img src ="./assets/close.png"'}/></div>
         <h3 class ="rounded px-2
         ${element.priority === 'high'
          ?'bg-red-200 text-red-600'
          : element.priority === 'medium'
          ?'bg-yellow-200 text-yellow-600'
          :'bg-green-200 text-green-600'
         }">
         ${element.priority.toUpperCase()}
         </h3>
     </div>

        <h3 class="text-gray-800 font-bold mb-2">${element.title}</h3>
        <p class="text-xs text-gray-500 mb-4">${element.description}</p>

        <div class="flex gap-2 mb-6">
          <span class="flex items-center gap-1 text-[10px] font-bold text-red-400 bg-red-50 px-2 py-1 rounded">
            <span class="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
            ${element.labels}
          </span>
        </div>

        <div class="pt-4 border-t border-gray-50">
          <p class="text-[11px] text-gray-400 font-medium">${element.author}</p>
          <p class="text-[11px] text-gray-400">${new Date(element.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    `;

    allContainer.appendChild(card);
};


async function CardLoad() {
    allContainer.innerHTML = "";

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();

    document.getElementById("issues-no").innerText = data.data.length;

    data.data.forEach(createCard);
}


async function openCardLoad(status) {
    allContainer.innerHTML = "";

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();

    const filtered = data.data.filter(item => item.status === status);

    document.getElementById("issues-no").innerText = filtered.length;

    filtered.forEach(createCard);
}

// search issue

async function searchValues() {
  const searchInput = document.getElementById("btn-search")
const issuesCount =document.getElementById("issues-no")

const showSearchValue = searchInput.value;

const response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${showSearchValue}`)
const data =await response.json();
let searchValueIssues = data.data.length;
issuesCount.innerText = searchValueIssues;
let currentData =data.data;
if(currentPage !== "all"){
let filterData =currentData.filter(data => data.status.toLowerCase() == currentPage)
console.log(data.data);
CardLoad(filterData)
}
else{
  CardLoad(currentData)
}
}