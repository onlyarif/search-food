const buddues = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
buddues()
const displayBuddies = data => {
    const bondhura = data.results;
    console.log(bondhura)
    const bondhuraDiv = document.getElementById('buddies');
    for (const bondho of bondhura) {
       
        const create = document.createElement('p')
        bondhuraDiv.appendChild(create);

        create.innerText = `Name:${bondho.name.first} ${bondho.name.last} ,email:${bondho.email}`
    }
    
}