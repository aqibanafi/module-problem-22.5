function paperRequirements (book1, book2, book3) {
    let bookOnePage = 100;
    let bookTwoPage = 200;
    let bookThreePage = 300;
    let bookOneTotalPage = 100 * 3;
    console.log("Total Page for Book 1 is Requared: " + bookOneTotalPage);
    let bookTwoTotalPage = 200 * 3;
    console.log("Total Page for Book 2 is Requared: " + bookTwoTotalPage);
    let bookThreeTotalPage = 300 * 3;
    console.log("Total Page for Book 3 is Requared: " + bookThreeTotalPage);
    let totalBookPage = bookOneTotalPage + bookTwoTotalPage + bookThreeTotalPage;
    return totalBookPage;
}

let output = paperRequirements (5, 2, 3);
console.log("Total Pages Required For Your All Books are: " + output);