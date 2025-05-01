var posts=["2025/04/30/mapstruct的使用/","2025/05/01/git命令的使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };