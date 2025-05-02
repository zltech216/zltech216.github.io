var posts=["2025/05/02/MCP框架/","2025/05/01/ip归属地的获取和使用/","2025/05/01/git命令的常用操作/","2025/04/30/mapstruct的使用/","2025/05/01/游标翻页/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };