


let loginButton = document.getElementById("loginButton")

let user ={
    userName:"",
    email:"",
    password:"",
}

loginButton.onclick = ()=>{
    // event.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    
    
    if((email==="admin@user.com")&& (password==="123456")){
        // user.userName=name
        // user.email=email
        // user.password=password
        window.location.href="home.html"
        // document.getElementById("userName").innerText = userName;
    }else{
        Toastify({
            
            text: "Wrong Email or Password",
            
            duration: 3000
            
        }).showToast();
    }
}








