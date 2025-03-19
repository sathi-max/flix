const video = [
    {
        url: 'Trailer_video/SpiderMan_No_way_home.mp4',
        title: 'Spider-Man No Way Home',
        description: 'When his identity is exposed, with Spider-Man identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.'
    },
    {
        url:'Trailer_video/Godzilla_vs_kong_the_new_empire.mp4',
        title:'Godzilla x Kong: The New Empire',
        description:'Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Islands mysteries.'

    }
];

function randomvideo() {
    const ran = Math.floor(Math.random() * video.length);
    return video[ran];
}
const videocard = document.getElementById('background-video');

function setContent() {
    
    const videoSource = document.getElementById('VideoSource');
    const titles = document.getElementById('Title');
    const descriptions = document.getElementById('Description');


    if (videocard && videoSource && titles && descriptions) {
        const { url, title, description } = randomvideo();
        videoSource.src = url;
        videocard.load();
        titles.textContent = title;
        descriptions.textContent = description;
    }
    
}

document.addEventListener("DOMContentLoaded", setContent);

