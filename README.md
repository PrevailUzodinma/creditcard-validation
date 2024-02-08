# creditcard-validator

A JavaScript program to validate a creditcard number based on different card types using regular expressions.

## How to Use

1. Install Node.js if not already installed: [Node.js](https://nodejs.org/)
2. Clone or download this repository.
3. Open a terminal in the project directory.
4. Run the script using the command:

   ```bash
   node card_validator.js
   ```

5. Enter a credit card number when prompted.

## Regex Patterns

Credit card numbers adhere to specific numbering schemes that help identify the issuing network and other details. These are the common numbering schemes for major payment network companies
and so the script uses regular expressions (regex) to validate credit card numbers. Here are the regex patterns for different card types:

- MasterCard:
  - Issuer Identification Number (IIN): Starts with the digit "5."
  - Length: 16 digits.
    ```regex
    /^5\d{15}$/
    ```
- Visa:

  - Issuer Identification Number (IIN): Starts with the digit "4."
  - Length: 16 digits.
    ```regex
    /^4\d{15}$/
    ```

- American Express (Amex):

  - IIN: Starts with "34" or "37."
  - Length: 15 digits.
    ```regex
    /^3[4|7]\d{13}$/
    ```

- Discover:

  - IIN: Starts with "6011," "65," or "64[4-9]."
  - Length: 16 digits.
    ```regex
    /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/
    ```

- JCB:

  - IIN: Starts with "35."
  - Length: 16 digits.
    ```regex
    /^35\d{14}$/
    ```

- Diners Club International:

  - IIN: Starts with "36," "37," or "38."
  - Length: 14 digits.
    ```regex
    /^3[6-8]\d{12}$/
    ```

- UnionPay:

  - IIN: Starts with "62."
  - Length: Can vary, typically 16 or 19 digits.
    ```regex
    /^(62\d{14}|62\d{17})$/
    ```

- Verve:

  - IIN: Starts with "50" to "69."
  - Length: Typically 16 digits.
    ```regex
    /^[56][0-9]\d{15}$/
    ```

## Explanation of terms

- ^: Asserts the start of the string.
- \d: Matches any digit (0-9).
- {n}: Matches exactly n occurrences of the preceding digit.
- [...]: Matches any one of the characters inside the square brackets.
- (...|...|...): Matches any of the grouped alternatives separated by the pipe (|) symbol.
- $: Asserts the end of the string.

## Notes

- The script keeps prompting for input until a valid card number is entered.
- Once a valid card number is provided, it identifies and prints the supported card type.

Happy Coding!
