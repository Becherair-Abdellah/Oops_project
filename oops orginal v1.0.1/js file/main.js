// accessing to body element by name
let body = document.querySelector('body');
// this variable is not full time when API exist remove it
let nbrComments = 0;
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
    textBodyPost.innerHTML = 'abdelllahbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgbehcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimgabdelllah behcersoiagsd abdellah behcerair he love a best programiimg';
    let imgBodyPost = document.createElement('img');
    imgBodyPost.src = '../all img/imgcode/authentication.svg';
    bodyPost.appendChild(textBodyPost);
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
    let upcounter = document.createElement('span');
    upcounter.id = 'Upcount';
    upcounter.innerHTML = '430'
    intract.appendChild(upcounter);
    let downcounter = document.createElement('span');
    downcounter.id = 'Downcount';
    downcounter.innerHTML = '454'
    let commentcounter = document.createElement('span');
    commentcounter.id = 'commentcount';
    commentcounter.innerHTML = '54'
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
    comments.appendChild(h2Comments);
    post.appendChild(comments);
    // console.log(document.querySelector());
    for (i = 0; i < 15; i++) {
        createComments(comments);
        nbrComments++;
    }
    // create div 'veiw comments ' 
    if (nbrComments > 1) {
        let nbrcomments = document.createElement('span');
        nbrcomments.classList = 'nbr-comments';
        nbrcomments.innerText = 'show more comments...';
        nbrcomments.id = 'less';
        comments.appendChild(nbrcomments);
        let commentsOfPOst = document.querySelectorAll('.comments .commenter');
        for(let i =1;i<commentsOfPOst.length;i++){
            commentsOfPOst[i].style.display = 'none';
        }
        // when click at show more comments show other comments
        nbrcomments.onclick = ()=>{
            if(nbrcomments.id==='less'){
                nbrcomments.id = 'more';
                nbrcomments.innerText = 'show less comments';
                for(let i =1;i<commentsOfPOst.length;i++){
                    commentsOfPOst[i].style.display = 'grid';
                }
            }else{
                nbrcomments.id = 'less';
                nbrcomments.innerText = 'show more comments...';
                for(let i =1;i<commentsOfPOst.length;i++){
                    commentsOfPOst[i].style.display = 'none';
                }
            }
        }
    }
    // create div write Comments
    let writeComment = document.createElement('div');
    writeComment.classList = 'write-comment';
    let imgComment = document.createElement('img');
    imgComment.src = '../all img/imgcode/linkedin.jpg';
    let input = document.createElement('textarea');
    input.classList = 'textarea';
    input.placeholder = 'add your comment';
    let svg = document.createElement('span');
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
    writeComment.appendChild(imgComment);
    writeComment.appendChild(input);
    writeComment.appendChild(svg);
    comments.appendChild(writeComment);
    input.addEventListener('keyup', (e) => {
        input.style.height = 'auto';
        e.target.scrollHeight >= 114 ? input.style.height = `114px` : input.style.height = `${e.target.scrollHeight}px`;
    });
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
    document.querySelectorAll('#comment').forEach((comment) => {
        comment.onclick = () => {
            console.log('comment');
        }
    })
}
// function Comments
function createComments(parent) {
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
    comment.innerText = 'Oops best way to find problem';
    // time of set comment
    let time = document.createElement('span');
    time.id = 'time-comment';
    let nbrTime = 5;
    time.innerHTML = `${nbrTime}min`;
    let name_comment = document.createElement('span');
    name_comment.classList = 'name_comment';
    commenter.appendChild(imgCommenter);
    name_comment.appendChild(time);
    name_comment.appendChild(nameCommenter);
    name_comment.appendChild(comment);
    commenter.appendChild(name_comment);
    parent.appendChild(commenter);
}
controlTop();
Container();
createPost();
controlBottom();
mainSelectors();