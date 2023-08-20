import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import './index.css'
import {books} from './books';
import Book from './Book';




const Booklist = () => {
  return (
    <>
    <h2 style={{textAlign:'center'}}>Amazon Best Seller Books</h2>
     <section className='bookList'>
      <EventExample />
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index}  />;
      })}
    </section>
    </>

  );
};
const EventExample = () => {
  const handelEvent = (e) => {
    console.log(e.target.name);
    console.log(e.target.type);
    console.log(e.target.value);
    console.log('Form input Handels');
  };
  const handelEventClick = () => {
    alert('Click event from button');
  };
  const handelEventSubmit = (e) => {
    e.preventDefault();
    alert('Form is submited');
  };
  return (
    <section>
      <form onSubmit={handelEventSubmit}>
        <h2>Typical Form</h2>
        <input type='text' name='example' onChange={handelEvent} style={{ margin: '1rem 0' }} />
      <button type='submit'>Submit</button>
      <div>
      <button type='button' onClick={handelEventClick}>Click me</button>
      </div>
      
      </form>
    </section>
  );
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Booklist />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
