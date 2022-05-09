export const BookList = ({books}) => {
    return (
        <div data-test={'book-list'}>
            {books.map((book, index) =>
                <div className={'book-item'} key={index}>
                    <h2 className="title">{book.name}</h2>
                </div>
            )}
        </div>
    )
}

