const ptitle = document.querySelector("#ptitle");
const pbody = document.querySelector("#pbody");

let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null




$("#submitBtn").click(function () {



  $.post('/api/posts', {
      userId: currentUser.id,
      title: ptitle.value,
      body: pbody.value
    })
    .done(function () {
      alert("Post added successfully");
    })
    .fail(function () {
      alert("Oops the post cannot be added");
    });

  





});