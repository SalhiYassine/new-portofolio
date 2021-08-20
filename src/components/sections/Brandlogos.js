import React from 'react';

const brandlogoData = [
  {
    id: 1,
    image: 'images/skills/icons8-java.svg',
  },
  {
    id: 6,
    image: 'images/skills/icons8-javascript.svg',
  },
  {
    id: 5,
    image: 'images/skills/icons8-react.svg',
  },
  {
    id: 8,
    image: 'images/skills/icons8-redux.svg',
  },
  {
    id: 3,
    image: 'images/skills/icons8-mysql-logo.svg',
  },
  {
    id: 2,
    image: 'images/skills/icons8-mongodb.svg',
  },
  {
    id: 4,
    image: 'images/skills/icons8-nodejs.svg',
  },
  {
    id: 7,
    image: 'images/skills/icons8-spring-logo.svg',
  },
];

function Brandlogos() {
  return (
    <div id='branglogos'>
      <div className='container'>
        <div className='row'>
          {brandlogoData.map((brandlogo) => (
            <div className='col-md-3 col-3' key={brandlogo.id}>
              <div className='client-item'>
                <div className='inner'>
                  <img
                    src={brandlogo.image}
                    alt='client-name'
                    className='img-100'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
