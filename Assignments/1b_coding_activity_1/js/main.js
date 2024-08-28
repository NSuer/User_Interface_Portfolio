console.log("Hello!  This is your javascript file."); 
// 2. Add an event listener for the user's sleep entry and other buttons (e.g., mood checkboxes)
document.getElementById("sleepHours").addEventListener("change", sleepHoursFunc);
function sleepHoursFunc() {
    let sleepHours = document.getElementById("sleepHours").value;
    console.log("The user slept for " + sleepHours + " hours");
    updateUserEntriesArray();
}

document.getElementById("MoodCheckboxEnergetic").addEventListener("click", MoodCheckboxEnergeticFunc);
function MoodCheckboxEnergeticFunc() {
    let mood = document.getElementById("MoodCheckboxEnergetic").checked;
    if (mood) {
        console.log("The user is Energetic");
    } else {
        console.log("The user is not Energetic");
    }
    updateUserEntriesArray();
}

document.getElementById("MoodCheckboxAnxious").addEventListener("click", MoodCheckboxAnxiousFunc);
function MoodCheckboxAnxiousFunc() {
    let mood = document.getElementById("MoodCheckboxAnxious").checked;
    if (mood) {
        console.log("The user is Anxious");
    } else {
        console.log("The user is not Anxious");
    }
    updateUserEntriesArray();
}

document.getElementById("MoodCheckboxMotivated").addEventListener("click", MoodCheckboxMotivatedFunc);
function MoodCheckboxMotivatedFunc() {
    let mood = document.getElementById("MoodCheckboxMotivated").checked;
    if (mood) {
        console.log("The user is Motivated");
    } else {
        console.log("The user is not Motivated");
    }
    updateUserEntriesArray();
}

document.getElementById("MoodCheckboxSad").addEventListener("click", MoodCheckboxSadFunc);
function MoodCheckboxSadFunc() {
    let mood = document.getElementById("MoodCheckboxSad").checked;
    if (mood) {
        console.log("The user is Sad");
    } else {
        console.log("The user is not Sad");
    }
    updateUserEntriesArray();
}

document.getElementById("MoodCheckboxHappy").addEventListener("click", MoodCheckboxHappyFunc);
function MoodCheckboxHappyFunc() {
    let mood = document.getElementById("MoodCheckboxHappy").checked;
    if (mood) {
        console.log("The user is Happy");
    } else {
        console.log("The user is not Happy");
    }
    updateUserEntriesArray();
}

document.getElementById("MoodCheckboxTired").addEventListener("click", MoodCheckboxTiredFunc);
function MoodCheckboxTiredFunc() {
    let mood = document.getElementById("MoodCheckboxTired").checked;
    if (mood) {
        console.log("The user is Tired");
    } else {
        console.log("The user is not Tired");
    }
    updateUserEntriesArray();
}

document.getElementById("MoodCheckboxExcited").addEventListener("click", MoodCheckboxExcitedFunc);
function MoodCheckboxExcitedFunc() {
    let mood = document.getElementById("MoodCheckboxExcited").checked;
    if (mood) {
        console.log("The user is Excited");
    } else {
        console.log("The user is not Excited");
    }
    updateUserEntriesArray();
}

// 3. Create an array objects that stores the user entries.  
// Add some dummy data for a few days before today.  
// Think about what fields would be useful in this array.  
// If the user interacts with the page, update the array object for the current day. 

let userEntries = {
    date: "",
    time: "",
    imageName: "",
    QuoteOfTheDay: "",
    JournalEntry: "",
    sleepHours: 0,
    mood: {
        energetic: false,
        anxious: false,
        motivated: false,
        sad: false,
        happy: false,
        tired: false,
        excited: false
    }
};

// fill array with dummy data
let userEntriesArray = [
    {
        date: "06/01/24",
        time: "12:00 AM",
        imageName: "fake.png",
        QuoteOfTheDay: "fake quote",
        JournalEntry: "empty entry",
        sleepHours: 5,
        mood: {
            energetic: false,
            anxious: true,
            motivated: false,
            sad: false,
            happy: false,
            tired: false,
            excited: false
        }
    },
    {
        date: "06/02/24",
        time: "12:00 AM",
        imageName: "fake.png",
        QuoteOfTheDay: "fake quote",
        JournalEntry: "empty entry",
        sleepHours: 6,
        mood: {
            energetic: false,
            anxious: false,
            motivated: true,
            sad: false,
            happy: false,
            tired: false,
            excited: false
        }
    },
    {
        date: "06/03/24",
        time: "12:00 AM",
        imageName: "fake.png",
        QuoteOfTheDay: "fake quote",
        JournalEntry: "empty entry",
        sleepHours: 7,
        mood: {
            energetic: false,
            anxious: false,
            motivated: false,
            sad: false,
            happy: true,
            tired: false,
            excited: false
        }
    },
    {
        date: "06/04/24",
        time: "12:00 AM",
        imageName: "fake.png",
        QuoteOfTheDay: "fake quote",
        JournalEntry: "empty entry",
        sleepHours: 8,
        mood: {
            energetic: true,
            anxious: false,
            motivated: false,
            sad: false,
            happy: false,
            tired: false,
            excited: false
        }
    }
];
let currentDate = "08/28/24";
let TimeOfEntry = "10:37";
let imageName = "nice_photo.png";
QuoteOfTheDay = "'The only time a man can be brave is when he's afraid.' - Eddard Stark, Game of Thrones";

function updateUserEntriesArray() {
    // If the current day exists in the array, update the entry for that day.
    // If the current day does not exist in the array, create a new entry for that day.
    let boolFound = false;
    let foundIndex = -1;
    for (let i = 0; i < userEntriesArray.length; i++) {
        if (userEntriesArray[i].date == currentDate) {
            boolFound = true;
            foundIndex = i;
            break;
        }
    }

    if (boolFound) {
        userEntriesArray[foundIndex].time = TimeOfEntry;
        userEntriesArray[foundIndex].imageName = imageName;
        userEntriesArray[foundIndex].QuoteOfTheDay = QuoteOfTheDay;
        userEntriesArray[foundIndex].JournalEntry = document.getElementById("journalText").value;
        userEntriesArray[foundIndex].sleepHours = document.getElementById("sleepHours").value;
        userEntriesArray[foundIndex].mood.energetic = document.getElementById("MoodCheckboxEnergetic").checked;
        userEntriesArray[foundIndex].mood.anxious = document.getElementById("MoodCheckboxAnxious").checked;
        userEntriesArray[foundIndex].mood.motivated = document.getElementById("MoodCheckboxMotivated").checked;
        userEntriesArray[foundIndex].mood.sad = document.getElementById("MoodCheckboxSad").checked;
        userEntriesArray[foundIndex].mood.happy = document.getElementById("MoodCheckboxHappy").checked;
        userEntriesArray[foundIndex].mood.tired = document.getElementById("MoodCheckboxTired").checked;
        userEntriesArray[foundIndex].mood.excited = document.getElementById("MoodCheckboxExcited").checked;
    } else {
        userEntries.date = currentDate;
        userEntries.time = TimeOfEntry;
        userEntries.imageName = imageName;
        userEntries.QuoteOfTheDay = QuoteOfTheDay;
        userEntries.JournalEntry = document.getElementById("journalText").value;
        userEntries.sleepHours = document.getElementById("sleepHours").value;
        userEntries.mood.energetic = document.getElementById("MoodCheckboxEnergetic").checked;
        userEntries.mood.anxious = document.getElementById("MoodCheckboxAnxious").checked;
        userEntries.mood.motivated = document.getElementById("MoodCheckboxMotivated").checked;
        userEntries.mood.sad = document.getElementById("MoodCheckboxSad").checked;
        userEntries.mood.happy = document.getElementById("MoodCheckboxHappy").checked;
        userEntries.mood.tired = document.getElementById("MoodCheckboxTired").checked;
        userEntries.mood.excited = document.getElementById("MoodCheckboxExcited").checked;
        userEntriesArray.push(userEntries);
    }
    console.log(userEntriesArray);
    UpdateStats();
}

// 4. Write a function that loops over this array and computes an average number of hours slept, 
// display this on the page and make sure it updates if the user changes their sleep entry for the day.   
// Compute the number of days they say they have different feelings (how many days energetic, tired...).  
// Display this as well and make sure it updates when the user interacts.  

function UpdateStats() {
    //  average number of hours slept, 
    //display this on the page and make sure it updates if the user changes their sleep entry for the day
    let totalSleep = 0;
    for (let i = 0; i < userEntriesArray.length; i++) {
        totalSleep += Number(userEntriesArray[i].sleepHours);
    }
    let averageSleep = totalSleep / userEntriesArray.length;
    document.getElementById("averageSleep").innerHTML = "Average hours of sleep: " + averageSleep;

    // Compute the number of days they say they have different feelings (how many days energetic, tired...).  
    // Display this as well and make sure it updates when the user interacts.  
    let energetic = 0;
    let anxious = 0;
    let motivated = 0;
    let sad = 0;
    let happy = 0;
    let tired = 0;
    let excited = 0;

    for (let i = 0; i < userEntriesArray.length; i++) {
        if (userEntriesArray[i].mood.energetic) {
            energetic++;
        }
        if (userEntriesArray[i].mood.anxious) {
            anxious++;
        }
        if (userEntriesArray[i].mood.motivated) {
            motivated++;
        }
        if (userEntriesArray[i].mood.sad) {
            sad++;
        }
        if (userEntriesArray[i].mood.happy) {
            happy++;
        }
        if (userEntriesArray[i].mood.tired) {
            tired++;
        }
        if (userEntriesArray[i].mood.excited) {
            excited++;
        }
    }

    document.getElementById("energetic").innerHTML = "Energetic: " + energetic;
    document.getElementById("anxious").innerHTML = "Anxious: " + anxious;
    document.getElementById("motivated").innerHTML = "Motivated: " + motivated;
    document.getElementById("sad").innerHTML = "Sad: " + sad;
    document.getElementById("happy").innerHTML = "Happy: " + happy;
    document.getElementById("tired").innerHTML = "Tired: " + tired;
    document.getElementById("excited").innerHTML = "Excited: " + excited;

}

UpdateStats();