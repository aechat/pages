// document.addEventListener("DOMContentLoaded", function() {
//   const videos = document.querySelectorAll('video');

//   videos.forEach(video => {
//       video.setAttribute('autoplay', '');
//       video.setAttribute('preload', 'auto');
//   });

//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//           const video = entry.target;
//           if (entry.isIntersecting) {
//               video.play();
//           } else {
//               video.pause();
//           }
//       });
//   }, {
//       threshold: 0.25
//   });

//   videos.forEach(video => {
//       observer.observe(video);
//   });
// });