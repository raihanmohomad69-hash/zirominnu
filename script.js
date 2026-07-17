<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="box">

    <h1>Register</h1>

    <input type="text" id="username" placeholder="Username">

    <input type="password" id="password" placeholder="Password">

    <button onclick="register()">Register</button>

    <p>Already have account?</p>
    <a href="login.html">Login</a>

</div>


<script>

function register(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;


    if(user=="" || pass==""){
        alert("Fill all details");
        return;
    }


    localStorage.setItem("username",user);
    localStorage.setItem("password",pass);


    alert("Register Successfully!");

    window.location.href="login.html";

}

</script>


</body>
</html>