let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null

function myPosts() {


    $.get('/api/posts', {}, (posts) => {
        for (let p of posts) {
            if (p.user.username == currentUser.username) {
                $('.posts-container').append(
                    $(`
                    
                    <div class="col-4">
                    <div class="card m-2" style="width: 18rem;">
                   <div class="card-body">
                   <h5 class="card-title">${p.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">By- ${p.user.username}</h6>
                     <p class="card-text"> ${p.body.substr(0,200)} 
                     <a href="#">...Read more</a></p>
                      <a hidden  href="#" class="card-link">Comment</a>
                      <a hidden  href="#" class="card-link">like</a>
                           </div>
                           </div> 
                           </div>
                    `)
                )
            }
            

                

            

        }




    })


}