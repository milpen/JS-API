const container = document.getElementById('container');

function createPost(title, text) {
    const postTitle = document.createElement('h1');
    postTitle.classList.add('title');
    postTitle.innerText = title;
    const postText = document.createElement('p');
    postText.classList.add('text');
    postText.innerText = text;
    container.append(postTitle);
    container.append(postText);
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) => {
    return res.json();
})
.then((json) =>
json.forEach(item => {
    createPost(item.title, item.body)
})
)
.catch((err) => {
console.log('error')
})