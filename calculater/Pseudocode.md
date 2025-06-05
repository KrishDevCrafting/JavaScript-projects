START

1. Create a variable to store the current number being typed (currentInput)
2. Create a variable to store the previous number (previousInput)
3. Create a variable to store the selected operator (+, -, *, /) (operator)

4. When a number button is clicked:
    - Append that number to currentInput
    - Update the calculator screen with currentInput

5. When an operator button is clicked (+, -, *, /):
    - If currentInput is not empty:
        - Set previousInput = currentInput
        - Set operator = clicked operator
        - Clear currentInput (start fresh for next number)

6. When equals (=) button is clicked:
    - Convert previousInput and currentInput to numbers
    - Based on the operator:
        - If '+', result = previousInput + currentInput
        - If '-', result = previousInput - currentInput
        - If '*', result = previousInput * currentInput
        - If '/', result = previousInput / currentInput (check for divide by zero)
    - Show result on screen
    - Set currentInput = result
    - Clear previousInput and operator

7. When clear (C) button is clicked:
    - Clear currentInput, previousInput, operator
    - Set screen to empty or 0

END
