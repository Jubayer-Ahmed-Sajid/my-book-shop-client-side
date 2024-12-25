import React from "react";

const FAQ = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-center text-3xl font-bold mt-12 text-primary">
        Frequently Asked Questions
      </h2>
      <div className="divider w-1/3 mx-auto my-6 bg-accent_1 h-1"></div>
      <div className="space-y-4">
        <div className="collapse collapse-plus bg-white shadow-lg rounded-lg">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-secondary">
            What is My Book Shop?
          </div>
          <div className="collapse-content p-4 text-secondary">
            <p>My Book Shop is an online platform for buying and selling books.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white shadow-lg rounded-lg">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-secondary">
            How do I create an account?
          </div>
          <div className="collapse-content p-4 text-secondary">
            <p>You can create an account by clicking on the "Sign Up" button on the homepage.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white shadow-lg rounded-lg">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-secondary">
            How do I add a book to my cart?
          </div>
          <div className="collapse-content p-4 text-secondary">
            <p>You can add a book to your cart by clicking the "Add to Cart" button on the book's detail page.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-white shadow-lg rounded-lg">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-secondary">
            How do I contact customer support?
          </div>
          <div className="collapse-content p-4 text-secondary">
            <p>You can contact customer support by emailing support@mybookshop.com.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
