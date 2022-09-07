$(() => {
    $("#navbar").load("./components/navbar.html", loginifNeeded );
    $("#footer").load("./components/footer.html");
    $("#content").load("./components/all-posts.html");


})

function loginifNeeded() {

    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null

    if (!currentUser) {
        $.post('/api/users', {}, (user) => {
            if (user) {
                // console.log( user);
                // console.log('Logged in as', user.username)
                window.localStorage.user = JSON.stringify(user)
                $('#userId').text(currentUser.username);
            }


        })
    } else {
        // console.log(currentUser);
        // console.log('Resuming session as', currentUser.username)
        $('#userId').text(currentUser.username);

    }
}