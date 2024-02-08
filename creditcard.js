/* a JavaScript program to validate a credit card number. Also indicating the credit card type I am validating like Visa, Mastercard etc.
DO NOTE that the following regular expressions are based on the NUMBERING SCHEME of the respective Payment/Card Networks; usually with the first few digits*/

let input;

mastercard = /^5\d{15}$/.test(input);
visacard = /^4\d{15}$/.test(input);
amexcard = /^3[4|7]\d{13}$/.test(input);
