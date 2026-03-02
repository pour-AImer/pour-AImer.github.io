var posts=["2026/03/01/Joes-with-Tiger-and-Fishes/","2026/03/02/Flowers-and-Alice/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };