// accessing to body element by name
let body = document.querySelector('body');
// function control Top in main page
function controlTop() {
    // create div control Top
    let controlTop = document.createElement('div');
    controlTop.classList = 'control-top';
    // element of div control top
    let bars = document.createElement('span');
    bars.id = 'bars';
    bars.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';
    let search = document.createElement('span');
    search.id = 'search';
    search.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>';
    controlTop.appendChild(bars);
    controlTop.appendChild(search);
    body.appendChild(controlTop);
}
// function control bottom in main page
function controlBottom() {
    // create div control bottom
    let controlBottom = document.createElement('div');
    controlBottom.classList = 'control-bottom';
    let home = document.createElement('span');
    home.id = 'home';
    home.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"/></svg>`;
    controlBottom.appendChild(home);
    let addPost = document.createElement('span');
    addPost.id = 'add-post';
    addPost.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>`;
    controlBottom.appendChild(addPost);
    let chat = document.createElement('span');
    chat.id = 'chat';
    chat.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>`;
    controlBottom.appendChild(chat);
    body.appendChild(controlBottom);
}
// function container
function Container() {
    // create div Container
    let container = document.createElement('div');
    container.classList = 'container';
    let bel = document.createElement('span');
    bel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>`;
    let notification = document.createElement('span');
    notification.id = 'notification'
    notification.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>';
    container.appendChild(notification);
    body.appendChild(container);


}
function createPost() {
    // create div Post 
    let post = document.createElement('div');
    post.classList = 'post';
    // control top post
    let controlTopPost = document.createElement('div');
    controlTopPost.classList = 'controlTopPost';
    post.appendChild(controlTopPost);
    // div info user
    let infoUser = document.createElement('div');
    infoUser.classList = 'infoUser';
    let divImgUser = document.createElement('div');
    divImgUser.classList = 'imguser';
    let imgUser = document.createElement('img');
    imgUser.src = '../all img/imgcode/linkedin.jpg';
    divImgUser.appendChild(imgUser)
    infoUser.appendChild(divImgUser);
    let name_date = document.createElement('span');
    let name = document.createElement('span');
    name.innerHTML = 'abdellah Bech';
    name.id = 'name';
    let date = document.createElement('span');
    date.id = 'date';
    date.innerHTML = '15 Feb 2023';
    let publicPrivat = document.createElement('span');
    publicPrivat.id = 'visibility';
    publicPrivat.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
    infoUser.appendChild(publicPrivat);
    name_date.appendChild(name);
    name_date.appendChild(date);
    infoUser.appendChild(name_date);
    controlTopPost.appendChild(infoUser);
    // dots svg
    let dots = document.createElement('span');
    controlTopPost.appendChild(dots);
    dots.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a56 56 0 1 1 112 0A56 56 0 1 1 0 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>`;
    // body Post
    let bodyPost = document.createElement('div');
    bodyPost.classList = 'body-post';
    let textBodyPost = document.createElement('span');
    textBodyPost.id = 'text';
    textBodyPost.innerHTML = 'hello my frien welcom to our software hello my frien welcom to our software  hello my frien welcom to our software  hello my frien welcom to our software hello my frien welcom to our software hello my frien welcom to our software hello my frien welcom to our software hello my frien welcom to our software hello my frien welcom to our software ';
    if (textBodyPost.innerText.length >= 178) {
        let showMore = document.createElement('span');
        showMore.id = 'show-more';
        showMore.innerHTML = 'show More...';
        bodyPost.appendChild(showMore);
    }
    console.log(textBodyPost.innerText.length);
    let imgBodyPost = document.createElement('img');
    imgBodyPost.src = '../all img/imgcode/linkedin.jpg';
    bodyPost.appendChild(textBodyPost);
    bodyPost.appendChild(imgBodyPost);
    post.appendChild(bodyPost);
    body.appendChild(post);
    // intract with post
    let intract = document.createElement('div');
    intract.classList = 'intract-post';
    let up = document.createElement('span');
    up.innerHTML = `<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill"  stroke-width="1.5" stroke-linejoin="round"></path></svg>`;
    let comment = document.createElement('span');
    comment.id = 'comment';
    comment.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Chatbox</title><path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg>`;
    let down = document.createElement('span');
    down.innerHTML = `<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill"  stroke-width="1.5" stroke-linejoin="round"></path></svg>`;
    post.appendChild(intract);
    intract.appendChild(up)
    intract.appendChild(comment)
    intract.appendChild(down);
    document.querySelector('.container').appendChild(post);
    console.log()
}
// selectors of main page
function mainSelectors() {
    // selector bar
    document.querySelector('#bars').onclick = () => {
        console.log('bars');
    }
    // selector search
    document.querySelector('#search').onclick = () => {
        console.log('search');
    }
    // selector notification
    document.querySelector('#notification').onclick = () => {
        console.log('notification');
    }
    // selector home
    document.querySelector('#home').onclick = () => {
        console.log('home');
    }
    // selector add post
    document.querySelector('#add-post').onclick = () => {
        console.log('addPost');
    }
    // selector add post
    document.querySelector('#add-post').onclick = () => {
        console.log('addPost');
    }
    // selector chat
    document.querySelector('#chat').onclick = () => {
        console.log('chat');
    }
    // selector comment
    console.log(document.querySelector('#comment'));
    document.querySelectorAll('#comment').forEach((comment)=>{
        comment.onclick = () => {
            console.log('comment');
        }
    })
}
controlTop();
Container();
for (i = 0; i < 10; i++) {
    createPost();
}
controlBottom();
mainSelectors();