console.log("\n\n\nSERIES DURATION OF MY LIFE\n\n");

const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    }
];

function logOutSeriesText(series) {
    let indexOfSeries = 0;
    let totalLifespanPercentage = 0;
    while (indexOfSeries < series.length) {
        const minutesForDays = series[indexOfSeries].days * 24 * 60;
        const minutesForHours = series[indexOfSeries].hours * 60;
        const remainingMinutes = series[indexOfSeries].minutes;
        const timeForSeries = minutesForDays + minutesForHours + remainingMinutes;

        const minutesFor80Years = 80 * 365 * 24 * 60;
        const extraMinutesForLeapYear = Math.floor(80 / 4) * 24 * 60;
        const timeFor80Years = minutesFor80Years + extraMinutesForLeapYear;

        const averageLifespanPercentage = timeForSeries / timeFor80Years * 100;
        const abstractPercentage = Number( Math.round(averageLifespanPercentage + 'e3') + 'e-3' );
        console.log(`${series[indexOfSeries].title} took ${abstractPercentage}% of my life`);
        totalLifespanPercentage += averageLifespanPercentage;
        indexOfSeries++;
    }
    const totalPercentage = Number( Math.round(totalLifespanPercentage + 'e3') + 'e-3' );
    console.log(`\nIn total that is ${totalPercentage}% of my life`)
}

logOutSeriesText(seriesDurations);
