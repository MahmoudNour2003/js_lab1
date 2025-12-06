# Lab 1 - JavaScript Exercises

This repository contains solutions for Lab 1 tasks in JavaScript. The tasks focus on functions, conditional statements, loops, user input validation, and basic DOM manipulation.

---

## 📝 **Tasks Overview**

### **Task 1: Display Welcome Message in Headers**
- Create a function that writes `"Welcome to my page"` **six times** using `<h1>` to `<h6>` headers **in one line**.

### **Task 2: Temperature Check**
- Create a function that takes **today's temperature** as a parameter.
- Prints:
  - `"HOT"` if temperature ≥ 30  
  - `"COLD"` if temperature < 30  
- Use the **ternary conditional operator**.

### **Task 3: Sum User Inputs**
- Write a script that takes **n values from the user**.
- Stops when:
  - The user enters `0`  
  - OR the sum exceeds `100`
- Ensure **input is numeric**.
- Display the **total sum** in the console.

### **Task 4: Welcome User**
- Show an **alert**: `"Welcome to my site"`.
- Prompt the user to **enter their name**.
- Write `"Welcome + user name"` to the page.
- **Remark**: Using `document.write()` after the page loads **overwrites the home page content**.

### **Task 5: Divisibility Check**
- Create a function that accepts three numbers: `x`, `y`, `z`.
- Check if `x` is divisible by:
  - `y` only  
  - `z` only  
  - Both `y` and `z`
- Example outputs:
  - `10, 2, 5` → "10 is divisible by both 2 and 5"
  - `10, 2, 4` → "10 is divisible by 2 only"
  - `10, 5, 4` → "10 is divisible by 5 only"

### **Task 6: Contact Page User Input**
- Prompt the user for their **name**:
  - Validate that it is a string.
- Prompt for **birth year**:
  - Validate that it is a number and less than `2010`.
- Calculate the user's **age**.
- If input is invalid, **repeat prompt until correct**.
- Display the user information on the page in this format:

