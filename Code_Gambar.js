function pola(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let a = 0; a < cols; a++ ) {
            if ((i+a) % 2 === 0) {
                row +=" x   |";
            } else {
                row += " o   |";
            }
        }
        console.log("|",row)
    }
};
pola(5, 5)