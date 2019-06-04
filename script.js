fetch('https://api.github.com/repos/El3m3nt4lIndustri3s/el3m3nt4lindustri3s.github.io/commits')
            .then(res => res.json())
            .then(out => {
                var commit = out[0].commit;
                var commiter = commit.author.name;
                var commit_msg = commit.message;
                console.log('Output: ', commit);
                document.getElementById("commit-last").innerHTML = "Committer: " + commiter + ". Message: " + commit_msg;
            }).catch(err => console.error(err));

fetch('https://api.github.com/repos/El3m3nt4lIndustri3s/Marvel-Text-based-game/commits')
            .then(res => res.json())
            .then(out => {
                var commit = out[0].commit;
                var commiter = commit.author.name;
                var commit_msg = commit.message;
                console.log('Output: ', commiter);
                document.getElementById("dcommit-lastt").innerHTML = "Committer: " + commiter + ". Message: " + commit_msg;
            }).catch(err => console.error(err));
