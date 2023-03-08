// accessing to body element by name
let body = document.querySelector('body');
// show is accept true or false
let show = true;
// // this variable is not full time when API exist remove it
let nbrComments;
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
    // when user click at add post create page add post
    addPost.onclick = ()=>{
        addPost.children[0].style.rotate = '45deg';
            add_Post();
    }
}
// function container
function Container() {
    // create div Container
    let container = document.createElement('div');
    container.classList = 'container';
    let bel = document.createElement('span');
    bel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>`;
    // let notification = document.createElement('span');
    // notification.id = 'notification'
    // notification.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>';
    // container.appendChild(notification);
    body.appendChild(container);
}

function createPost(imguser, nameUser, timeCrtPost, textPost, imgPost, number_up, number_down, number_comments, commentsPost) {
    // this variable is not full time when API exist remove it
    nbrComments = 0;
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
    imgUser.src = imguser;
    divImgUser.appendChild(imgUser)
    infoUser.appendChild(divImgUser);
    let name_date = document.createElement('span');
    let name = document.createElement('span');
    name.innerHTML = nameUser;
    name.id = 'name';
    let date = document.createElement('span');
    date.id = 'date';
    date.innerHTML = timeCrtPost;
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
    // when user click at three dots show info about this post 
    dots.onclick = () => {
        threedots(post);
        body.classList.add('noneScroll');
    }
    // body Post
    let bodyPost = document.createElement('div');
    bodyPost.classList = 'body-post';
    if (textPost !== '') {
        let textBodyPost = document.createElement('span');
        textBodyPost.id = 'text';
        textBodyPost.innerHTML = textPost;
        if (textBodyPost.innerText.length >= 178) {
            let showMore = document.createElement('span');
            showMore.id = 'show-more';
            showMore.innerHTML = 'show More...';
            bodyPost.appendChild(showMore);
            showMore.onclick = () => {
                if (showMore.id == 'show-more') {
                    showMore.innerHTML = 'show less';
                    textBodyPost.style = `
                    display: inline-block;
                   overflow:visible;`
                    showMore.id = 'show-less';
                } else {
                    showMore.innerHTML = 'show More...';
                    textBodyPost.style = `
                    display:block;
                   overflow:hidden;`;
                    showMore.id = 'show-more'
                }
            }
        }
        bodyPost.appendChild(textBodyPost);
    }
    if (imgPost !== '') {
        let imgBodyPost = document.createElement('img');
        imgBodyPost.src = imgPost;
        bodyPost.appendChild(imgBodyPost);
    }
    post.appendChild(bodyPost);
    body.appendChild(post);
    // intract with post
    let intract = document.createElement('div');
    intract.classList = 'intract-post';
    let up = document.createElement('span');
    up.id = 'up';
    up.innerHTML = `<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill"  stroke-width="1.5" stroke-linejoin="round"></path></svg>`;
    let comment = document.createElement('span');
    comment.id = 'comment';
    comment.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Chatbox</title><path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg>`;
    let down = document.createElement('span');
    down.id = 'down';
    down.innerHTML = `<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill"  stroke-width="1.5" stroke-linejoin="round"></path></svg>`;
    let upcounter = document.createElement('span');
    upcounter.id = 'Upcount';
    upcounter.innerHTML = number_up;
    intract.appendChild(upcounter);
    let downcounter = document.createElement('span');
    downcounter.id = 'Downcount';
    downcounter.innerHTML = number_down;
    // when user click at down button change color and decrement by one;
    down.onclick = () => {
        console.log(down.children[0].classList.toggle('color'));
        if (up.children[0].classList.contains('color')) {
            up.children[0].classList.remove('color');
            upcounter.innerHTML--;
        }
        down.children[0].classList.contains('color') ? downcounter.innerHTML++ : downcounter.innerHTML--;
    }
    // when user click at up button change color and increment by one;
    up.onclick = () => {
        up.children[0].classList.toggle('color')
        if (down.children[0].classList.contains('color')) {
            down.children[0].classList.remove('color');
            downcounter.innerHTML--;
            console.log('hello world');
        }
        up.children[0].classList.contains('color') ? upcounter.innerHTML++ : upcounter.innerHTML--;
    }
    let commentcounter = document.createElement('span');
    commentcounter.id = 'commentcount';
    commentcounter.innerHTML = number_comments;
    intract.appendChild(downcounter);
    intract.appendChild(commentcounter);
    post.appendChild(intract);
    intract.appendChild(up)
    intract.appendChild(comment)
    intract.appendChild(down);
    document.querySelector('.container').appendChild(post);
    let comments = document.createElement('div');
    comments.classList = 'comments';
    let h2Comments = document.createElement('h2');
    h2Comments.innerText = 'Comments';
    comments.prepend(h2Comments);
    let allComments = document.createElement('div');
    allComments.classList = 'all-comments';
    comments.appendChild(allComments);
    post.appendChild(comments);
    for (i = 0; i < 4; i++) {
        createComments(allComments, 'abdellah becherair and tools foods main');
        nbrComments++;
    }
    // create div 'veiw comments ' ;
    let nbrcomments
    if (nbrComments > 1) {
        nbrcomments = document.createElement('span');
        nbrcomments.classList = 'nbr-comments';
        nbrcomments.innerText = 'show more comments...';
        nbrcomments.id = 'less';
        comments.appendChild(nbrcomments);
        // dont forget to edit this
        allComments.style.display = 'none'
        // when click at show more comments show other comments
        nbrcomments.onclick = () => {
            if (nbrcomments.id === 'less') {
                nbrcomments.id = 'more';
                nbrcomments.innerText = 'show less comments';
                allComments.style.display = 'grid';
                show = false;
            } else {
                nbrcomments.id = 'less';
                nbrcomments.innerText = 'show more comments...';
                allComments.style.display = 'none';
                show = true;
            }
        }
        // RUN THIS FUNCTION 
    }
    // create div write Comments
    let writeComment = document.createElement('div');
    writeComment.classList = 'write-comment';
    let imgComment = document.createElement('img');
    imgComment.src = imguser;
    let input = document.createElement('textarea');
    input.classList = 'textarea';
    input.placeholder = 'add your comment';
    let svg = document.createElement('span');
    svg.id = 'send-comment';
    svg.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg width="800px" height="800px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>send_plane_fill</title>
        <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="System" transform="translate(-1104.000000, -48.000000)" fill-rule="nonzero">
                <g id="send_plane_fill" transform="translate(1104.000000, 48.000000)">
                    <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">
    
    </path>
                    <path d="M21.4325,4.86103 L15.4325,20.361 C15.175,21.0261 14.324,21.2156 13.8087,20.7227 L10.4266,17.4876 L8.35348,19.5607 C8.0385,19.8757 7.49993,19.6526 7.49993,19.2072 L7.49993,14.6882 L2.30868,9.72268 C1.74196,9.1806 1.99133,8.22685 2.75086,8.03155 L20.2509,3.53155 C21.0389,3.32889 21.7262,4.10218 21.4325,4.86103 Z M19,6.00006 L8.03159,13.1534 L9.76704,14.8134 L19,6.00006 Z" id="形状" fill="#09244B">
    
    </path>
                </g>
            </g>
        </g>
    </svg>`;
    svg.onclick = () => {
        if (input.value.trim() !== '') {
            if (allComments.children.length === 0) {
                nbrcomments.innerText = 'show less comments';
                nbrcomments.style = 'margin:0;';
                console.log('run time');
            }
            createComments(allComments, input.value.trim());
            svg.classList.add('animate');
            input.value = '';
            input.style.height = '40px';
            setTimeout(() => {
                svg.classList.remove('animate');
            }, 1000);
        }
    }
    writeComment.appendChild(imgComment);
    writeComment.appendChild(input);
    writeComment.appendChild(svg);
    comments.appendChild(writeComment);
    input.addEventListener('keyup', (e) => {
        input.style.height = 'auto';
        e.target.scrollHeight >= 114 ? input.style.height = `114px` : input.style.height = `${e.target.scrollHeight}px`;
    });
    // when user click at comment go to input comment
    comment.onclick = (e) => {
        scrollTo(0, scrollY + input.getBoundingClientRect().y - 200);
        comment.children[0].classList.add('color');
        input.focus();
        document.onclick = (e) => {
            if (e.target !== comment && e.target !== input) {
                comment.children[0].classList.remove('color');
            }
        }
    }
}
// function create content when user click at three dots
function threedots(post) {
    if (document.querySelector('.dots')) {
        document.querySelector('.dots').remove();
    }
    // create div dots
    let dots = document.createElement('div');
    dots.classList = 'dots';
    // create div content
    // create slash
    let slash = document.createElement('span');
    slash.id = 'hide-show';
    dots.appendChild(slash);
    let content = document.createElement('div');
    content.classList = 'content';
    dots.appendChild(content);
    // create span
    let span = document.createElement('span');
    span.id = 'move';
    // create lis
    for (let i = 0; i < 4; i++) {
        // create li 
        let li = document.createElement('li');
        li.classList = 'li-content';
        // create span in li
        let spanLi = document.createElement('span');
        li.appendChild(spanLi);
        let divText = document.createElement('div');
        divText.classList = 'text';
        // title
        let title = document.createElement('span');
        divText.appendChild(title);
        // p
        let p = document.createElement('p');
        divText.appendChild(p);
        li.appendChild(divText);
        content.appendChild(li);
        if (i == 0) {
            spanLi.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4189 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.75 19.5189L13.68 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891Z" fill="#292D32"/>
            <path d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z" fill="#292D32"/>
            </svg>`;
            title.innerHTML = 'save post';
            p.innerText = 'add this to your saved Items';
            li.onclick = () => {
                li.classList.toggle('chColor');
                setTimeout(() => {
                    li.classList.toggle('scale');
                }, 10)
                li.classList.contains('chColor') ? title.innerHTML = 'saved post' : title.innerHTML = 'save post';
                li.classList.contains('chColor') ? p.innerText = 'this post is added to your saved posts' : p.innerText = 'add this to your saved Items';
            }
        }
        if (i == 1) {
            spanLi.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16,2 C16.2652165,2 16.5195704,2.10535684 16.7071068,2.29289322 L21.7071068,7.29289322 C21.8946432,7.4804296 22,7.73478351 22,8 L22,15 C22,15.2339365 21.9179838,15.4604694 21.7682213,15.6401844 L16.7682213,21.6401844 C16.5782275,21.868177 16.2967798,22 16,22 L8,22 C7.73478351,22 7.4804296,21.8946432 7.29289322,21.7071068 L2.29289322,16.7071068 C2.10535684,16.5195704 2,16.2652165 2,16 L2,8 C2,7.73478351 2.10535684,7.4804296 2.29289322,7.29289322 L7.29289322,2.29289322 C7.4804296,2.10535684 7.73478351,2 8,2 L16,2 Z M15.5857864,4 L8.41421356,4 L4,8.41421356 L4,15.5857864 L8.41421356,20 L15.5316251,20 L20,14.6379501 L20,8.41421356 L15.5857864,4 Z M12,16 C12.5522847,16 13,16.4477153 13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 C11,16.4477153 11.4477153,16 12,16 Z M12,6 C12.5522847,6 13,6.44771525 13,7 L13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,7 C11,6.44771525 11.4477153,6 12,6 Z"/>
            </svg>`;
            title.innerHTML = 'Report Post';
            p.innerText = `I'm concerned about this`;
            li.onclick = () => {
                li.classList.toggle('chColor');
                setTimeout(() => {
                    li.classList.toggle('scale');
                }, 10)
                li.classList.contains('chColor') ? title.innerHTML = 'Reported post' : title.innerHTML = 'Report Post';
                li.classList.contains('chColor') ? p.innerText = `I'm Not concerned about this` : p.innerText = `I'm concerned about this`;
            }
        }
        if (i == 2) {
            spanLi.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>`;
            title.innerHTML = 'Hide Post';
            p.innerText = `See fewer Posts like this`;
            li.onclick = () => {
                // remove div dots
                dots.classList.remove('move');
                setTimeout(() => {
                    dots.classList.remove('show');
                    dots.remove();
                    // remove post
                    post.classList.add('move');
                    back(scrollY, post);
                }, 400);
                // create div back
                body.classList.remove('noneScroll');
            }
        }
        if (i == 3) {
            spanLi.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.53 8L14 2.47C13.8595 2.32931 13.6688 2.25018 13.47 2.25H11C10.2707 2.25 9.57118 2.53973 9.05546 3.05546C8.53973 3.57118 8.25 4.27065 8.25 5V6.25H7C6.27065 6.25 5.57118 6.53973 5.05546 7.05546C4.53973 7.57118 4.25 8.27065 4.25 9V19C4.25 19.7293 4.53973 20.4288 5.05546 20.9445C5.57118 21.4603 6.27065 21.75 7 21.75H14C14.7293 21.75 15.4288 21.4603 15.9445 20.9445C16.4603 20.4288 16.75 19.7293 16.75 19V17.75H17C17.7293 17.75 18.4288 17.4603 18.9445 16.9445C19.4603 16.4288 19.75 15.7293 19.75 15V8.5C19.7421 8.3116 19.6636 8.13309 19.53 8ZM14.25 4.81L17.19 7.75H14.25V4.81ZM15.25 19C15.25 19.3315 15.1183 19.6495 14.8839 19.8839C14.6495 20.1183 14.3315 20.25 14 20.25H7C6.66848 20.25 6.35054 20.1183 6.11612 19.8839C5.8817 19.6495 5.75 19.3315 5.75 19V9C5.75 8.66848 5.8817 8.35054 6.11612 8.11612C6.35054 7.8817 6.66848 7.75 7 7.75H8.25V15C8.25 15.7293 8.53973 16.4288 9.05546 16.9445C9.57118 17.4603 10.2707 17.75 11 17.75H15.25V19ZM17 16.25H11C10.6685 16.25 10.3505 16.1183 10.1161 15.8839C9.8817 15.6495 9.75 15.3315 9.75 15V5C9.75 4.66848 9.8817 4.35054 10.1161 4.11612C10.3505 3.8817 10.6685 3.75 11 3.75H12.75V8.5C12.7526 8.69811 12.8324 8.88737 12.9725 9.02747C13.1126 9.16756 13.3019 9.24741 13.5 9.25H18.25V15C18.25 15.3315 18.1183 15.6495 17.8839 15.8839C17.6495 16.1183 17.3315 16.25 17 16.25Z" fill="#000000"/>
            </svg>`;
            title.innerHTML = 'Copy link';

            li.onclick = () => {
                li.classList.add('chColor');
                setTimeout(() => {
                    li.classList.add('scale');
                }, 10);
                title.innerHTML = 'Copied!';
                copyText(window.location.href);
            }
        }
    }
    dots.appendChild(content);
    slash.onclick = () => {
        dots.classList.remove('move');
        setTimeout(() => {
            dots.classList.remove('show');
            dots.remove();
        }, 400);
        body.classList.remove('noneScroll');

    }
    body.appendChild(dots);
    setTimeout(() => {
        dots.classList.add('move');
    }, 0)
    dots.classList.add('show');
    let slashArea = slash.parentNode.getBoundingClientRect().top;
    let positionY;
    let initY;
    let diffY;
    // for mobil
    slash.parentNode.addEventListener('touchstart', (e) => {
        positionY = e.touches[0].pageY - slashArea;
        initY = positionY;
        // add event touch move
        slash.parentNode.addEventListener('touchmove', (e) => {
            positionY = e.touches[0].pageY - slashArea;
            diffY = positionY - initY;
            if (diffY > 0) {
                dots.classList.remove('move');
                setTimeout(() => {
                    dots.remove();
                }, 400)
                body.classList.remove('noneScroll');
            }
        });
    });
    // function apply when user click at one of them 


}
// console.log('array'.trim());
// function Comments
function createComments(parent, text) {
    // img commenter
    let commenter = document.createElement('span');
    commenter.classList = 'commenter';
    let imgCommenter = document.createElement('img');
    imgCommenter.src = "../all img/imgcode/linkedin.jpg";
    let nameCommenter = document.createElement('span');
    nameCommenter.classList = 'name-commenter';
    nameCommenter.innerHTML = 'Abdellah Bech';
    let comment = document.createElement('span');
    comment.id = 'comment-post';
    comment.innerText = text;
    // time of set comment
    let time = document.createElement('span');
    time.id = 'time-comment';
    let nbrTime = 5;
    time.innerHTML = `${nbrTime}min`;
    let name_comment = document.createElement('span');
    name_comment.classList = 'name_comment';
    // create messgae show more or hide 
    if (comment.innerText.length >= 178) {
        comment.style = 'height:35px;overflow:hidden;'
        let showMore = document.createElement('span');
        showMore.id = 'show-more';
        showMore.innerHTML = 'show More...';
        name_comment.appendChild(showMore);
        showMore.onclick = () => {
            if (showMore.id == 'show-more') {
                showMore.innerHTML = 'show less';
                comment.style = `
                   overflow:visible;`
                showMore.id = 'show-less';
            } else {
                showMore.innerHTML = 'show More...';
                comment.style = `
                    height:35px;
                   overflow:hidden;`;
                showMore.id = 'show-more'
            }
        }
    }
    // create intract with comment
    let intract_comment = document.createElement('span');
    intract_comment.classList = 'intracting';
    let upIntract = document.createElement('span');
    upIntract.innerHTML = '<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill"  stroke-width="1.5" stroke-linejoin="round"></path></svg>';
    let downIntract = document.createElement('span');
    downIntract.innerHTML = '<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill"  stroke-width="1.5" stroke-linejoin="round"></path></svg>';
    let upcounter = document.createElement('span');
    upcounter.id = 'Up-count-comment';
    upcounter.innerHTML = 430
    upIntract.appendChild(upcounter);
    let downcounter = document.createElement('span');
    downcounter.id = 'Down-count-comment';
    downcounter.innerHTML = '454';
    downIntract.appendChild(downcounter);
    intract_comment.appendChild(upIntract);
    intract_comment.appendChild(downIntract);
    commenter.appendChild(intract_comment);
    // functions decrement and increment
    downIntract.onclick = () => {
        downIntract.children[0].classList.toggle('color')
        if (upIntract.children[0].classList.contains('color')) {
            upIntract.children[0].classList.remove('color');
            upcounter.innerHTML--;
        }
        downIntract.children[0].classList.contains('color') ? downcounter.innerHTML++ : downcounter.innerHTML--;
    }
    // when user click at up button change color and increment by one;
    upIntract.onclick = () => {
        upIntract.children[0].classList.toggle('color')
        if (downIntract.children[0].classList.contains('color')) {
            downIntract.children[0].classList.remove('color');
            downcounter.innerHTML--;
            console.log('hello world');
        }
        upIntract.children[0].classList.contains('color') ? upcounter.innerHTML++ : upcounter.innerHTML--;
    }
    // create div dots in comments
    let dots_Comments = document.createElement('span');
    dots_Comments.id = 'dots_Commets';
    dots_Comments.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a56 56 0 1 1 112 0A56 56 0 1 1 0 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>`;
    // when user click at dots that is exist in comment run this function 'dotsComments'
    dots_Comments.onclick = (e) => {
        // set prop at  div 'name_comment'
        name_comment.style.zIndex = '1';
        if (document.querySelector('.hidden')) {
            document.querySelector('.hidden').parentNode.children[2].style.zIndex = '0';
            document.querySelector('.hidden').classList.remove('hidden');
        }
        // hidden div intract comment
        intract_comment.classList.add('hidden');

        // remove all created div dots comments
        document.querySelector('.fun-comment') ? document.querySelector('.fun-comment').remove() : '';
        dotsComments(name_comment, dots_Comments, intract_comment, parent.parentNode);
        // disable clicking
        setTimeout(() => {
            document.onclick = () => {
                document.querySelector('.fun-comment') ? document.querySelector('.fun-comment').remove() : '';
                intract_comment.classList.remove('hidden');
                setTimeout(() => {
                    name_comment.style.zIndex = '0';
                }, 150);
            }
        }, 0);
    }
    name_comment.appendChild(dots_Comments);
    commenter.appendChild(imgCommenter);
    name_comment.appendChild(time);
    name_comment.appendChild(nameCommenter);
    name_comment.appendChild(comment);
    commenter.appendChild(name_comment);
    parent.appendChild(commenter);
}
// function back 
function back(scroll, post) {
    // add time out to post div
    if (document.querySelector('.back')) {
        document.querySelector('.back').remove();
    }
    let timeNone = setTimeout(() => {
        post.classList.add('none');
    }, 300)
    let divBack = document.createElement('div');
    divBack.classList = 'back';
    // create text
    let textBack = document.createElement('p');
    textBack.innerText = 'this post is deleted successfuly';
    // create btn back
    let btnBack = document.createElement('button');
    btnBack.id = 'back';
    btnBack.innerText = 'back'
    divBack.appendChild(textBack);
    divBack.appendChild(btnBack);
    body.appendChild(divBack);
    setTimeout(() => {
        divBack.classList.add('scale');
    }, 0)
    let timeOne = setTimeout(() => {
        divBack.classList.remove('scale');
        setTimeout(() => {
            post.remove();
            divBack.remove();
        }, 500);
    }, 4000);
    btnBack.onclick = () => {
        post.classList.remove('none');
        setTimeout(() => {
            post.classList.remove('move');
        });
        clearTimeout(timeOne);
        clearTimeout(timeNone);
        scrollTo(0, scroll);
        divBack.remove();
    }

}
// function for copy any text or url
function copyText(text) {
    let input = document.createElement('input');
    input.id = 'copy';
    input.type = 'text';
    input.readOnly = true;
    input.value = `${text}`;
    body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
    input.remove();
}
// function create dots of div 'comments'
function dotsComments(parent, eleMain, elechange, BIGPARENT) {
    console.log(BIGPARENT.children[2]);
    let nbr_of_comments = BIGPARENT.children[1].children.length;
    // create div dots Comments 
    let div_dots = document.createElement('div');
    div_dots.classList = 'fun-comment';
    setTimeout(() => {
        div_dots.classList.add('showDiv');
    }, 0)
    // edit function
    let li_edit = document.createElement('li');
    li_edit.id = 'edit';
    li_edit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>`;
    // when click at edit run function 'editComments'
    li_edit.onclick = () => {
        /* code of function to edit comment */
        eleMain.style.pointerEvents = 'none';
        // editComments(parent.children[3], parent.children[3].innerText);
        elechange.children[0].style = `display:none;`
        elechange.children[1].style = `display:none;`
        // change some prop in css
        elechange.classList.add('changed');
        // create function edit comment
        let save = document.createElement('span');
        save.id = 'save';
        save.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"/></svg>`;
        let cancel = document.createElement('span');
        cancel.id = 'cancel'
        cancel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>`;
        elechange.appendChild(save);
        elechange.appendChild(cancel);
        parent.children[3].style.display = 'none';
        contentComment(parent, parent.children[3], elechange, save, cancel);
    }
    // delete function
    let li_delet = document.createElement('li');
    li_delet.id = 'remove';
    li_delet.onclick = () => {
        parent.parentNode.style = 'scale:0;';
        setTimeout(() => {
            parent.parentNode.remove();
            nbr_of_comments--
            if (nbr_of_comments == 0) {
                BIGPARENT.children[2].innerText = 'No Comments Here';
                BIGPARENT.children[2].style = 'margin:0 auto;';
            }
        }, 510);
    }
    li_delet.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Trash</title><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`;
    // copy function
    let li_copy = document.createElement('li');
    li_copy.id = 'copy';
    li_copy.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Clipboard</title><path d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><rect x="176" y="32" width="160" height="64" rx="26.13" ry="26.13" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg>`;
    div_dots.appendChild(li_edit);
    div_dots.appendChild(li_delet);
    div_dots.appendChild(li_copy);
    parent.appendChild(div_dots);
    li_copy.onclick = () => {
        copyText(parent.children[3].innerText);
    }
    document.onclick = () => {
        eleMain.classList.remove('noneclick');
    }
}
// function create div to edit comment
function contentComment(nameComment, CommentPOst, intract, btnSave, btnCancel) {
    console.log(nameComment.children[0]) // this dots comment
    let textarea = document.createElement('textarea');
    textarea.id = 'edit-comment';
    nameComment.appendChild(textarea);
    intract.style = 'bottom:-30px;'
    textarea.value = CommentPOst.innerText;
    textarea.focus();
    textarea.addEventListener('keyup', (e) => {
        textarea.style.height = 'auto';
        textarea.style.height = `${e.target.scrollHeight}px`;
    });
    // disable button save when text area is empty
    textarea.addEventListener('keyup', () => {
        textarea.value.trim() !== '' ? btnSave.style = 'background:green;' : btnSave.style = 'background:#00800042;pointer-events:none;'
    });
    // save 
    btnSave.onclick = () => {
        if (textarea.value.trim() !== '') {
            CommentPOst.innerText = textarea.value;
            CommentPOst.style.display = 'block';
            intract.style = 'bottom:-22px;'
            nameComment.children[0].style.pointerEvents = 'unset';
            nameComment.parentNode.children[0].children[0].style = `display:block;`;
            nameComment.parentNode.children[0].children[1].style = `display:block;`;
            // set none to new last span sva and cancel
            btnSave.style.display = 'none';
            btnCancel.style.display = 'none';
            // remove class changed
            intract.classList.remove('changed');
            textarea.remove();
        } else {
            btnSave.style = 'background:#00800042;pointer-events:none;'
        }
    }
    // cancel
    btnCancel.onclick = () => {
        // remove none from last spans
        intract.children[0].style = `display:block;`;
        intract.children[1].style = `display:block;`;
        // set none to new last span sva and cancel
        btnSave.style.display = 'none';
        btnCancel.style.display = 'none';
        // remove class changed
        intract.classList.remove('changed');
        nameComment.children[0].style.pointerEvents = 'unset';
        CommentPOst.innerText = CommentPOst.innerText;
        CommentPOst.style.display = 'block';
        intract.style = 'bottom:-22px;'
        // remove text area
        textarea.remove();
    }

}
// function to add post
function add_Post() {
    let addpost = document.createElement('div');
    addpost.classList = 'add-post';
    let top = document.createElement('div');
    top.classList = 'top';
    let h2 = document.createElement('h2');
    h2.innerText = 'create Post';
    top.appendChild(h2);
    let priPub = document.createElement('div');
    priPub.id = 'pri-pub';
    let icon = document.createElement('span')
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
    let icon2 = document.createElement('span');
    icon2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`;
    priPub.appendChild(icon);
    priPub.appendChild(icon2);
    top.appendChild(priPub);
    addpost.appendChild(top);
    // function priPub
    priPub.onclick = () => {
        setTimeout(() => {
            icon2.children[0].style = 'rotate:0deg;';
        }, 0)
        priPub.style.pointerEvents = 'none';
        let content_priPub = document.createElement('div');
        content_priPub.classList = 'content_priPub';
        let private = document.createElement('li');
        let span_pri = document.createElement('span');
        span_pri.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>`;
        private.appendChild(span_pri);
        let textPri = document.createTextNode('private');
        private.appendChild(textPri);
        // public
        let public = document.createElement('li');
        let span_pub = document.createElement('span');
        span_pub.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
        public.appendChild(span_pub);
        let textpub = document.createTextNode('public');
        public.appendChild(textpub);
        // append it
        content_priPub.appendChild(private);
        content_priPub.appendChild(public);
        addpost.appendChild(content_priPub);
        setTimeout(() => {
            content_priPub.style.translate = '0 0';
            // remove this div when user click at outside
            document.onclick = () => {
                content_priPub.style.translate = '0 -10px';
                content_priPub.remove();
                icon2.children[0].style = 'rotate:-90deg;';
                priPub.style.pointerEvents = 'unset';
            }
        });
        // some functions 
        private.onclick = () => {
            icon.innerHTML = span_pri.innerHTML;
        }
        public.onclick = () => {
            icon.innerHTML = span_pub.innerHTML;
        }

    };
    let btnClear = document.createElement('span');
    btnClear.id = 'clear';
    btnClear.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>`;
    addpost.appendChild(btnClear);
    // textarea
    let textarea = document.createElement('textarea');
    textarea.placeholder = `what's your problem ...`;
    addpost.appendChild(textarea);
    btnClear.onclick = () => {
        btnClear.style.pointerEvents = 'none';
        let warning = document.createElement('div');
        warning.classList = 'warn-post';
        let textwarn = document.createTextNode('do you want to remove this text');
        warning.appendChild(textwarn);
        let btnnext = document.createElement('button');
        btnnext.id = 'remove-text';
        btnnext.innerText = 'NEXT';
        warning.appendChild(btnnext);
        addpost.appendChild(warning);
        setTimeout(() => {
            warning.style.scale = '1';
        }, 0)
        btnnext.onclick = () => {
            textarea.value = '';
            warning.style.scale = '0';
            warning.remove();
            btnClear.style.pointerEvents = 'unset';
        }
        setTimeout(()=>{
            document.onclick = ()=>{
                warning.remove();
                btnClear.style.pointerEvents = 'unset';
            }
        },0)
    }
    // div imags
    let images = document.createElement('div');
    images.classList = 'images';
    addpost.appendChild(images);
    body.appendChild(addpost);
    setTimeout(()=>{
        addpost.style.top = '-30px';
    },200)
    // controls bottom
    let bottom = document.createElement('div');
    bottom.classList = 'bottom';
    let send_cancel = document.createElement('div');
    send_cancel.classList = 'send-cancel';
    let btnsend = document.createElement('button');
    btnsend.id = 'send-post';
    btnsend.innerText = 'POST';
    send_cancel.appendChild(btnsend);
    let btncancel = document.createElement('button');
    btncancel.id = 'cancel-post';
    btncancel.innerText = 'CANCEL';
    send_cancel.appendChild(btncancel);
    bottom.appendChild(send_cancel);
    addpost.appendChild(bottom);
    // when user click at cancel this post remove this page
    btncancel.onclick = ()=>{
        addpost.style.top = '700px';
            addpost.remove();
            document.querySelector('#add-post').children[0].style = '0deg';
    }
    // choose image
    let choose_img = document.createElement('span');
    choose_img.id = 'choose-img';
    choose_img.innerHTML = `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="721.11239" height="582.53467" viewBox="0 0 721.11239 582.53467" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M719.63469,741.26733l-.153-.01452L480.3662,719.04034,262.93028,739.239a21.49791,21.49791,0,0,1-23.39415-19.41735q-.09207-.99134-.09215-1.988V200.70651a21.40162,21.40162,0,0,1,19.50937-21.40539l221.41288-20.56845.153.01452,239.11545,22.21245L937.06956,160.761a21.49792,21.49792,0,0,1,23.39429,19.41721q.0921.99142.09216,1.98819V699.29309a21.40186,21.40186,0,0,1-19.50927,21.40576Z" transform="translate(-239.4438 -158.73267)" fill="#3f3d56"/><path d="M572.76414,350.0441c-46.28643-33.7103-94.98727-65.67591-144.73815-95.00394l-2.49707-1.47175v99.46885H576.87376Zm-143.92791-.31421V259.36456c47.32852,27.9968,93.67273,58.37488,137.86749,90.36536Zm378.18,204.73386q-30.02664-31.21739-61.60767-61.01252Q736.702,485.22838,727.888,477.1377q-53.79025-49.412-111.11915-93.98694l-.44653-.34726H425.52892V557.26672H809.712Zm-378.18-.50434V386.11087H615.18938q55.27881,42.99975,107.5639,90.81186,9.07855,8.29728,18.03345,16.727,31.3038,29.419,61.14459,60.30969Zm378.18.50434q-30.02664-31.21739-61.60767-61.01252Q736.702,485.22838,727.888,477.1377q-53.79025-49.412-111.11915-93.98694l-.44653-.34726H425.52892V557.26672H809.712Zm-378.18-.50434V386.11087H615.18938q55.27881,42.99975,107.5639,90.81186,9.07855,8.29728,18.03345,16.727,31.3038,29.419,61.14459,60.30969ZM572.76414,350.0441c-46.28643-33.7103-94.98727-65.67591-144.73815-95.00394l-2.49707-1.47175v99.46885H576.87376Zm-143.92791-.31421V259.36456c47.32852,27.9968,93.67273,58.37488,137.86749,90.36536Zm143.92791.31421c-46.28643-33.7103-94.98727-65.67591-144.73815-95.00394l-2.49707-1.47175v99.46885H576.87376Zm-143.92791-.31421V259.36456c47.32852,27.9968,93.67273,58.37488,137.86749,90.36536Zm378.18,204.73386q-30.02664-31.21739-61.60767-61.01252Q736.702,485.22838,727.888,477.1377q-53.79025-49.412-111.11915-93.98694l-.44653-.34726H425.52892V557.26672H809.712Zm-378.18-.50434V386.11087H615.18938q55.27881,42.99975,107.5639,90.81186,9.07855,8.29728,18.03345,16.727,31.3038,29.419,61.14459,60.30969ZM261.83113,587.033v3.30737H392.45531v47.95673H261.83113v3.30737H395.76265V587.033Zm163.69779,84.33771v33.51184l3.30737-.306V674.678H938.16978v-3.30737Zm512.64086-81.03034V587.033H425.52892v54.57147H938.16978v-3.30737H428.83626V590.34033Zm-308.866-240.6105A1613.79575,1613.79575,0,0,0,428.83626,217.6422v-33.487l-3.30738.30592v33.74622l2.54673,2.80012A1610.4861,1610.4861,0,0,1,627.73247,352.69l.44653.34726H938.16978v-3.30737Zm-236.84851,0H261.83113v3.30737H395.76265V187.22276l-3.30737.30593ZM938.16978,382.8035H665.65166l3.56372,2.927q50.32928,41.41231,98.832,87.84354,6.896,6.59811,13.74219,13.30383,34.08224,33.301,66.83355,68.77655l2.72663,1.61236h86.82v-3.30737H851.55821q-32.39565-35.12421-66.1969-68.21429-6.75906-6.623-13.56817-13.155-47.45271-45.53-96.93085-86.47922H938.16978ZM261.83113,671.37067V674.678H392.45531v33.272l3.30737-.30591V671.37067Zm0-288.56717v3.30737H392.45531V553.95941H261.83113v3.30737H395.76265V382.8035Zm310.933-32.7594c-46.28643-33.7103-94.98727-65.67591-144.73815-95.00394l-2.49707-1.47175v99.46885H576.87376Zm-143.92791-.31421V259.36456c47.32852,27.9968,93.67273,58.37488,137.86749,90.36536Zm378.18,204.73386q-30.02664-31.21739-61.60767-61.01252Q736.702,485.22838,727.888,477.1377q-53.79025-49.412-111.11915-93.98694l-.44653-.34726H425.52892V557.26672H809.712Zm-378.18-.50434V386.11087H615.18938q55.27881,42.99975,107.5639,90.81186,9.07855,8.29728,18.03345,16.727,31.3038,29.419,61.14459,60.30969ZM572.76414,350.0441c-46.28643-33.7103-94.98727-65.67591-144.73815-95.00394l-2.49707-1.47175v99.46885H576.87376Zm-143.92791-.31421V259.36456c47.32852,27.9968,93.67273,58.37488,137.86749,90.36536Zm378.18,204.73386q-30.02664-31.21739-61.60767-61.01252Q736.702,485.22838,727.888,477.1377q-53.79025-49.412-111.11915-93.98694l-.44653-.34726H425.52892V557.26672H809.712Zm-378.18-.50434V386.11087H615.18938q55.27881,42.99975,107.5639,90.81186,9.07855,8.29728,18.03345,16.727,31.3038,29.419,61.14459,60.30969Z" transform="translate(-239.4438 -158.73267)" fill="#fff"/><path d="M608.77959,376.37775c0,41.88122-75.83267,135.18-75.83267,135.18s-75.83267-93.29876-75.83267-135.18a75.83267,75.83267,0,0,1,151.66534,0Z" transform="translate(-239.4438 -158.73267)" fill="#00bfa6"/><path d="M567.61419,373.08068a34.66638,34.66638,0,1,1-34.66638-34.66638A34.65047,34.65047,0,0,1,567.61419,373.08068Z" transform="translate(-239.4438 -158.73267)" fill="#fff" style="isolation:isolate"/><circle cx="293.50312" cy="387.1146" r="20.44185" fill="#00bfa6"/><circle cx="489.36398" cy="100.27214" r="30.22324" fill="#ff6584"/><path d="M823.58447,352.14173H675.31834a3.02384,3.02384,0,0,1-.55407-.0439l70.12308-121.46324a4.90981,4.90981,0,0,1,8.54664,0l47.06138,81.51127,2.25462,3.90031Z" transform="translate(-239.4438 -158.73267)" fill="#fff"/><polygon points="584.141 193.409 533.519 193.409 558.369 157.313 560.157 154.713 561.052 153.413 563.306 157.313 584.141 193.409" opacity="0.2" style="isolation:isolate"/><path d="M906.138,352.14173H777.9l24.85-36.09556,1.78829-2.60022,32.38181-47.03945c2.12294-3.08293,7.23007-3.27491,9.726-.58148a5.853,5.853,0,0,1,.46631.58148Z" transform="translate(-239.4438 -158.73267)" fill="#fff"/><circle cx="676.20989" cy="349.33488" r="15.2965" fill="#fff"/><polygon points="677.685 395.409 674.552 395.409 675.98 347.031 677.685 395.409" fill="#cbcbcb"/><polygon points="676.256 356.2 679.62 351.546 676.21 357.352 675.842 356.707 676.256 356.2" fill="#cbcbcb"/><polygon points="675.888 360.899 672.524 356.246 675.934 362.051 676.302 361.406 675.888 360.899" fill="#cbcbcb"/><circle cx="632.71557" cy="327.36152" r="22.59163" fill="#fff"/><polygon points="634.893 395.409 630.266 395.409 632.376 323.959 634.893 395.409" fill="#cbcbcb"/><polygon points="632.784 337.5 637.751 330.628 632.716 339.202 632.172 338.249 632.784 337.5" fill="#cbcbcb"/><polygon points="632.24 344.441 627.272 337.569 632.308 346.142 632.852 345.19 632.24 344.441" fill="#cbcbcb"/><circle cx="108.20989" cy="349.33488" r="15.2965" fill="#fff"/><polygon points="109.685 395.409 106.552 395.409 107.98 347.031 109.685 395.409" fill="#cbcbcb"/><polygon points="108.256 356.2 111.62 351.546 108.21 357.352 107.842 356.707 108.256 356.2" fill="#cbcbcb"/><polygon points="107.888 360.899 104.524 356.246 107.934 362.051 108.302 361.406 107.888 360.899" fill="#cbcbcb"/><circle cx="64.71557" cy="327.36152" r="22.59163" fill="#fff"/><polygon points="66.893 395.409 62.266 395.409 64.376 323.959 66.893 395.409" fill="#cbcbcb"/><polygon points="64.784 337.5 69.751 330.628 64.716 339.202 64.172 338.249 64.784 337.5" fill="#cbcbcb"/><polygon points="64.24 344.441 59.272 337.569 64.308 346.142 64.852 345.19 64.24 344.441" fill="#cbcbcb"/></svg>`;
    bottom.appendChild(choose_img);
    picture_path(images, '../all img/imgintro/pic 4.svg');
    picture_path(images, '../all img/imgintro/pic 2.svg');
    picture_path(images, '../all img/imgintro/pic 3.svg');
    picture_path(images, '../all img/imgintro/pic 1.svg');

}
// function to create mini picture by path
function picture_path(divImgs, path) {
    let spanImg = document.createElement('span');
    let img = document.createElement('img');
    img.src = path;
    spanImg.appendChild(img);
    let removeImg = document.createElement('span');
    removeImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>`;
    spanImg.appendChild(removeImg);
    divImgs.appendChild(spanImg);
    // functions of this function
    removeImg.onclick = () => {
        spanImg.style = 'scale:0;';
        setTimeout(() => {
            spanImg.remove();
        }, 80);
    }
}
controlTop();
Container();
createPost("../all img/imgcode/linkedin.jpg",'Abdellah Becherair','15 oct 2023','how are skjd sajds sadsfsfw'
,"../all img/imgcode/linkedin.jpg",200,10,4);
createPost("../all img/imgcode/linkedin.jpg",'Abdellah Becherair','15 oct 2023','how are you brothers watsh the problem'
,"../all img/imgcode/Screenshot from 2023-02-16 12-16-32.png",200,10,4);
controlBottom();

