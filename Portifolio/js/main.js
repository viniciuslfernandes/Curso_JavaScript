
function updateProfileInfo(profileData){
    const photo = document.getElementById("profile.photo")
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById("profile.name")
    name.innerText = profileData.name

    const job = document.getElementById("profile.job")
    job.innerText = profileData.job

    const location = document.getElementById("profile.location")
    location.innerText = profileData.location

    const whatsapp = document.getElementById("profile.whatsapp")
    whatsapp.innerText = profileData.whatsapp

    const email = document.getElementById("profile.email")
    email.innerText = profileData.email
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById("profile.skills.softSkills")

    softSkills.innerHTML = profileData.skills.softSkills.map(skill =>`<li>${skill}</li>`).join("")
}

(async function(){
    const profileData = await fetchProfileDate()
    updateProfileInfo(profileData)    
    updateSoftSkills(profileData)    
})()