const checkEmployeeAttendance = () => {
    const empStatus = Math.random();
    if (empStatus <= 0.5) {
        return true; 
    } else {
        return false; 
    }
};

// UC 2 - Calculate Daily Employee Wage
const calculateDailyWage = (present) => {
    if (!present) {
        return 0; 
    }

    const workType = Math.floor(Math.random() * 3); 
    const hourlyWage = 20;
    let hoursWorked, totalWageEarned;

    switch (workType) {
        case 0:
            hoursWorked = 0;
            break;
        case 1:
            hoursWorked = 4;
            break;
        case 2:
            hoursWorked = 8;
            break;
        default:
            break;
    }

    totalWageEarned = hoursWorked * hourlyWage;
    return totalWageEarned;
};

// uc-4,5 calculate wages for month and till condition
const calculateWages = (monthly = false) => {
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

    let totalWage = 0;
    let totalWorkingDays = 0;
    let totalWorkingHours = 0;

    while ((!monthly && totalWorkingHours <= 160) || (monthly && totalWorkingDays < 20)) {
        const present = checkEmployeeAttendance();
        const dailyWage = calculateDailyWage(present);
        let workHours = 0;

        if (present && !monthly) {
            workHours = getWorkHours(Math.floor(Math.random() * 3));
            totalWorkingHours += workHours;
        } else if (present && monthly) {
            workHours = (Math.floor(Math.random() * 3) + 1) * 4; 
        }

        totalWage += dailyWage;
        totalWorkingDays++;
    }

    if (monthly) {
        console.log("Monthly wage: $" + totalWage);
    } else {
        console.log("Total wage till condition: $" + totalWage);
    }
};


// Running all use cases in order
console.log("\nCalculate Monthly Wage:");
calculateWages(true);
console.log("\nCalculate Wages till a Condition:");
calculateWages();



