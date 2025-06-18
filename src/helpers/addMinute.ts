export function AddMinutesToDate (date: Date, minutes: number) {
    return new Date (date.getTime() + 60 * 1000);
}