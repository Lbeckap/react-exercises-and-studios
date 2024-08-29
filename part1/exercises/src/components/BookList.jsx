import './BookList.module.css';

export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1575009552i/18693655.jpg";
   let book2 = "https://cms-imgp.jw-cdn.org/img/p/1001070103/univ/art/1001070103_univ_sqr_lg.jpg";
   let book3 = "https://m.media-amazon.com/images/I/91s6WKPM09L._AC_UF1000,1000_QL80_.jpg";

   return (
      <div className="bookList">
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A Mind for Numbers: How to Excel at Math and Science (Even If You Flunked Algebra)" width={"30%"}/>
         <img src={book2} alt="New World Translation of the Holy Scriptures (Study Edition)" width={"30%"}/>
         <img src={book3} alt="Ray Bradbury's Fahrenheit 451" width={"30%"}/>
      </div>      
   );
}