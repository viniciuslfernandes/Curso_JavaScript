
async function fetchProfileDate(){
    const url = "https://raw.githubusercontent.com/viniciuslfernandes/Curso_JavaScript/refs/heads/main/Portifolio/data/profile.json?token=GHSAT0AAAAAAC5BANPZO3GVFMLUMAWIVWT4Z37BILQ"
    const fetching = await fetch(url)
    return await fetching.json()
}


