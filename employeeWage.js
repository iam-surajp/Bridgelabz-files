
/*Ability to Check Employee is 
present or Absent - Use Math.Random to check Absent or Present
- Use const which signal that the identifier won't be reassigned.
And use let where the variable may be reassigned. Both have Block 
Scope. Traditional var has function scope*/

/*Ability to Calculate Daily Employee Wage based on part time or full time work - Use Math.Random to check No Time, 
Part Time or Full Time- Assume Part Time is 4 Hrs and Full time is 8 Hrs and per hour wage is $20
- Solve Using Switch Statement*/

// Refactor the Code to write a function to get work hours

/*Calculating Wages for a Month assuming 20 Working Days in a Month */

/*Calculate Wages till a condition of total 
working hours of 160 or max days of 20 is reached for a month */

// UC 1 - Check Employee Attendance
const checkEmployeeAttendance = () => {
    const empStatus = Math.random();
    if (empStatus <= 0.5) {
        console.log("Employee is Present today");
        return true; 
    } else {
        console.log("Employee is Absent today");
        return false; 
    }
};

// UC 2 - Calculate Daily Employee Wage
const calculateDailyWage = (present) => {
    if (!present) {
        console.log("No work today. No wage earned.");
        return 0;
    }

    const workType = Math.floor(Math.random() * 3); // 0 for no time, 1 for part-time, 2 for full-time
    const hourlyWage = 20;
    let hoursWorked, totalWageEarned;

    switch (workType) {
        case 0:
            hoursWorked = 0;
            console.log("No work today.");
            break;
        case 1:
            hoursWorked = 4;
            console.log("Part-time work.");
            break;
        case 2:
            hoursWorked = 8;
            console.log("Full-time work.");
            break;
        default:
            console.log("Invalid work type.");
            break;
    }

    totalWageEarned = hoursWorked * hourlyWage;
    console.log("Wages earned: " + totalWageEarned);
    return totalWageEarned;
};

// UC 3 - Function to Get Work Hours
const getWorkHours = (workType) => {
    switch (workType) {
        case 0:
            return 0;
        case 1:
            return 4;
        case 2:
            return 8;
        default:
            return 0;
    }
};

// UC 4 - Calculate Monthly Wage
const calculateMonthlyWage = () => {
    let totalWage = 0;
    let totalWorkingDays = 0;

    while (totalWorkingDays < 20) {
        const present = checkEmployeeAttendance();
        const dailyWage = calculateDailyWage(present);
        totalWage += dailyWage;
        totalWorkingDays++;
    }

    console.log("Monthly wage: $" + totalWage);
};

// UC 5 - Calculate Wages till a Condition
const calculateWagesTillCondition = () => {
    let totalWage = 0;
    let totalWorkingHours = 0;
    let totalWorkingDays = 0;

    while (totalWorkingHours <= 160 && totalWorkingDays < 20) {
        const present = checkEmployeeAttendance();
        const dailyWage = calculateDailyWage(present);
        const workHours = getWorkHours(Math.floor(Math.random() * 3));

        totalWage += dailyWage;
        totalWorkingHours += workHours;
        totalWorkingDays++;
    }

    console.log("Total wage till condition: $" + totalWage);
};

console.log("UC 4 - Calculate Monthly Wage:");
calculateMonthlyWage();
console.log("\nUC 5 - Calculate Wages till a Condition:");
calculateWagesTillCondition();
