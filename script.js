function commit_msg(repo, id) {
    fetch('https://api.github.com/repos/El3m3nt4lIndustri3s/' + repo + '/commits')
        .then(res => res.json())
        .then(out => {
            var commit = out[0].commit;
            var commiter = commit.author.name;
            var commit_msg = commit.message;
            console.log('Output: ', commiter);
            document.getElementById(id).innerHTML = "Committer: " + commiter + ". Message: " + commit_msg;
        }).catch(err => console.error(err));
}
commit_msg("el3m3nt4lindustri3s.github.io", "commit-last");
commit_msg("Marvel-Text-based-game", "dcommit-lastt");

function on_logo_click() {
    console.log("#Flywheel master race")
}

function on_cookie_click() {
   document.getElementById("cookies").style.display = "none"; 
}
