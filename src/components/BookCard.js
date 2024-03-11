import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p>First Publish Year: {book.first_publish_year}</p>
            <br></br>
        </div>
    );
};

export default BookCard;
