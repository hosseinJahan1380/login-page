
document.addEventListener('DOMContentLoaded', () => {
    const sign_up_link = document.getElementById("sign-up-link");
    const sign_up_page = document.getElementById("sign-up-form")
    const sign_in_page = document.getElementById("sign-in-form")
    const sign_in_link = document.getElementById("sign-in-link")
    const forgot_password_page = document.getElementById("forgot-password-form")
    const forgot_password_link = document.getElementById("forgot-password-link")
    

    sign_up_link.addEventListener("click" ,(e)=>{
        e.preventDefault()
        console.log("sign up button was clicked")
            sign_in_page.classList.add("hidden")
            sign_up_page.classList.remove("hidden")
            document.body.style.backgroundColor = "#85FFBD"
            document.body.style.backgroundImage = "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)"
    })

    sign_in_link.addEventListener("click" ,(e)=>{
        e.preventDefault()
        console.log("sign in button was clicked")

        sign_up_page.classList.add("hidden")
        sign_in_page.classList.remove("hidden")
        // document.body.style.backgroundColor = "#52ACFF"
        document.body.style.backgroundImage = "linear-gradient(to right, #a18cd1, #fbc2eb)"
    })

    forgot_password_link.addEventListener("click" ,(e)=>{
        e.preventDefault()
        console.log("forgot password button was clicked")


        sign_in_page.classList.add("hidden")
        forgot_password_page.classList.remove("hidden")
        

        document.body.style.backgroundImage= "linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)";
        document.body.style.backgroundColor="#FAD961"

                
        document.querySelector('.container').style.backgroundColor = "#fec2cb"
        document.querySelector('.container').style.borderRadius = "27px"
        document.querySelector('.container').style.boxShadow = "6px -6px 6px #d0d3b3,6px 6px 6px #ffffe9;"
    })
})