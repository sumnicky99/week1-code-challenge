function calculateGrade(studentMarks) {
    // Check if the input is correct number
    if (studentMarks < 0 || studentMarks > 100) {
        console.log( "Please enter a number between 0 and 100.");
        return;
    }
    // calculate the grade based on the specified criteria that provided
    let grade;
    if (studentMarks > 79) {
        grade = 'A';
    } else if (studentMarks >= 60 && studentMarks <= 79) {
        grade = 'B';
    } else if (studentMarks >= 50 && studentMarks <= 59) {
        grade = 'C';
    } else if (studentMarks >= 40 && studentMarks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // find clear Output the result
    console.log("Student Grade: " + grade);
}

// Call the function to calculate and display the grade required
calculateGrade(56);