function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))

}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(responsive => responsive.json())
        .then(json => displayUsers(json))
}
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(responsive => responsive.json())
        .then(json => console.log(json))
}
function displayUsers(json) {
    const ul =document.getElementById("user-list")
    for (const user of json) {
        // console.log(user.name)
        const li=document.createElement('li');
        li.innerText=`Name:${user.name}`;
        ul.appendChild(li);
    }

}
