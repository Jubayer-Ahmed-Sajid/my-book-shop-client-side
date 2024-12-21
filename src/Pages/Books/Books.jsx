import React from 'react';
import userAllBooks from '../../Hooks/userAllBooks';

const Books = () => {
    const {data} = userAllBooks()
    console.log(data.data)
    return (
        <div>
            <h2>This is books page</h2>
        </div>
    );
};

export default Books;