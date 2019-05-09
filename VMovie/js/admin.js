function signUp() {
    var email = document.getElementById('adminEmail').value;
    var password = document.getElementById('adminPassword').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.Message;
        if (errorCode === 'auth/weak-password') {
            alert('The password is too weak');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    })
}

function btnLogin() {
    email = document.getElementById("adminEmail").value
    password = document.getElementById("adminPassword").value
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (resp) {
        console.log(resp)

        localStorage.setItem("adminEmail", email);
        window.location.href = "adminProfile.html";

    }).catch(function (err) {
        console.log(err)
        ons.notification.alert(err.message)
    })
}



function btnAction() {
    var movieType="Action";
    localStorage.setItem("movieType", movieType);
    window.location = 'editMovieChangetype.html';} 

function btnScifi() {
    var movieType = "SciFi";
    localStorage.setItem("movieType", movieType);
    window.location = 'editMovieChangetype.html';}

function btnAdventure() {
    var movieType = "Adventure";
    localStorage.setItem("movieType", movieType);
    window.location = 'editMovieChangetype.html';}

function btnAnimation() {
    var movieType = "Animation";
    localStorage.setItem("movieType", movieType);
    window.location = 'editMovieChangetype.html';}

function btnFantasy() {
    var movieType = "Fantasy";
    localStorage.setItem("movieType", movieType);
    window.location = 'editMovieChangetype.html';}

function btnComedy() {
    var movieType = "Comedy";
    localStorage.setItem("movieType", movieType);
    window.location = 'editMovieChangetype.html';}

function btnRomance() {
    var movieType = "Romance";
    localStorage.setItem("movieType", movieType);
    window.location = 'editMovieChangetype.html';}

function btnHorror() {
    var movieType = "Horror";
    localStorage.setItem("movieType", movieType);
    window.location = 'editMovieChangetype.html';}

function btnDrama() {
    var movieType = "Drama";
    localStorage.setItem("movieType", movieType);
    window.location = 'editMovieChangetype.html';}

