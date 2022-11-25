let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null

function myPosts() {


    $.get('/api/posts', {}, (posts) => {
        for (let p of posts) {
            let item = $(`
            <div class="col-4" style="  flex: max-content; width: 0%;">
            <div class="card m-2" style="width: 22rem;">
           <div class="card-body">
           <h5 class="card-title">${p.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">By- ${p.user.username}</h6>
             <p class="card-text"> ${p.body.substr(0,200)} 
             <button class ="btnReadMore btn btn-link">Read more</button></p>
               <hr>
               <input  style="width: 15rem; margin-bottom:1rem " class="newComment" placeholder="Enter Comments...">
               <button class="btnComment" style="width: 3rem; padding:0rem; margin:0rem">Post</button>
               
               <nav  style="border: 0.1rem solid black">
               <ul class="comment"></ul>
           </nav>
             </div>
             </div> 
             </div>
            `);

            //READ MORE FUNCTION
            let cardText = item.find(".card-text");
            item.find(".btnReadMore").on("click", () => {

                cardText.text(p.body);
            })


            //GET COMMENTS FROM DB
            let commentBox = item.find(".comment")
            $.get('/api/comments', {}, (comments) => {
                for (let c of comments) {
                    if (p.id === c.postId) {
                        commentBox.append(
                            $("<li></li>").text(`[${c.user.username}] : ${c.title}`)
                        );
                    }
                }
            })

            //POST COMMENTS TO DB
            item.find(".btnComment").on("click", () => {
                $.post("/api/comments", {
                        userId: currentUser.id,
                        postId: p.id,
                        title: item.find(".newComment").val()
                    },
                    (comment) => {
                        $("#content").load("./components/my-post.html");
                    }
                );
            });

            //APPEND item TO post-container
            let item2 = $(`<h1>It looks empty here... Please write a article first ;)</h1>`);
          
            if (p.user.username === currentUser.username) {
                $('.posts-container').append(item);
            }
           

           





        }




    })
  


}