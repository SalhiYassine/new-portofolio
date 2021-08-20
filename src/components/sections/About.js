import React from 'react';
import TrackVisibility from 'react-on-screen';
import Counter from '../elements/Counter';
import Pagetitle from '../elements/Pagetitle';
import Skill from '../elements/Skill';
import { Link } from 'react-router-dom';
import File from '../../YassineSalhiCV.pdf';

let intro = `
  👋🏽 Hi, my name is Yassine Salhi 
  `;
let education = `
  🎓 Soon to be a grad with a Bachelor's of Science in Computer Science - First (June 2022) 
 `;
let passion = `
🌇 London based, with a passion for software development and cloud technologies 
 `;
let skills = `
📚 Most experienced within JavaScript [React.JS, Redux, Node.JS, Express.JS] and Java [Spring, Springboot] and currently pursuing AWS Solutions Architect Certification `;
let future = `💻 As for my future, I am looking for offers as a Full-Stack Developer within a diverse team at a company that will push me to learn and hone in on my abilities further`;

const aboutContent = {
  name: 'Bolby',
  avatarImage: '/images/avatar-2.svg',
  content: '',
};

const progressData = [
  {
    id: 1,
    title: 'Development',
    percantage: 85,
    progressColor: '#FFD15C',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    percantage: 95,
    progressColor: '#FF4C60',
  },
  {
    id: 3,
    title: 'Photography',
    percantage: 70,
    progressColor: '#6C6CE5',
  },
];

const counterData = [
  {
    id: 1,
    title: 'Projects completed',
    count: 198,
    icon: 'icon-fire',
  },
  {
    id: 2,
    title: 'Cup of coffee',
    count: 5670,
    icon: 'icon-cup',
  },
  {
    id: 3,
    title: 'Satisfied clients',
    count: 427,
    icon: 'icon-people',
  },
  {
    id: 4,
    title: 'Nominees winner',
    count: 35,
    icon: 'icon-badge',
  },
];

function About() {
  return (
    <section id='about'>
      <div className='container'>
        <Pagetitle title='About Me' />
        <div className='row'>
          {/* <div className='col-md-3'>
            <div className='text-center text-md-left'>
              <img
                src='images/IMG_0693-1-min-min-modified.png'
                alt={aboutContent.name}
                className='w-50'
              />
            </div>
            <div className='spacer d-md-none d-lg-none' data-height='30'></div>
          </div> */}

          <div className='col-md-9 triangle-left-md triangle-top-sm mx-auto'>
            <div className='rounded bg-white shadow-dark padding-30'>
              <div className='row'>
                <div className='col-md-12'>
                  <p className='text-justify'>{intro}</p>
                  <p className='text-justify'>{education}</p>
                  <p className='text-justify'>{passion}</p>
                  <p className='text-justify'>{skills}</p>
                  <div className='mt-3'>
                    <Link
                      to={File}
                      target='_blank'
                      download
                      className='btn btn-default'>
                      View Resume
                    </Link>
                  </div>
                  <div
                    className='spacer d-md-none d-lg-none'
                    data-height='30'></div>
                </div>
                {/* <div className='col-md-6'>
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className='progress-wrapper'>
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className='spacer' data-height='70'></div>
        {/* <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default About;
