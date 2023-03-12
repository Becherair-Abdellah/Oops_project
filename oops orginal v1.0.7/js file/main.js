// accessing to body element by name
let body = document.querySelector('body');
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
    addPost.onclick = () => {
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

function createPost(imguser, nameUser, timeCrtPost, textPost, imgPost, number_up, number_down, number_comments, commentsPost, iconPublic) {
    // this variable is not full  when API exist remove it
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
    publicPrivat.innerHTML = `${iconPublic}`;
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
    post.appendChild(bodyPost);
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
        bodyPost.prepend(textBodyPost);
    }
    if (imgPost.length!== 0) {
        console.log(imgPost);
        let imgs = document.createElement('div');
        imgs.classList = 'imgs';
        bodyPost.appendChild(imgs);
        let spans = document.createElement('div');
        spans.classList = 'spans';
        bodyPost.appendChild(spans);
        for(let j = 0;j<imgPost.length;j++){
            let imgBodyPost = document.createElement('img');
            imgBodyPost.src = imgPost[j];
            imgs.appendChild(imgBodyPost);
            imgBodyPost.onclick = ()=>{
                imgBodyPost.style.pointerEvents = 'none';
                body.classList.add('setting');
                imgBodyPost.classList.add('setting');
                body.prepend(imgBodyPost);
                document.querySelector('.container').style.display = 'none';
                document.querySelector('.control-top').style.display = 'none';
                document.querySelector('.control-bottom').style.display = 'none';
                // create div exit
                let exit = document.createElement('span');
                exit.classList = 'exit';
                exit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>`;
                body.appendChild(exit);
                exit.onclick = ()=>{
                    body.classList.remove('setting');
                    imgBodyPost.style.pointerEvents = 'unset';
                    exit.remove();
                    document.querySelector('.container').style.display = 'flex';
                    document.querySelector('.control-top').style.display = 'flex';
                    document.querySelector('.control-bottom').style.display = 'flex';
                    imgBodyPost.classList.remove('setting');
                    imgs.appendChild(imgBodyPost);
                }
            }
            // creaet spans of other image
            let span = document.createElement('span');
            spans.appendChild(span);
            // change color of span
            spans.children[0].style= 'background:var(--yellow-color);scale:1.5;';
            // repeat senarios
            for(let My_img of imgs.children){
                My_img.style = 'display:none;scale:0';
            }
            imgs.children[0].style = 'display:block;';
            setTimeout(()=>{
            imgs.children[0].style = 'scale:1';

            },0)
            span.onclick = ()=>{
                // for spans
                for(let ele of spans.children){
                    ele.style= 'background:gainsboro;scale:1;';
                }
                span.style= 'background:var(--yellow-color);scale:1.5;';
                // for images
                for(let My_img of imgs.children){
                    My_img.style = 'display:none;scale:0';
                }
                imgBodyPost.style = 'display:block;';
                setTimeout(()=>{
                    imgBodyPost.style = 'scale:1;';
                },0)
            }
        }
        
    }
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
            } else {
                nbrcomments.id = 'less';
                nbrcomments.innerText = 'show more comments...';
                allComments.style.display = 'none';
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
    post.style.scale = '0';
    setTimeout(() => {
        post.style.scale = '1';
    });
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
let IsImage = false; // we need this var is global
function add_Post() {
    // create pat image
    // arr of paths
    let paths_img = [];
    // for pass the path
    let path = '';
    // default value
    let ICONpRIVATE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
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
            ICONpRIVATE = icon.innerHTML;
            console.log(ICONpRIVATE);
        }
        public.onclick = () => {
            icon.innerHTML = span_pub.innerHTML;
            ICONpRIVATE = icon.innerHTML;
            console.log(ICONpRIVATE);
        }

    };
    let btnClear = document.createElement('span');
    btnClear.id = 'clear';
    btnClear.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;
    addpost.appendChild(btnClear);
    // textarea
    let Istext = false;
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
        setTimeout(() => {
            document.onclick = () => {
                warning.remove();
                btnClear.style.pointerEvents = 'unset';
            }
        }, 0)
    }
    // check of text area 
    let checker_textarea = setInterval(() => {
        textarea.value.trim() !== '' ? Istext = true : Istext = false;
    }, 0.002);
    // div imags
    let images = document.createElement('div');
    images.classList = 'images';
    addpost.appendChild(images);
    body.appendChild(addpost);
    /* create Counter */
    let counter = document.createElement('div');
    counter.classList = 'counter';
    let nbrone = document.createElement('span');
    nbrone.id = 'nbr-one';
    nbrone.innerText = '0';
    let nbrTwo = document.createElement('span');
    nbrTwo.id = 'nbr-two';
    nbrTwo.innerText = '5';
    counter.appendChild(nbrone);
    counter.appendChild(document.createTextNode('/'));
    counter.appendChild(nbrTwo);
    /* create Counter */
    setTimeout(() => {
        addpost.style.top = '0px';
    }, 200)
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
    // alignment
    let align_text = document.createElement('span');
    align_text.classList = 'align_text';
    align_text.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;
    bottom.appendChild(align_text);
    align_text.onclick = () => {
        if (addpost.classList.toggle('align')) {
            align_text.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;

        } else {
            align_text.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;
        }
    }
    // end alignment
    // choose image
    let choose_img = document.createElement('span');
    choose_img.id = 'choose-img';
    choose_img.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>`;
    bottom.appendChild(choose_img);
    choose_img.onclick = () => {
        images.appendChild(counter);
        let take_image = document.createElement('div');
        take_image.classList = 'take_image';
        // take
        let take = document.createElement('span');
        take.id = 'take-pic';
        take.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"/></svg>`;
        take_image.appendChild(take);
        // upload
        let upload = document.createElement('span');
        upload.id = 'upolad-pic';
        upload.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>`;
        take_image.appendChild(upload);
        bottom.appendChild(take_image);
        setTimeout(() => {
            take_image.style.translate = '0px 25px';
            setTimeout(() => {
                document.onclick = () => {
                    take_image.remove();
                }
            }, 0)
        }, 0);
        take.onclick = async () => {
            // chack if media devices is supported in this browser
            if (!navigator.mediaDevices && !navigator.mediaDevices.getUserMedia) {
                return;
            } else {
                try {
                    let video_take = document.createElement('div');
                    video_take.classList = 'video_take';
                    let video = document.createElement('video');
                    video.autoplay = 'true';
                    // let stream = await navigator.mediaDevices.getUserMedia({
                    //     video:{
                    //         facingMode:{exact:'environment'},
                    //     }
                    // });
                    let stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    video.srcObject = stream;
                    let takePIC = document.createElement('button');
                    takePIC.id = 'take-picture';
                    takePIC.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"/></svg>`;
                    video_take.appendChild(takePIC);
                    video_take.appendChild(video);
                    addpost.appendChild(video_take);
                    // when click at outside remove div video element
                    // when click at button take an pictures by canvas element
                    takePIC.onclick = () => {
                        let canvas = document.createElement('canvas');
                        canvas.width = 1080;
                        canvas.height = 720;
                        let ctx = canvas.getContext('2d');
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        let img = document.createElement('img');
                        let url = canvas.toDataURL('image', 'jpg');
                        path = url;
                        paths_img.push(path);
                        img.src = url;
                        img.width = 1080;
                        img.height = 720;
                        nbrone.innerHTML++;
                        picture_path(images, `${url}`, choose_img, nbrone);
                        IsImage = true;
                        if (nbrone.innerHTML == 5) {
                            choose_img.style.pointerEvents = 'none';
                            choose_img.children[0].style = 'fill: #b6b6b65c;';
                        }

                    }
                    document.onclick = (e) => {
                        if (e.target !== video) {
                            video_take.remove();
                            // stop tracks on this video
                            stream.getTracks()[0].stop();
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }


            }
        }
        upload.onclick = () => {
            let input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/png,image/jpg';
            input.click();
            // let image_load = '';
            input.addEventListener('change', () => {
                const reader = new FileReader();
                reader.readAsDataURL(input.files[0]);
                reader.addEventListener('load', () => {
                    path = reader.result;
                    paths_img.push(path);
                    picture_path(images, `${reader.result}`, choose_img, nbrone);
                    IsImage = true;
                    nbrone.innerHTML++;
                    if (nbrone.innerHTML == 5) {
                        choose_img.style.pointerEvents = 'none';
                        choose_img.children[0].style = 'fill: #b6b6b65c;';
                    }
                });
            })
        }
    }
    // check if post is valid or not
    let checker = setInterval(() => {
        if (Istext || IsImage) {
            btnsend.style = `background: #ff5700;pointer-events:unset;`;
        } else {
            btnsend.style = `background: #ff570054;pointer-events:none;`;

        }
    }, 0.002);
    // when user click at cancel this post remove this page
    btncancel.onclick = () => {
        clearInterval(checker);
        clearInterval(checker_textarea);
        addpost.remove();
        document.querySelector('#add-post').children[0].style = '0deg';
    }
    // when user click at send send post and created
    btnsend.onclick = () => {
        // rest setting
        IsImage = false;
        Istext = false;
        createPost("../all img/imgcode/linkedin.jpg", 'Abdellah Becherair', '15 oct 2023', `${textarea.value}`
            , paths_img, 200, 10, 4, '', ICONpRIVATE);
        addpost.remove();
        document.querySelector('#add-post').children[0].style = '0deg';
    }

}
// function to create mini picture by path
function picture_path(divImgs, path, chooseImg, counter) {
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
        chooseImg.style.pointerEvents = 'unset';
        chooseImg.children[0].style = 'fill: #b6b6b6;';
        counter.innerHTML--;
        counter.innerHTML = counter.innerHTML;
        counter.innerHTML == 0 ? IsImage = false : '';
        spanImg.style = 'scale:0;';
        setTimeout(() => {
            spanImg.remove();
        }, 80);
    }
}
// function action at img
function action_img(img){
    img.onclick = ()=>{
        console.log(img.style.scale = '1.1')
    }
}
controlTop();
Container();
controlBottom();
