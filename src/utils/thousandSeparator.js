function thousandSeparator(number) {
    // Get the thousands separator character.
    const thousandSeparator = ',';
  
    // Convert the number to a string.
    const stringNumber = String(number);
  
    // Replace every group of three digits with a thousand separator.
    let formattedNumber = stringNumber.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      thousandSeparator
    );
  
    // Check if the number has a decimal point.
    const decimalIndex = stringNumber.indexOf('.');
  
    // If the number has a decimal point, add the thousand separator
    // after the decimal point.
    if (decimalIndex > -1) {
      formattedNumber = formattedNumber.replace(
        /\.(?=\d{3})+(?!\d)/g,
        thousandSeparator + '.'
      );
    }
  
    // Return the formatted number.
    return formattedNumber;
  }

  export default thousandSeparator