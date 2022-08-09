let friends = ["Shujon", "Aminoor", "Mohammad Saiful", "Shariful Haque", "Rajon Talikdar", "Rasel Sarker", "Kamal", "Apon Khan"];
let highestFriendName = friends [0];

function bestFriend (friends) {
    for (i = 0; i < friends.length; i++) {
        if (highestFriendName.length < friends[i].length) {
            highestFriendName = friends[i]; 
        }
    }
    return highestFriendName;
}

let output = bestFriend (friends);
console.log(output);