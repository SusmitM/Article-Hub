let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null

function myPosts() {


    $.get('/api/posts', {}, (posts) => {
        for (let p of posts) {
            if (p.user.username == currentUser.username) {
                $('.posts-container').append(
                    $(`
                    
                    <div class="col-4">
                    <div class="card m-2" style="width: 22rem;">
                   <div class="card-body">
                   <h5 class="card-title">${p.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">By- ${p.user.username}</h6>
                     <p class="card-text"> ${p.body.substr(0,200)} 
                     <a href="#">...Read more</a></p>

                      <a hidden  href="#" class="card-link">Comment</a>
                      <a hidden  href="#" class="card-link">like</a>
                      <hr>

                      <input  style="width: 15rem; margin-bottom:1rem " name="comment" placeholder="Enter Comments...">
                      <button type="submit" style="width: 3rem; padding:0rem; margin:0rem">Post</button>
                      
                      <nav  style="border: 0.1rem solid black">
                      <ul>
                          <li>Link 1 this is a ssamole comment to test the width of the post</li>
                          <li>Link 2</li>
                          <li>Link 3</li>
                          <li>Link 4</li>
                          <li>Link 5</li>
                          <li>Link 6</li>
          
                      </ul>
                  </nav>
                           </div>
                           </div> 
                           </div>
                    `)
                )
            }
            

                

            

        }




    })


}