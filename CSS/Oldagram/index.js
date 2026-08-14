// const posts = [
//   {
//     name: "Vincent van Gogh",
//     username: "vincey1853",
//     location: "Zundert, Netherlands",
//     avatar: "images/avatar-vangogh.jpg",
//     post: "images/post-vangogh.jpg",
//     comment: "just took a few mushrooms lol",
//     likes: 21492
//   },
//   {
//     name: "Gustave Courbet",
//     username: "gus1819",
//     location: "Ornans, France",
//     avatar: "images/avatar-courbet.jpg",
//     post: "images/post-courbet.jpg",
//     comment: "i'm feelin a bit stressed tbh",
//     likes: 4
//   },
//   {
//     name: "Joseph Ducreux",
//     username: "jd1735",
//     location: "Paris, France",
//     avatar: "images/avatar-ducreux.jpg",
//     post: "images/post-ducreux.jpg",
//     comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
//     likes: 152
//   }
// ]

// // Render posts into the page and add basic like interactions.
// // Uses the existing <main> element as the feed container.
// (function () {
//   const feedContainer = document.querySelector('main');

//   function formatLikes(n) {
//     // simple formatting with commas
//     return n.toLocaleString();
//   }

//   function createPostHTML(post, index) {
//     return `
//       <article class="post" data-index="${index}">
//         <header class="post-header">
//           <img class="avatar" src="${post.avatar}" alt="${post.name} avatar" width="50" height="50" />
//           <div class="author">
//             <h3>${post.name}</h3>
//             <p class="location">${post.location}</p>
//           </div>
//         </header>

//         <div class="post-photo">
//           <img class="post-img" src="${post.post}" alt="Post by ${post.username}" />
//         </div>

//         <div class="post-actions">
//           <img src="images/icon-heart.png" alt="Like" class="like-icon" data-index="${index}" width="28" />
//           <img src="images/icon-comment.png" alt="Comment" class="comment-icon" width="28" />
//           <img src="images/icon-dm.png" alt="Share" class="share-icon" width="28" />
//         </div>

//         <div class="post-meta">
//           <p class="likes"><span class="likes-count">${formatLikes(post.likes)}</span> likes</p>
//           <p class="caption"><strong>${post.username}</strong> ${post.comment}</p>
//         </div>
//       </article>
//     `
//   }

//   function render() {
//     if (!feedContainer) return;
//     feedContainer.innerHTML = '';
//     posts.forEach((p, i) => {
//       feedContainer.insertAdjacentHTML('beforeend', createPostHTML(p, i))
//     })

//     attachEventHandlers()
//   }

//   function attachEventHandlers() {
//     const likeIcons = document.querySelectorAll('.like-icon')
//     likeIcons.forEach(icon => {
//       const idx = parseInt(icon.dataset.index, 10)
//       icon.addEventListener('click', () => toggleLike(idx, icon))
//     })

//     // double-click image to like
//     const postImages = document.querySelectorAll('.post-img')
//     postImages.forEach(img => {
//       const article = img.closest('.post')
//       const idx = parseInt(article.dataset.index, 10)
//       img.addEventListener('dblclick', () => {
//         const icon = article.querySelector('.like-icon')
//         toggleLike(idx, icon)
//       })
//     })
//   }

//   function toggleLike(index, iconElement) {
//     const post = posts[index]
//     const article = iconElement.closest('.post')
//     const likesCountEl = article.querySelector('.likes-count')

//     // Use a custom property on the DOM element to keep track of liked state per post in this session.
//     const liked = !!iconElement.dataset.liked
//     if (!liked) {
//       post.likes += 1
//       iconElement.dataset.liked = 'true'
//       // tint the icon red to show liked state (works without an alternate image)

//       iconElement.style.filter = 'invert(26%) sepia(83%) saturate(5875%) hue-rotate(333deg) brightness(96%) contrast(101%)'
//     } else {
//       post.likes = Math.max(0, post.likes - 1)
//       delete iconElement.dataset.liked
//       iconElement.style.filter = ''
//     }

//     likesCountEl.textContent = formatLikes(post.likes)
//   }

//   // initial render
//   render()
// })()

const increaseLikes = document.querySelector(".like-icon");
const likesCount = document.querySelector("#likes-count");

increaseLikes.addEventListener("click", function () {
  let currentLikes = parseInt(likesCount.textContent);
  currentLikes++ + " likes";
  likesCount.textContent = currentLikes;
});
