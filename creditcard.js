/* a JavaScript program to validate a credit card number. Also indicating the credit card type I am validating like Visa, Mastercard etc.
DO NOTE that the following regular expressions are based on the NUMBERING SCHEME of the respective Payment/Card Networks; usually with the first few digits*/

let input = 34567907366767894;

mastercard = /^5\d{15}$/.test(input);
visacard = /^4\d{15}$/.test(input);
amexcard = /^3[4|7]\d{13}$/.test(input);
discovercard = /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/.test(input);
jcbcard = /^35\d{14}$/.test(input);
dinerscard = /^3[6-8]\d{12}$/.test(input);
unionpaycard = /^(62\d{14}|62\d{17})$/.test(input);
verve = /^[56][0-9]\d{15}$/.test(input);

if (mastercard) {
  console.log("Card Supported: this a MasterCard");
} else if (visacard) {
  console.log("Card Supported: this is a Visacard");
} else if (amexcard) {
  console.log("Card Supported: this is an Amex card");
} else if (discovercard) {
  console.log("Card Supported: this is a Discover Card");
} else if (jcbcard) {
  console.log("Card Supported: this is a JCB Card");
} else if (dinerscard) {
  console.log("Card Supported: this is a DinersCard");
} else if (unionpaycard) {
  console.log("Card Supported: this is a UnionPay Card");
} else if (verve) {
  console.log("Card Supported: this is a Verve Card");
} else {
  console.log("Invalid Card. Card not supported.");
}
