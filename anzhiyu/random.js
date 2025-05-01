var posts=["2025/04/30/hello-world/","2025/04/30/mapstruct的使用/","2025/05/01/test-1/","2025/04/30/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };