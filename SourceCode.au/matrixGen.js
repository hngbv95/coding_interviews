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

/*
Solution:
Generate random matrix constantly
--> validate matrix the matrix using hash map
--> return valid matrix only

return 500 valid records
*/

function generateMatrix() {
    const rs = []    
    for (let i=0;i<3;i++) {
        const row = []
        for(let j=0;j<3;j++) {
            row.push(generate())
        }
        rs.push(row);
    }

    return rs
}

function generateNumber(min, max) {
    return Math.round(min + Math.random() * (max-min))
}

function generate() {
    return generateNumber(0,99)
}

function Validator() {

    const map = {}

    function addToMap(num1, num2, num3) {
        map[`${num1}${num2}${num3}`] = true
        map[`${num1}${num3}${num2}`] = true
        map[`${num2}${num1}${num3}`] = true
        map[`${num2}${num3}${num1}`] = true
        map[`${num3}${num2}${num1}`] = true
        map[`${num3}${num1}${num2}`] = true
    }

    function isExisted(matrix) {
        for (let row of matrix) {
            if (inMap(...row)) {
                return true
            }
        }

        for (let i=0;i<3;i++) {
            let col = []
            for (let j=0;j<3;j++) {
                col.push(matrix[j][i])
            }

            if (inMap(...col)) {
                return true
            }
        }

        if (inMap(...[matrix[0][0], matrix[1][1], matrix[2][2]])) {
            return true
        }

        if (inMap(...[matrix[2][0], matrix[1][1], matrix[0][2]])) {
            return true
        }

        return false
    }

    function addMatrixToMap(matrix) {
        for (let row of matrix) {
            addToMap(...row)
        }

        for (let i=0;i<3;i++) {
            let col = []
            for (let j=0;j<3;j++) {
                col.push(matrix[j][i])
            }

            addToMap(...col)
        }

        addToMap(...[matrix[0][0], matrix[1][1], matrix[2][2]]);
        addToMap(...[matrix[2][0], matrix[1][1], matrix[0][2]]);
    }

    function inMap(num1, num2, num3) {
        return map[`${num1}${num2}${num3}`]
    }

    return {
        Validate: function(matrix) {
            if (!isExisted(matrix)) {
                addMatrixToMap(matrix)
                return true
            }

            return false
        }
    }
}

function run() {
    console.time()
    const validator = Validator()
    
    const rs = []

    while (rs.length < 500) {
        const matrix = generateMatrix()
        if (validator.Validate(matrix)) {
            rs.push(matrix)
        }
    }

    console.timeEnd()
    console.log(rs.length)
    console.log(rs)
    
}

run()