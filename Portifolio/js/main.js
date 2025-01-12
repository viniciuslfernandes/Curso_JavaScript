
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

function updateHardSkills(profileData){
    const hardSkills = document.getElementById("profile.skills.hardSkills")
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill =>`<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join("")
}

function updatePortifolio(profileData){
    console.log(profileData)
    const portfolio = document.getElementById("profile.portfolio")
    console.log(portfolio)
    portfolio.innerHTML = profileData.portfolio.map(projeto =>{
        return `
        <li>
            <h3 ${projeto.github ? 'class="github"' : ''}>${projeto.name}</h3>
            <a href="${projeto.url}" target="_blank">${projeto.url}</a>
        </li>
        `
    }).join("")
}

function updateExperienceProfessional(profileData){
    const experience = document.getElementById("profile.professionalExperience")
    experience.innerHTML = profileData.professionalExperience.map(exp =>{
        return `
            <li>
                <h3 class="title">${exp.name}</h3>
                <p class="period ">${exp.period}</p>
                <p >${exp.description}</p>
            </li>
        `}).join("")
}


(async function(){
    const profileData = await fetchProfileDate()
    updateProfileInfo(profileData)    
    updateSoftSkills(profileData)    
    updateHardSkills(profileData)
    updatePortifolio(profileData)
    updateExperienceProfessional(profileData)
})()