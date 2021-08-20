import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../elements/Blog';
import Pagetitle from '../elements/Pagetitle';
import Brandlogos from './Brandlogos';

const allBlogs = [
  {
    id: 1,
    title: 'Full Stack E-Commerce Application',
    image: 'images/blog/E-Commerce-SC.png',
    filesource: '../../blogs/MERN-FullStack-Ecommerce.md',
    date: '09 July, 2021',
    author: 'Yassine Salhi',
    category: 'Full-Stack',
    liveURL: '',
    githubURL: 'https://github.com/SalhiYassine/MERN-Ecommerce',
    frontend: 'Front-End: [React.JS, Redux, Axios]',
    backend: 'Back-End: [Express.JS, Node.JS, Mongoose.JS]',
    api: 'APIs: [PayPal, Stripe]',
    live: false,
  },
  {
    id: 2,
    title: 'Full Stack Resource Sharing Application',
    image: 'images/blog/unifluentpng.png',
    filesource: '../../blogs/MERN-FullStack-Ecommerce.md',
    date: '14 May, 2021',
    author: 'Yassine Salhi',
    category: 'Full-Stack',
    liveURL: '',
    githubURL:
      'https://github.com/SalhiYassine/cs2001-2020_21-group8/tree/main',
    frontend: 'Front-End: [React.JS, Context.JS, Axios]',
    backend: 'Back-End: [Spring, SpringBoot, SpringSecurity]',
    api: 'APIs: N/A',
    live: false,
  },
];

function Blogs() {
  return (
    <section id='blog'>
      <div className='container'>
        <Pagetitle title='Latest Projects' />
        <div className='row blog-wrapper container'>
          {allBlogs.map((blogItem) => (
            <div
              className=' col-xl-5 col-lg-7 col-md-7 col-sm-12 col-xs-12 my-4 mx-auto'
              key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <Brandlogos />
        <div className='text-center'>
          <div className='spacer' data-height='30'></div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
