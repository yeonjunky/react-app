import React from 'react';
import './TodoTemplate.css'

const Todoform = ({form, children}) =>{
  return (
  <main className='todo-form'>
    <div className='title'>
      TODO LIST
    </div>
    <section className='form-wrapper'>
      {form}
    </section>
    <section className='todos-wrapper'>
      {children}
    </section>
  </main>
  );
};

export default Todoform;