function gradeSystem(score) {
    
    switch (98) {
        case (score < 35):
            console.log("You are Failed");

            break;

        case (score >= 35):
            console.log("You are Passed");

            break;
        case (score >= 35 && score < 60):
            console.log("You are Passed with GRADE C");

            break;
        case (score >= 60 && score < 75):
            console.log("You are Passed with GRADE B");

            break;
        case (score >= 75 && score <= 90):
            console.log("You are Passed GRADE A");

            break;
        case (score >= 90 && score <= 100):
            console.log("You are Passed GRADE A+");
            break;
        default:
            console.log("Invalid Output");
            break;
    }

}
gradeSystem(98);
gradeSystem(13);
gradeSystem(-20);