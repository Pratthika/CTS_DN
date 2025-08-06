import React, { Component } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'book', // options: book, blog, course, all
    };
  }

  handleChangeView = (view) => {
    this.setState({ view });
  };

  render() {
    const { view } = this.state;

    // 1. Using element variables
    let element;
    if (view === 'book') {
      element = <BookDetails />;
    } else if (view === 'blog') {
      element = <BlogDetails />;
    } else if (view === 'course') {
      element = <CourseDetails />;
    } else if (view === 'all') {
      element = (
        <>
          <BookDetails />
          <BlogDetails />
          <CourseDetails />
        </>
      );
    } else {
      element = <p>Please select a valid view.</p>;
    }

    return (
      <div className="App" style={{ textAlign: 'center', marginTop: '30px' }}>
        <h1>Blogger App 🧠</h1>

        {/* 2. Button Clicks to change views */}
        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => this.handleChangeView('book')}>Book</button>{' '}
          <button onClick={() => this.handleChangeView('blog')}>Blog</button>{' '}
          <button onClick={() => this.handleChangeView('course')}>Course</button>{' '}
          <button onClick={() => this.handleChangeView('all')}>All</button>
        </div>

        {/* 3. Using variable-based conditional rendering */}
        {element}

        {/* 4. Inline short-circuit rendering */}
        {view === 'book' && <p>Currently viewing only Books 📘</p>}

        {/* 5. Ternary operator */}
        <p>
          {view === 'blog'
            ? 'You are reading Blogs ✍️'
            : view === 'course'
            ? 'You are learning Courses 🎓'
            : view === 'all'
            ? 'Viewing all content!'
            : ''}
        </p>
      </div>
    );
  }
}

export default App;
