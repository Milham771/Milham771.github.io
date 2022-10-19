var user;
var pass;
var nama;
var email;
var pesan;
// const button = document.querySelector(".coba"),
//     toast = document.querySelector(".toast"),
//     closeIcon = document.querySelector(".close"),
//     progress = document.querySelector(".proses");

//     button.addEventListener("click", () =>{
//         toast.classList.add("active");
//         progress.classList.add("active");

//         setTimeout(() =>{
//             toast.classList.remove("active");

//         }, 5000);

//         setTimeout(() =>{
//             progress.classList.remove("active");
//         }, 5300);

//     });
//     classIcon.addEventListener("click", () =>{
//         toast.classList.remove("active");

//         setTimeout(() =>{
//             progress.classList.remove("active");
//         }, 300);
//     });


// document.getElementById("signin").addEventListener ("submit", function (e) {
//     e.preventDefault();
//     user = document.getElementById("username").value;
//     pass = document.getElementById("password").value;
//     // username = "210210501019";
//     // password = "coba";

//      if (localStorage.getItem("datauser") == user && localStorage.getItem("datapassword") == pass) {
//         window.location.href = "index.html";
//     }
//     else if (user == "") {
//         // alert("Masukkan Username dan Password anda!");
//         // document.getElementById("username").value = "";
//         // document.getElementById("password").value = "";
//     }
//     else if (localStorage.getItem("datauser") != user) {
//         alert("Username yang anda masukkan tidak terdaftar");
//         document.getElementById("username").value = "";
//         document.getElementById("password").value = "";

//     }
//     else if (localStorage.getItem("datauser") == user && localStorage.getItem("datapassword") != pass) {
//         alert("Password yang anda masukkan salah");
//         document.getElementById("username").value = "";
//         document.getElementById("password").value = "";

//     }
//     else {
//     }
// })

let namesignup = document.getElementById("namesu");
let usernamesignup = document.getElementById("usernamesu");
let passwordsignup = document.getElementById("passwordsu");

document.getElementById("signup").addEventListener("submit", function (e) {
    e.preventDefault()
    namesignup = document.getElementById("namesu").value;
    usernamesignup = document.getElementById("usernamesu").value;
    passwordsignup = document.getElementById("passwordsu").value;

    localStorage.setItem("dataname", namesignup);
    localStorage.setItem("datauser", usernamesignup);
    localStorage.setItem("datapassword", passwordsignup);
    
    // if
    alert("Akun Berhasil Dibuat!");
    window.location.href = "Formlogin.html";
})

function send(){
    nama = document.getElementById("sendnama").value;
    email = document.getElementById("email").value;
    pesan = document.getElementById("pesan").value;

    if (nama == "" && email == "" && pesan == ""){

    }
    else{
        alert ("Pesan Berhasil Dikirim");
        document.getElementById("sendnama").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pesan").value = "";
    }

}