import React from 'react';
import '../styles/Article.css';

const firstHeading = 'React internship';
const secondHeading = 'Заголовок!';
const thirdHeading = 'Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы. Здесь может быть все что угодно, но есть только то что есть, увы.';

function Article() {   
  return (
    <div className="article">
      <h1>{firstHeading}</h1>
      <h2>{secondHeading}</h2>
      <p>{thirdHeading}</p>
    </div>
    )
  }
export default Article