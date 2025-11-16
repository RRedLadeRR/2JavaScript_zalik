sentenceArray = ["Are you creative, do you like organizing, and do you want to become part of the dynamic world of business? Do you desire a quality economic education, do you want to master IT technologies, and use your language skills in an international environment? Then the Bachelor's program in Business Management is exactly for you."];

const sentence = sentenceArray[0];

const words = sentence.toLowerCase().replace(/[.,!?-]/g, "").split(" ");

const wordGroups = {};

document.getElementById(info);

words.forEach(word => {
    if (word == "") return; 

    const firstLetter = word[0];

    if (!wordGroups[firstLetter]) {
        wordGroups[firstLetter] = [];
    }

    wordGroups[firstLetter].push(word);
});

for (const letter in wordGroups) {

    const group = wordGroups[letter];

    if (group.length > 1) {
        // info.innerHTML += (`${group.join(', ')}<br>`);
        info.innerHTML += (`<p><b>${letter.toUpperCase()}:</b> ${group.join(', ')}</p>`);
    }

};