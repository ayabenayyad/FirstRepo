
var teams = [];


function addTeam(team) {
    if (!teams.includes(team)) {
        teams.push(team);
        console.log(team + " has been added to the list");
    } else {
        console.log(team + " is already on the list");
    }
}
//testttt
function showList() {
    console.log("Finals liste :");
    teams.forEach(function(team) {
        console.log(team);
    });
}

function deleteTeam(team) {
    var index = teams.indexOf(team);
    if (index !== -1) {
        teams.splice(index, 1);
        console.log(team + " has been deleted from the list");
    } else {
        console.log(team + " deosnt exsit on the list");
    }
}


addTeam("T1");
addTeam("GENG");
addTeam("HLE");
showList(); 
deleteTeam("GENG");
showList();