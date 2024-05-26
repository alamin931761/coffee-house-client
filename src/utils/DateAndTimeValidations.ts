export const verifyDateAndTime = (date: string, time: string) => {
  // Split the time string into hours and minutes
  const [hours, minutes] = time.split(":");

  // Create a new Date object with the provided date
  const selectedDate = new Date(date);
  // Set the hours, minutes, seconds, and milliseconds for the selectedDate
  selectedDate.setHours(parseInt(hours));
  selectedDate.setMinutes(parseInt(minutes));
  selectedDate.setSeconds(0);
  selectedDate.setMilliseconds(0);

  // Check if the selected date falls on a Monday
  const day = selectedDate.getDay();
  if (day === 1) {
    return "Our coffee house is closed every Monday. Please pick another day.";
  }
  // Get the current date and time
  const currentDate = new Date();

  // Check if the selected date and time are in the past
  if (selectedDate < currentDate) {
    // Calculate the time difference in hours
    const timeDifference =
      (currentDate.getTime() - selectedDate.getTime()) / (1000 * 60 * 60);
    return `You've chosen a past date and time. Select a time that is at least ${timeDifference.toFixed(
      2
    )} hours from your chosen moment.`;
  }
};
