const titleInput = document.getElementById('title');
const textInput = document.getElementById('text');
const btn = document.getElementById('btn');
const postDiv = document.getElementById('div');

function getTitle() {
if (titleInput.value !== "") {
    return titleInput.value
} else {
return 'введите заголовок'
}
}

function getText() {
if (textInput.value !== "") {
    return textInput.value
}else {
    return "введите текст"
}
}

function cleanInput() {
titleInput.value = " ";
textInput.value = " ";
}

function createPage(title, text) {
const postTitle = document.createElement('h2');
postTitle.classList.add('postTitle')
const postText = document.createElement('p');
postText.classList.add('postText');
postText.innerText = text;
postTitle.innerText = title;

postDiv.append(postTitle);
postDiv.append(postText);

}


function createPost() {
const title = getTitle();
const text = getText();
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: title,
    body: text
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => createPage(json.title, json.body));

    cleanInput();
}

btn.addEventListener('click', createPost)

