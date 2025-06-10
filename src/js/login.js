document.addEventListener('DOMContentLoaded',()=>{

    const loginForm =document.getElementById("form-login");

    if(loginForm){
        loginForm.addEventListener('submit',(e)=>{
            e.preventDefault();

            const username=document.getElementById("username").value;
            const paswword =document.getElementById("password").value;

            localStorage.getItem("username");
            localStorage.getItem("password");


            if(username === "admin" && paswword === "123456"){

                let token = Math.random().toString(16).substring(2)+
                            Math.random().toString(16).substring(2)
                            
                localStorage.setItem("username",username);
                localStorage.setItem("password",token);


                setTimeout(()=>{
                    window.location.href="index.html";
                },1000)
            }
            else{
                alert("usuario e senha invalidos")
            }
            loginForm.reset();
        })
    }

})