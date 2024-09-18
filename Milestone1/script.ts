const toggleButton = document.getElementById ('toggleskill') as HTMLButtonElement
const skill = document.getElementById ('skills') as HTMLButtonElement

toggleButton.addEventListener ('click',()=>{
    if (skill.style.display === "none"){
        skill.style.display = "block"
    } else {
        skill.style.display = "none"
    }
})