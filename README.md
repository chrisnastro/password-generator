## Password Generator

```
This site enables a user to create a randomly generated password.
The user can pick between 8-128 characters
The user can determe whether or not they would like to include uppercase letters, lowercase letters, special symbols, and/or numbers.
```

## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
Deployed site: https://chrisnastro.github.io/password-generator/ 

Github Repository: https://github.com/chrisnastro/password-generator 

![Deployed website screenshot](assets/images/screenshot.png)

## Credits
This project includes code from the following sources:
-[Cynthia Mory] (https://cynthiamory.github.io/security-keygen/)