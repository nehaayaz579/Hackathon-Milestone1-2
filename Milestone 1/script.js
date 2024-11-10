/*const toggleButton =document.getElementById("toggler-skills") as HTMLButtonElement
const skill = document.getElementById("skills") as HTMLElement

toggleButton.addEventListener("click",()=>{
    if(skill.style.display ==="none"){
        skill.style.display='block'
    }else{
        skill.style.display='none'
    }
});*/
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById("toggler-skills");
    var skillsSection = document.getElementById("skill");
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
