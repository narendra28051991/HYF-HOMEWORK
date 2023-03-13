console.log("\n\n\nCACTUSIO-INTERACTIVE (SMART PHONE USAGE APP)\n\n");

const activities = [];
const limit = 6;
const today = new Date();
const formattedDate = today.toLocaleDateString("en-GB");

function addActivity(activity, duration, date = formattedDate) {
    if (activities.length < limit) {
        activities.push({date, activity, duration});        
    }
    else {
        console.log(usageLimit());
    }
}

function showStatus(channels, specificDate = formattedDate) {
    if (channels.length === 0) {
        return "Add some activities before calling showStatus";
    }
    else {
        let minutes = 0;
        let activities = 0;
        for (const activity of channels) {
            minutes += activity.duration;
            if (activity.date === specificDate) {
                activities++;
            }
        }
        console.log(`\nNumber of activities on ${specificDate}: ${activities}`);
        return `\nYou have added ${channels.length} activities. They amount to ${minutes} min. of usage`;
    }
}

function usageLimit() {
    return "You have reached your limit, no more smartphoning for you!";
}

function mostTimeSpent() {
    let mostTime = 0;
    for (let index = 0; index < activities.length; index++) {
        if (activities[index].duration > mostTime) {
            mostTime = activities[index].duration;
        }
    }
    let activityArray = [];
    for (let index = 0; index < activities.length; index++) {
        if (activities[index].duration === mostTime) {
            activityArray.push(activities[index].activity);
        }
    }
    const longestActivity = `\nThe user has spent most time on ${activityArray.join(" & ")}`;
    return longestActivity;
}

addActivity("Youtube", 30);
addActivity("Facebook", 15);
addActivity("Netflix", 90);
addActivity("Twitter", 5);
addActivity("LinkedIn", 10);
addActivity("Televison", 90);
addActivity("Calendar", 10);
console.log(activities);
console.log(showStatus(activities));
console.log(mostTimeSpent());
