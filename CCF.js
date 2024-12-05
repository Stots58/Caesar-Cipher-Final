const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
// Add event listener.
document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();
 
    // Getting the user data from html.
    let userImp = document.getElementById("user-imp-id").value.toLowerCase();
    let shift = parseInt(document.getElementById("numshift").value);
    let direction = document.getElementById("select1").value;
    let action = document.getElementById("select2").value;
 
    // Shifts the user text left or right.
    if (direction === "left") {
        shift = -shift;
    }
    if (action === "Decrypt") {
        shift = -shift;
    }
 
    // Empty sting to append the final output.
    let result = "";
 
    // Loops through letter in the letters array.
    for (let i = 0; i < userImp.length; i++) {
        let char = userImp[i];
 
        // Checks if the character is a letter.
        if (letters.includes(char)) {
            // Find the current index and adds the shift.
            let currentIndex = letters.indexOf(char);
            let newIndex = (currentIndex + shift + 26) % 26; // Ensure the index wraps around (anything about a shift of 26.)
            result += letters[newIndex];
        }
        else {
            // Takes care of non-alphabet characters like spaceses.
            result += char;
        }
    }
 
    // posts the final output of the encrypted/decrypted text to the page.
    document.getElementById("user-imp-out-id").innerText = result;
});