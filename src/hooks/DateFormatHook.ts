import { format } from 'date-fns';

function useDateFormat(pattern: string) {
  // Define your default format pattern here or accept it as a parameter
  const formatPatternToUse = pattern || 'yyyy-MM-dd HH:mm:ss';

  // Create a function that formats a given date with the specified pattern
  const formatDate = (date: number, formatPattern = formatPatternToUse) => {
    return format(date, formatPattern);
  };

  return formatDate;
}

export default useDateFormat;
