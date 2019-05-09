
function insertData(ProfileImage, userName, userEmail, userPassword, userConfirmPassword) {


    var database = firebase.database();

    var rootRef = firebase.database().ref();
    var storesRef = rootRef.child('profile/data/user/');
    var newStoreRef = storesRef.push();
    newStoreRef.set({
        ProfileImage: ProfileImage,
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        userConfirmPassword: userConfirmPassword
    });
    signUp();
    console.log("Success!!")
    alert("Register success!")
}

function signUp() {
    var email = document.getElementById('userEmail').value;
    var password = document.getElementById('userPassword').value;
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
    email = document.getElementById("userEmail").value
    password = document.getElementById("userPassword").value
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (resp) {
        console.log(resp)

        // localStorage.setItem("email", email);
        window.location.href = "homeUser.html";

    }).catch(function (err) {
        console.log(err)
        ons.notification.alert(err.message)
    })
}


function btnProfile() {
    localStorage.setItem("email", email);
    window.location = 'profileUser.html';
}

function btnHome() {
    window.location = 'homeUser.html';
}


//SET CATEGORY MOVIE//
// function btnNewmovie() {
//     var categoryMovie = "NewMovie";
//     localStorage.setItem("categoryMovie", categoryMovie);
//     window.location = 'categoryMovie.html';
// }

function btnAction() {
    var categoryMovie = "Action";
    localStorage.setItem("uidUser", uidUser);
    localStorage.setItem("email", email);
    localStorage.setItem("categoryMovie", categoryMovie);
    window.location = 'categoryMovie.html';}

function btnScifi() {
    var categoryMovie = "SciFi";
    localStorage.setItem("uidUser", uidUser);
    localStorage.setItem("email", email);
    localStorage.setItem("categoryMovie", categoryMovie);
    window.location = 'categoryMovie.html';}

function btnAdventure() {
    var categoryMovie = "Adventure";
    localStorage.setItem("uidUser", uidUser);
    localStorage.setItem("email", email);
    localStorage.setItem("categoryMovie", categoryMovie);
    window.location = 'categoryMovie.html';}

function btnAnimation() {
    var categoryMovie = "Animation";
    localStorage.setItem("uidUser", uidUser);
    localStorage.setItem("email", email);
    localStorage.setItem("categoryMovie", categoryMovie);
    window.location = 'categoryMovie.html';}

function btnFantasy() {
    var categoryMovie = "Fantasy";
    localStorage.setItem("uidUser", uidUser);
    localStorage.setItem("email", email);
    localStorage.setItem("categoryMovie", categoryMovie);
    window.location = 'categoryMovie.html';}

function btnComedy() {
    var categoryMovie = "Comedy";
    localStorage.setItem("uidUser", uidUser);
    localStorage.setItem("email", email);
    localStorage.setItem("categoryMovie", categoryMovie);
    window.location = 'categoryMovie.html';}

function btnRomance() {
    var categoryMovie = "Romance";
    localStorage.setItem("uidUser", uidUser);
    localStorage.setItem("email", email);
    localStorage.setItem("categoryMovie", categoryMovie);
    window.location = 'categoryMovie.html';}

function btnHorror() {
    var categoryMovie = "Horror";
    localStorage.setItem("uidUser", uidUser);
    localStorage.setItem("email", email);
    localStorage.setItem("categoryMovie", categoryMovie);
    window.location = 'categoryMovie.html';}

function btnDrama() {
    var categoryMovie = "Drama";
    localStorage.setItem("uidUser", uidUser);
    localStorage.setItem("email", email);
    localStorage.setItem("categoryMovie", categoryMovie);
    window.location = 'categoryMovie.html';}
