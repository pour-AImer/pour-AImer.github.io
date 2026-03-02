var posts=["2026/03/01/Joes-with-Tiger-and-Fishes/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };