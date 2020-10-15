base_url = 'http://localhost:8000/'


function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

async function makeRequest(url, method='GET', data=undefined) {
    let opts = {method, headers: {}};

    if (!csrfSafeMethod(method))
        opts.headers['X-CSRFToken'] = getCookie('csrftoken');

    if (data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(data);
    }

    let response = await fetch(url, opts);

    if (response.ok) {  // нормальный ответ
        return response;
    } else {            // ошибка
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}


let onClickAdd = async function(event) {
    event.preventDefault();
    try {
        let response = await makeRequest(base_url + '/add/', 'POST', {
            "A": document.getElementById('first').value,
            "B": document.getElementById('second').value,
        })
        let data = await response.json();
        console.log(data);
        document.getElementById('answer-number').innerText = `Ответ: ${data['answer']}`
    }
    catch(error) {
        console.log(error);
        console.log(error.data);
    }
};

let onClickSub = async function(event) {
    event.preventDefault();
    try {
        let response = await makeRequest(base_url + '/subtract/', 'POST', {
            "A": document.getElementById('first').value,
            "B": document.getElementById('second').value,
        })
        let data = await response.json();
        console.log(data);
        document.getElementById('answer-number').innerText = `Ответ: ${data['answer']}`
    }
    catch(error) {
        console.log(error);
        console.log(error.data);
    }
};

let onClickMul = async function(event) {
    event.preventDefault();
    try {
        let response = await makeRequest(base_url + '/multiply/', 'POST', {
            "A": document.getElementById('first').value,
            "B": document.getElementById('second').value,
        })
        let data = await response.json();
        console.log(data);
        document.getElementById('answer-number').innerText = `Ответ: ${data['answer']}`
    }
    catch(error) {
        console.log(error);
        console.log(error.data);
    }
};

let onClickDiv = async function(event) {
    event.preventDefault();
    try {
        let response = await makeRequest(base_url + '/divide/', 'POST', {
            "A": document.getElementById('first').value,
            "B": document.getElementById('second').value,
        })
        let data = await response.json();
        console.log(data);
        document.getElementById('answer-number').innerText = `Ответ: ${data['answer']}`
    }
    catch(error) {
        console.log(error);
        console.log(error.data);
    }
};

let add = document.getElementById('add_button')
add.onclick = onClickAdd;
let sub = document.getElementById(('subtract_button'))
sub.onclick = onClickSub;
let mul = document.getElementById('multiply_button')
mul.onclick = onClickMul;
let div = document.getElementById('divide_button')
div.onclick = onClickDiv;

// Знаю, это не самый лучший способ решения задачи, но из-за нехватки времени я не смог придумать ничего лучше чем это
