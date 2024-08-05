function fetchProfile() {
    const username = document.getElementById('username').value;
    const profileDiv = document.getElementById('profile');

    // Fetch profile data from GitHub API
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            // Display profile information
            profileDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.bio || 'No bio available'}</p>
                <img src="${data.avatar_url}" alt="Profile picture">
                <h2>NO. of public repos:${data.public_repos}</h2>
                <h3>Followers:${data.followers}</h3>
                <h3>Following:${data.following}</h3>
                <h3> ${data.blog}</h3>
                <h3>${data.location}</h3>
            `;
        })
        .catch(error => {
            profileDiv.innerHTML = `<p class="error">${error.message}</p>`;
        });
}
