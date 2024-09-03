// Select the cross icon element
let crossbar = document.querySelector(".cross");

// Select the login form box
let loginformmainbox = document.querySelector(".login-form-box");
    
// Add event listener to the cross icon
crossbar.addEventListener('click', () => {
    // Hide the login form
    loginformmainbox.classList.remove("login-form-box-classlist")
    
    
});


// CLICK ON LOGIN BUTTON TO DISPLAY THE LOGIN FORM 

let loginbtn = document.querySelector(".login");
// console.log(loginbutton)

loginbtn.addEventListener('click', ()=>{
    
    loginformmainbox.classList.add("login-form-box-classlist")
    
    
})


let registerbutton = document.querySelector(".register-btn");
console.log(registerbutton);

let loginbutton = document.querySelector(".loginbtn");

let loginpage = document.querySelector(".login-page");
console.log(loginpage);

let registerpage = document.querySelector(".register-page");
console.log(registerpage)
// let registerpage
registerbutton.addEventListener('click', ()=>{

    loginpage.style.display = "none";
    registerpage.style.display = "flex";
    
    
})


loginbutton.addEventListener('click', ()=>{
    
    loginpage.style.display = "flex";
    registerpage.style.display = "none";

})










