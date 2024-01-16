document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-avatar');
    const profileName = document.querySelector('.profile-name');
    const profileUsername = document.querySelector('.profile-username');
    const profileRepositories = document.querySelector('#repositories');
    const profileFollowers = document.querySelector('#followers');
    const profileFollowing = document.querySelector('#following');
    const profileLink = document.querySelector('.profile-link');
    
    fetch('https://api.github.com/users/pedrohenrique11')
    .then(response =>{
        return response.json()
    })
    .then(data => {
        profileName.innerText = data.name;
        profileImage.src = data.avatar_url;
        profileUsername.innerText = data.login;
        profileRepositories.innerText = data.public_repos;
        profileFollowers.innerText = data.followers;
        profileFollowing.innerText = data.following;
        profileLink.href = data.html_url;

    })
})