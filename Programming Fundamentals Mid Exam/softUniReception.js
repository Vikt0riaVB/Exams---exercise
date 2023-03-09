function reception(input){
    let studentsForEmployee1 = Number(input[0]);
    let studentsForEmployee2 = Number(input[1]);
    let studentsForEmployee3 = Number(input[2]);
    let allStudents = studentsForEmployee1 + studentsForEmployee2 + studentsForEmployee3
    let students = Number(input[3]);
    let neededTime = 0;

    while(students > 0){
        neededTime++
        if(neededTime % 4 != 0){
            students -= allStudents;
        }
    
    }

    
    console.log(`Time needed: ${neededTime}h.`);
}
reception(['1','2','3','45'])