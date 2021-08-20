import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import Disqus from 'disqus-react';
import Header from '../components/layouts/Header';
import { Link } from 'react-router-dom';

function BlogDetails(props) {
  const [content, setContent] = useState('');
  const blogId = props.match.params.id;
  const blogFile = props.match.params.title;

  useEffect(() => {
    import(`../blogs/${blogFile}.md`)
      .then((res) => res.default)
      .then((res) => {
        fetch(res)
          .then((result) => result.text())
          .then((result) => setContent(result));
      });
  }, [content, blogFile]);

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  return (
    <>
      <Header
        logoSource='/images/logo.svg'
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? 'content open' : 'content'}>
        <div className='spacer' data-height='96'></div>
        <div className='blog-page-section'>
          <div className='container'>
            <div className='blog-single shadow-dark p-30'>
              <Markdown>{content}</Markdown>

              <div className='mt-4'>
                <Link
                  className='btn  btn-disabled me-2 disabled'
                  to={''}
                  spy={true}
                  smooth={true}
                  duration={500}
                  disabled>
                  View Live
                </Link>
                <a
                  className='btn btn-default'
                  href='https://github.com/SalhiYassine/MERN-Ecommerce'
                  target='_blank'>
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='spacer' data-height='96'></div>
      </main>
    </>
  );
}

export default BlogDetails;
