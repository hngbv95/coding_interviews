// SOURCE CODE INTERVIEW
// TIME: 30 mins
// RESULT: FAILED

// generate 500 random matrix 3x3
// All columns and rows, and crosses must be distinctive in the matrix and distinctive between matrices
// values of each item in matrix is limited from 00 to 99
/*
Ex1
Invalid case:
Mat A
1 2 3
4 5 6
7 8 9

Mat B
4 6 3
2 5 11
9 10 6

Mat C
5 6 3
2 6 11
9 10 4

Reason: 4 5 6 in Mat B has already existed in Mat A (4 5 6)
Reason: 5 6 4 in Mat C has already existed in Mat A (4 5 6)
*/

// start matrix

/*
Origin
01 02 03
04 05 06
07 08 09

range 10 - 39
range 40 - 69
range 70 - 99
 */



function generateMatrix() {
    const baseMatrix = [["01", "02", "03"], ["04", "05", "06"], ["07", "08", "09"]]

    // 500 maxtrix
    const result = []
    
    for (let i=10; i<=30;i++) {
        let cloneMatrix = JSON.parse(JSON.stringify(baseMatrix));
        cloneMatrix[0][0] = i.toString();
        for (let j=40;j<=69;j++) {
            let cloneMatrixLayer2 = JSON.parse(JSON.stringify(cloneMatrix));
            cloneMatrixLayer2[1][1] = j.toString();
            for (let k=70;k<=99;k++) {
                let cloneMatrixlastlayer = JSON.parse(JSON.stringify(cloneMatrixLayer2));
                cloneMatrixlastlayer[2][2] = k.toString()

                if (result.length <500) {
                    result.push(cloneMatrixlastlayer)
                } else {
                    return result
                }
            }
        }
    }

    return result
}

function testClone() {
    const baseMatrix = [["01", "02", "03"], ["04", "05", "06"], ["07", "08", "09"]]
    const cloneMatrix = JSON.parse(JSON.stringify(baseMatrix));

    console.log(cloneMatrix);
    console.log(typeof cloneMatrix);
    console.log(typeof cloneMatrix[0]);
    console.log(typeof cloneMatrix[0][0]);
}

//testClone()
const matrixes  = generateMatrix()
console.log(matrixes.length)
console.log(matrixes)