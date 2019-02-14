import * as constants from '../constants';

export const getDayOfWeek = (date: Date): string => {

    const dayNumber = date.getDay();

    switch (dayNumber) {
        case 1: return constants.monday; break;
        case 2: return constants.tuesday; break;
        case 3: return constants.wednesday; break;
        case 4: return constants.thursday; break;
        case 5: return constants.friday; break;
        case 6: return constants.saturday; break;
        default: return constants.sunday; break; // Case value = 0
    }
}

export const getNextWork = (date: Date): Date => {

    date.setDate(date.getDate() + 1); // Next day

    if (date.getDay() === 0) {
        date.setDate(date.getDate() + 1);
    }
    else if (date.getDay() === 6) {
        date.setDate(date.getDate() + 2);
    }

    return date;
}
