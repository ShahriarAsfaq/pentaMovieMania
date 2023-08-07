export const isValidDate = (day, month, year) => {
    const validDay = /^\d{2}$/.test(day);
    const validMonth = /^\d{2}$/.test(month);
    const validYear = /^\d{4}$/.test(year);
    
    const numericDay = parseInt(day, 10);
    const numericMonth = parseInt(month, 10);
  
    const validDayRange = numericDay > 0 && numericDay <= 31;
    const validMonthRange = numericMonth > 0 && numericMonth <= 12;
  
    return validDay && validMonth && validYear && validDayRange && validMonthRange;
  };