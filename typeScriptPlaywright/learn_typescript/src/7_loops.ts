/*
Loops - the way of repeating lines of codes until the loop condition is met
While loop
Do-while loop
For Loop
Nested loop
ForEach
*/

//while loop - repeats a block of code until the condition is true
let count = 1;
/*
while(count <=10){

    console.log(count);
    count++;
}*/

/*
do{

    console.log("Count is: "+count);
    count++

}while(count<=10)
*/

//for loop

for(let i=1; i<=10; i++){

    console.log(i);
}

/*
while  ---> when the number of iterations are unknown
do while --> at least for one time irrespective of the condition
for ---> number of iterations are known

Nesting of loops

The placing of one loop inside the body of another loop is known as nesting of loops

while working with nesting loops the outloop will change only when the inner loop is 
completely finished
*/

let numA = 0;

while (numA < 3){

    for(let numB = 0; numB < 4; numB++){

        let numC = 0;

        do{

            console.log(`numA--->${numA} numB--->${numB}  numC--->${numC}`)
            numC++
        }while(numC<5);


        }

        numA++;
    }

/*
numA--->0 numB--->0  numC--->0
numA--->0 numB--->0  numC--->1
numA--->0 numB--->0  numC--->2
numA--->0 numB--->0  numC--->3
numA--->0 numB--->0  numC--->4
numA--->0 numB--->1  numC--->0
numA--->0 numB--->1  numC--->1
numA--->0 numB--->1  numC--->2
numA--->0 numB--->1  numC--->3
numA--->0 numB--->1  numC--->4
numA--->0 numB--->2  numC--->0
numA--->0 numB--->2  numC--->1
numA--->0 numB--->2  numC--->2
numA--->0 numB--->2  numC--->3
numA--->0 numB--->2  numC--->4
numA--->0 numB--->3  numC--->0
numA--->0 numB--->3  numC--->1
numA--->0 numB--->3  numC--->2
numA--->0 numB--->3  numC--->3
numA--->0 numB--->3  numC--->4
numA--->1 numB--->0  numC--->0
numA--->1 numB--->0  numC--->1
numA--->1 numB--->0  numC--->2
numA--->1 numB--->0  numC--->3
numA--->1 numB--->0  numC--->4
numA--->1 numB--->1  numC--->0
numA--->1 numB--->1  numC--->1
numA--->1 numB--->1  numC--->2
numA--->1 numB--->1  numC--->3
numA--->1 numB--->1  numC--->4
numA--->1 numB--->2  numC--->0
numA--->1 numB--->2  numC--->1
numA--->1 numB--->2  numC--->2
numA--->1 numB--->2  numC--->3
numA--->1 numB--->2  numC--->4
numA--->1 numB--->3  numC--->0
numA--->1 numB--->3  numC--->1
numA--->1 numB--->3  numC--->2
numA--->1 numB--->3  numC--->3
numA--->1 numB--->3  numC--->4
numA--->2 numB--->0  numC--->0
numA--->2 numB--->0  numC--->1
numA--->2 numB--->0  numC--->2
numA--->2 numB--->0  numC--->3
numA--->2 numB--->0  numC--->4
numA--->2 numB--->1  numC--->0
numA--->2 numB--->1  numC--->1
numA--->2 numB--->1  numC--->2
numA--->2 numB--->1  numC--->3
numA--->2 numB--->1  numC--->4
numA--->2 numB--->2  numC--->0
numA--->2 numB--->2  numC--->1
numA--->2 numB--->2  numC--->2
numA--->2 numB--->2  numC--->3
numA--->2 numB--->2  numC--->4
numA--->2 numB--->3  numC--->0
numA--->2 numB--->3  numC--->1
numA--->2 numB--->3  numC--->2
numA--->2 numB--->3  numC--->3
numA--->2 numB--->3  numC--->4
*/

