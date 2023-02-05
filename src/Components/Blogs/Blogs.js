import React from "react";

const Blogs = () => {
  return (
    <div className="blog container pt-5">
      <div className="mt-5 p-5 text-success-emphasis text-center rounded-pill bg-info-subtle">
        <h5>What is the purpose of Context API?</h5>
        <p>
          The purpose of the Context API in React is to provide a way for
          components to share data and communicate with each other without
          having to pass data through props and props drilling. The Context API
          allows you to create a global store of data that can be accessed from
          anywhere in your application, making it a convenient way to share
          information between components. Using the Context API, you can define
          a context and provide its value to the components that need it.
          Components can then consume the data from the context using the
          useContext hook or the Context.Consumer component. This makes it easy
          to share state and other data across your application, without having
          to manually pass the data down through multiple levels of components.
          In summary, the Context API provides a centralized and easy-to-use
          solution for sharing data between components, making your code cleaner
          and more manageable.
        </p>
      </div>
      <div className="mt-5 p-5 text-success-emphasis text-center rounded-pill bg-info-subtle">
        <h5>Difference between inline and block elements?</h5>
        <p>
          Inline elements and block elements are two different types of HTML
          elements with distinct behaviors in terms of layout and display. <br /> Block
          elements: <br />Take up the full width of their parent container<br /> Create a
          new line before and after themselves<br /> Have a default height and width <br />
          Inline elements:<br /> Only take up as much width as necessary to display
          their content<br /> Do not create a new line before or after themselves<br /> Do
          not have a default height or width
        </p>
      </div>
      <div className="my-5 p-5 text-success-emphasis text-center rounded-pill bg-info-subtle">
        <h5>What is Semantic tags?</h5>
        <p>
          Semantic tags are HTML tags that provide meaning and structure to the
          content on a web page. They help search engines and assistive
          technologies understand the content and context of a page. For
          example, the "header" tag indicates the header of a document or
          section, the "nav" tag indicates navigation links, the "main" tag
          indicates the main content of a document, and the "footer" tag
          indicates the footer of a document or section. Using semantic tags
          improves the accessibility of a website, making it easier for users
          with disabilities to understand the content and navigate the site.
          They also provide better SEO, as search engines can more easily
          understand the content and context of a page, making it easier for
          users to find your site when searching for relevant information.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
