import React from 'react';

const Book = ({book}) => {
    const {title,author,category,price,stock,image,} = book;

    return (
        <div className='bg-base-300 shadow-md space-y-2 rounded-md p-6'>
            <img src={image} className='h-32 object-cover mb-4 w-full' alt="" />
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className='font-semibold'>{author}</p>
            <p>{category}</p>
            <div className='flex gap-2 items-center justify-between'>
                <p>Price:$ <span className='text-primary'>{price}</span></p>
                <p>Stock: <span className='text-primary'>{stock}</span></p>

            </div>

        </div>
    );
};

export default Book;