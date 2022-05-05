//  Main Variables  //

let TheInput = document.querySelector(".fetch__get-input"),
    GetButton = document.querySelector(".fetch__get-button"),
    ReposData = document.querySelector(".fetch__show-data");
    
GetButton.onclick = function () {
  GetRepos();
}


// Get Repos Function 
function GetRepos() { "use strict";
  if (TheInput.value == "") { 
    ReposData.innerHTML ="<span> please Write Github Username.</span>";
  }else{
    fetch(`https://api.github.com/users/${TheInput.value}/repos`)
      
    .then(response => response.json())
    
    .then(result => { 


      // Empty The Container
      ReposData.innerHTML ="";

      result.forEach(repo => {
        // Create Main Div Element 
        let MainDiv = document.createElement("div");
        MainDiv.className = 'repo';
        // Create Repo Name Text 
        let RepoName = document.createElement("p");
        RepoName.textContent = repo.name;
        // Append The Text To Main Div
        MainDiv.appendChild(RepoName);


        // Create Repo URL Anchor 
        let TheUrl = document.createElement("a");
        // The Text for url
        TheUrl.textContent = "Visit";
        // Add The href link
        TheUrl.setAttribute("href", `https://github.com/${TheInput.value}/${repo.name}`);
        // Set The Target Blank 
        TheUrl.setAttribute("target", `_blank`);
        MainDiv.appendChild(TheUrl);

        // Append The Main Div To Container 
        ReposData.appendChild(MainDiv);
       });

      });
      
  } 
}





// your personal access token now. You won’t be able to see it again!

//  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

