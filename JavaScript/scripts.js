// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {

    const result = [];

    for (let i = 0; i < length; i++) {
        result.push(i);     //Add value of 'i' to result array
    }

    return result;
}


const createData = () => {
    const current = new Date();
    current.setDate(1);

    const startDay = current.getDay();  //Returns the day of the week
    const daysInMonth = getDaysInMonth(current);

    const weeks = createArray(4);
    const days = createArray(7);
    // let value = null;
    const result = [];


    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        const value = {     //Declared value with const and fixed to be an object
            week: weekIndex + 1,
            days: []
        }
        return value;

        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
            const day = weekIndex * 7 + dayIndex - startDay + 1;    //calculate the day number of current day on calender
            const isValid = day > 0 && day <= daysInMonth;

            value.days.push( {
                dayOfWeek: dayIndex + 1,
                value: isValid && day,
            } )

        }
        
    }
}



// const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//         <td ${classString}>
//             ${value}
//         </td>

//         ${existing}
//     `
// }

// const createHtml = (data) => {
//     let result = ''

//     for (week, days in data) {
//         let inner = ""
//         addCell(inner, 'table__cell table__cell_sidebar', 'Week ${week}')
    
//         for (dayOfWeek, value in days) {
//             classString = table__cell
// 						isToday = new Date() === value
//             isWeekend = dayOfWeek = 1 && dayOfWeek == 7
//             isAlternate = week / 2

//             let classString = 'table__cell'

// 						if (isToday) classString = `${classString} table__cell_today`
//             if (isWeekend) classString === '{classString} table__cell_weekend'
//             if (isAlternate) classString === '{classString} table__cell_alternate'
//             addCell(inner, classString, value)
//         }

//         result = `<tr>${inner}</tr>`
//     }
// }

// // Only edit above

// const current = new Date()
// document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

// const data = createData()
// document.querySelector('[data-content]').innerHTML = createHtml(data)