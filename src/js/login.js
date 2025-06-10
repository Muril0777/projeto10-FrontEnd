document.addEventListener('DOMContentLoaded',()=>{
    
    const loginForm = document.getElementById('form-login')

    if(loginForm){
        loginForm.addEventListener('submit',(e)=>{
            e.preventDefault();


            const username=document.getElementById('username').ariaValueMax;
            const password=document.getElementById('password').ariaValueMax;

            if(username === 'admin' && password === "123456"){
                setTimeout(()=>{
                    window.location.href="index.html"
                },1000)
            }
            else{
                alert("usuario e senha invalidos")
            }
            loginForm.reset();
        })
    }

})