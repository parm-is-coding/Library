// Book Object constructor
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read =read;
    this.info = function() {
        let output = this.title + " by " + this.author +
        ", " + this.pages + ", " + this.read;
        return output;
    }
}
