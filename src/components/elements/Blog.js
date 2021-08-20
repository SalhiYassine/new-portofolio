import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

function Blog({ blogData }) {
  const {
    id,
    category,
    title,
    date,
    author,
    image,
    filesource,
    frontend,
    backend,
    api,
    live,
    githubURL,
  } = blogData;
  const getNospaceTitle = (filesource) => {
    let tempArr = filesource.split('/');
    let fileName = tempArr[tempArr.length - 1];
    let getName = fileName.slice(0, -3);
    return getName;
  };
  return (
    <ScrollAnimation
      animateIn='fadeInUp'
      animateOut='fadeInOut'
      animateOnce={true}>
      <div className='blog-item rounded bg-white shadow-dark'>
        <div className='thumb'>
          <a>
            <span className='category'>{category}</span>
          </a>

          <img src={image} alt='blog-title' />
        </div>
        <div className='details'>
          <h4 className='my-0 title'>{title}</h4>
          <ul className='list-inline meta mb-0 mt-2'>
            <li className='list-inline-item'>{date}</li>
            <li className='list-inline-item'>{author}</li>
          </ul>
          <p>{frontend}</p>
          <p>{backend}</p>
          <p>{api}</p>
          <div className='d-flex justify-content-between  my-2'>
            {live && <Link className='btn btn-default btn-md'>Live</Link>}
            <a
              target='_blank'
              href={githubURL}
              className='btn btn-default btn-md'>
              Source
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Blog;
