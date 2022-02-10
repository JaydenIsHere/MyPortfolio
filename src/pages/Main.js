import React from 'react'
import homePage from '../image/home-image.png'
import gear from '../image/gear-grey.png'
import html from '../image/HTML2.png'
import css from '../image/CSS32.png'
import javascript from '../image/javascript2.png'
import sass from '../image/sass.png'
import react from '../image/React.png'
import xd from '../image/XD.png'
import node from '../image/nodejs.png'
import mongodb from '../image/mongodb.png'
import API from '../image/API.png'
import PHP from '../image/PHP.png'
import WordPress from '../image/WordPress.png'
import VideoProject from '../image/Video Project.jpg'
import foodStore from '../image/projects/Food store.png'
import JDweb from '../image/JD web.png'
import JDSport from '../image/projects/JDSport.png'
import BEFIT from '../image/projects/BEFIT.png'
import Proshop from '../image/projects/Proshop.png'
import palmtree from '../image/projects/palmtree.png'
import yelpCamp from '../image/projects/YelpCamp.png'
import fictionalUniversity from '../image/projects/fictional-university.png'
import certificate1 from '../image/certificate-1.png'
import certificate2 from '../image/certificate-2.JPG'
import certificate3 from '../image/certificate-3.jpg'
import { HashLink as Link } from 'react-router-hash-link'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './main.scss'
const Main = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

  const changeColor = () => {
    const contact = document.querySelector('.contact')
    if (contact) {
      if (
        window.innerHeight + window.pageYOffset + contact.offsetHeight >
        document.body.offsetHeight
      ) {
        contact.classList.add('bg-color-1')
      } else {
        contact.classList.remove('bg-color-1')
      }
    }
  }
  window.addEventListener('scroll', changeColor)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message, subject)

    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios
      .post('https://formsubmit.co/ajax/classic19931126@gmail.com', {
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))

    setName('')
    setEmail('')
    setMessage('')
    setSubject('')
    navigate('/thankyou')
  }
  //popup image
  const openImage = (e) => {
    if (e.target.classList.contains('cer-image')) {
      const src = e.target.getAttribute('src')
      document.querySelector('.popup-img').src = src
      document.querySelector('.popup-image').style.display = 'block'
    }
  }

  const closeImage = () => {
    document.querySelector('.popup-image').style.display = 'none'
  }

  return (
    <>
      {/* -------------home section--------- */}
      <section className='home py-5' id='home'>
        <div className='container flex-wrap'>
          <div className='home-content text-light' data-aos='fade-right'>
            <h4>Hi there! My name is</h4>
            <h1 className='xl'>Jayden</h1>
            <h4>
              Frontend<span className='text-blue'> Web Development</span>
            </h4>
            <Link to='#project' className='btn btn-blue'>
              View Portfolio
            </Link>
          </div>
          <div className='image' data-aos='fade-left'>
            <img src={homePage} alt='' />
          </div>
        </div>
        <div className='gear'>
          <img src={gear} className='gear1 rotating' alt='' />
          <img src={gear} className='gear2 rotating' alt='' />
          <img src={gear} className='gear3 rotating' alt='' />
        </div>
      </section>
      {/* -------------About section--------- */}
      <section className='about' id='about'>
        <div className='container'>
          <div className='about-header text-light' data-aos='zoom-in'>
            <h3>About</h3>
            <h1>
              Personal <span className='text-blue'>Info</span>
            </h1>
            <h3>Get to know more about me </h3>
          </div>
          <div className='about-body flex-wrap my-3 py-3'>
            {/* item1 */}
            <div className='about-image' data-aos='fade-right'>
              <img src={JDweb} alt='' />
            </div>

            {/* item2*/}
            <div className='about-content text-light' data-aos='fade-left'>
              <h3 className='text-blue'>Hello!</h3>
              <p>
                My name is Jayden,Currently I'm working as a Content Creator and
                also is a Frontend Web Developer using web technologies to build
                amazing products and focusing on solving problems for different
                niches and different industries using the power of technology.
              </p>
              <p>
                I will love to hear from you. Whether it’s a project. Job
                opportunity, or just a chat Feel free to contact me
              </p>
            </div>
          </div>
          {/* skill section */}
          <div className='about-icons' data-aos='zoom-in'>
            <h1 className='icon-text text-light'>Skills</h1>
            {/* card-1 */}
            <div className='about-wrapper'>
              <h3 className='card-text text-center py-2'>Frontend</h3>
              <div className='grid grid-3 py-3'>
                <div className='icon'>
                  <h4 className='text-black'>HTML</h4>
                  <img src={html} alt='' />
                </div>

                <div className='icon'>
                  <h4 className='text-black'>CSS</h4>
                  <img src={css} alt='' />
                </div>
                <div className='icon'>
                  <h4 className='text-black'>JavaScript</h4>
                  <img src={javascript} alt='' />
                </div>
                <div className='icon'>
                  <h4 className='text-black'>SASS</h4>
                  <img src={sass} alt='' />
                </div>
                <div className='icon'>
                  <h4 className='text-black'>React</h4>
                  <img src={react} alt='' />
                </div>
                <div className='icon'>
                  <h4 className='text-black'>AdobeXD</h4>
                  <img src={xd} alt='' />
                </div>
              </div>
            </div>

            {/* card-2 */}
            <div className='about-wrapper'>
              <h3 className='card-text text-center py-2'>Backend</h3>

              <div className='grid grid-3 py-3'>
                <div className='icon'>
                  <h4 className='text-black'>Nodejs</h4>
                  <img src={node} alt='' />
                </div>

                <div className='icon'>
                  <h4 className='text-black'>mongoDB</h4>
                  <img src={mongodb} alt='' />
                </div>

                <div className='icon'>
                  <h4 className='text-black'>PHP</h4>
                  <img className='php' src={PHP} alt='' />
                </div>

                <div className='icon'>
                  <h4 className='text-black'>Rest API</h4>
                  <img src={API} alt='' />
                </div>
              </div>
            </div>
            {/* card-3 */}
            <div className='about-wrapper'>
              <h3 className='card-text text-center py-2'>
                Content Management System
              </h3>

              <div className='grid grid-1 py-3'>
                <div className='icon'>
                  <h4 className='text-black'>WordPress</h4>
                  <img src={WordPress} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------Project section--------- */}
      <section className='project-section' id='project'>
        <div className='container py-2'>
          <div className='project-header text-light' data-aos='zoom-in'>
            <h3>Work</h3>
            <h1>
              Website <span className='text-blue'>Project</span>
            </h1>
            <h3>
              Here you can find some of the projects that I created recently{' '}
            </h3>
          </div>
          <div className='projects'>
            <div className='project flex-wrap' data-aos='fade-up'>
              <div className='image'>
                <img src={foodStore} alt='' />
              </div>
              <div className='project-content'>
                <h1>
                  Food Store{' '}
                  <span className='text-blue'>HTML/CSS/JavaScript</span>
                </h1>
                <p>
                  I created a fully responsive single page website user can
                  submit the contact form and business owner will receive the
                  message via email.{' '}
                </p>
                <div className='buttoms'>
                  <a
                    href='https://hardcore-lovelace-4d4ea3.netlify.app/'
                    className='btn btn-blue'
                  >
                    Visit Site
                  </a>
                  <a
                    href='https://github.com/JaydenIsHere/Restaurant.JaydenIsHere.github.io'
                    className='btn btn-blue'
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
            {/* item1 */}
            <div className='project flex-wrap' data-aos='fade-up'>
              <div className='image'>
                <img src={JDSport} alt='' />
              </div>
              <div className='project-content'>
                <h1>
                  JD Sport{' '}
                  <span className='text-blue'>HTML/CSS/JavaScript</span>
                </h1>
                <p>
                  This is a fully responsive multi page ecommerce website, user
                  able to view product detail / user sign up /cart page.
                </p>
                <div className='buttoms'>
                  <a
                    href='https://brave-shannon-e4cbbb.netlify.app/index.html'
                    className='btn btn-blue'
                  >
                    Visit Site
                  </a>
                  <a
                    href='https://github.com/JaydenIsHere/JDSport'
                    className='btn btn-blue'
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
            {/* item2 */}
            <div className='project flex-wrap' data-aos='fade-up'>
              <div className='image'>
                <img src={BEFIT} alt='' />
              </div>
              <div className='project-content'>
                <h1>
                  BEFIT <span className='text-blue'>React/SASS</span>
                </h1>
                <p>
                  This is a fully responsive single page website, I implemented
                  the carousel function to make a dynamic and informative
                  website..{' '}
                </p>
                <div className='buttoms'>
                  <a
                    href='https://happy-jackson-02c00c.netlify.app/'
                    className='btn btn-blue'
                  >
                    Visit Site
                  </a>
                  <a
                    href='https://github.com/JaydenIsHere/BeFitGym'
                    className='btn btn-blue'
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
            {/* item1-1 */}
            <div className='project flex-wrap' data-aos='fade-up'>
              <div className='image'>
                <img src={yelpCamp} alt='' />
              </div>
              <div className='project-content'>
                <h1>
                  Yelp Camp <span className='text-blue'>Full Stack</span>
                </h1>
                <p>
                  This is a Full stack project, it allow user register an
                  account and create thier own campground, there's a map to see
                  your campground location. user also can comment on other
                  user's campground.
                </p>
                <div className='buttoms'>
                  <a
                    href='https://cryptic-escarpment-33252.herokuapp.com/'
                    className='btn btn-blue'
                  >
                    Visit Site
                  </a>
                  <a
                    href='https://github.com/JaydenIsHere/YelpCamp'
                    className='btn btn-blue'
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>

            {/* item3 */}

            <div className='project flex-wrap' data-aos='fade-up'>
              <div className='image'>
                <img src={Proshop} alt='' />
              </div>
              <div className='project-content'>
                <h1>
                  Proshop{' '}
                  <span className='text-blue'>MERN Stack Application</span>
                </h1>
                <p>
                  User can register and sign in this ecommerce website, it has
                  product review and check out functionality with PayPal.
                  business owner can a access admin account and manage order and
                  user list.{' '}
                </p>
                <div className='buttoms'>
                  <a
                    href='https://proshop1711.herokuapp.com/'
                    className='btn btn-blue'
                  >
                    Visit Site
                  </a>
                  <a
                    href='https://github.com/JaydenIsHere/Proshop'
                    className='btn btn-blue'
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
            {/* item4 */}

            <div className='project flex-wrap' data-aos='fade-up'>
              <div className='project-content'>
                <h1>
                  Fictional University{' '}
                  <span className='text-blue inline-block'>
                    Wordpress site (PHP/Javascript)
                  </span>
                </h1>
                <p>
                  This is wordpress site. Student can use google map to check
                  location,they also can create/update/delete thier own a note
                  after they login...{' '}
                </p>
                <div className='buttoms'>
                  <a href='https://jaydenishere.com/' className='btn btn-blue'>
                    Visit Site
                  </a>
                  <a
                    href='https://github.com/JaydenIsHere/fictional-university'
                    className='btn btn-blue'
                  >
                    Repository
                  </a>
                </div>
              </div>
              <div className='image'>
                <img src={fictionalUniversity} alt='' />
              </div>
            </div>
            {/* item5 */}

            <div className='project flex-wrap' data-aos='fade-up'>
              <div className='image'>
                <img src={palmtree} alt='' />
              </div>
              <div className='project-content'>
                <h1>
                  PalmTree Bar{' '}
                  <span className='text-blue'>Frontend Website</span>
                </h1>
                <p>
                  This is a single page website and fully responsive. I created
                  it from design to develop all done by me{' '}
                </p>
                <div className='buttoms'>
                  <a
                    href='https://fervent-aryabhata-35842f.netlify.app/'
                    className='btn btn-blue'
                  >
                    Visit Site
                  </a>
                  <a
                    href='https://github.com/JaydenIsHere/PalmTree'
                    className='btn btn-blue'
                  >
                    Repository
                  </a>
                </div>
              </div>
            </div>
            {/* item6 */}

            <h1 className='text-light text-center lg'>
              Video <span className='text-blue lg'>Project</span>
            </h1>

            <div className='project flex-wrap' data-aos='fade-up'>
              <div className='image'>
                <img src={VideoProject} alt='' />
              </div>
              <div className='project-content'>
                <p>
                  Here you can find out all my video projects that I created{' '}
                </p>
                <div className='buttoms'>
                  <Link to='/videoproject' className='btn btn-blue'>
                    View Project
                  </Link>
                </div>
              </div>
            </div>
            {/* item7 */}
          </div>
        </div>
        {/* ------------------certification section----------- */}
      </section>
      <section className='certification' id='certification'>
        <div
          className='cer-header text-light text-center py-2'
          data-aos='zoom-in'
        >
          <h3>Additional Certification</h3>
          <h1>
            Continue <span className='text-blue'>Learning</span>
          </h1>
          <h3>Learning is not only in school but for lifetime</h3>
        </div>
        <div class='cer-container'>
          <div className='image-container'>
            <div className='imageWrapper'>
              <div className='image' onClick={openImage}>
                <img src={certificate1} alt='' className='cer-image' />
              </div>
              <div className='imageContent'>
                <p>
                  Course:{' '}
                  <span className='text-blue'>
                    The Web Developer Bootcamp 2021
                  </span>
                </p>
                <p>Length: 63.5 hours</p>
                <p>Instructor: Colt Steele</p>
              </div>
            </div>

            <div className='imageWrapper'>
              <div className='image' onClick={openImage}>
                <img src={certificate2} className='cer-image' alt='' />
              </div>
              <div className='imageContent'>
                <p>
                  Course:{' '}
                  <span className='text-blue'>MERN eCommerce From Scratch</span>
                </p>
                <p>Length: 15 hours</p>
                <p>Instructor: Brad Traversy</p>
              </div>
            </div>

            <div className='imageWrapper'>
              <div className='image' onClick={openImage}>
                <img src={certificate3} className='cer-image' alt='' />
              </div>
              <div className='imageContent'>
                <p className='p-3'>
                  Course:{' '}
                  <span className='text-blue line'>
                    Become a WordPress Developer :{' '}
                  </span>
                </p>
                <p className='text-blue line'>Unlocking Power With Code</p>
                <p>Length: 35.5 hours</p>
                <p>Instructor: Brad Schiff</p>
              </div>
            </div>
          </div>
          <div className='popup-image'>
            <span onClick={closeImage}>&times;</span>
            <img src={certificate1} alt='' className='popup-img' />
          </div>
        </div>
      </section>
      {/* -----------------contact-----------------*/}
      <section className='contact' id='contact'>
        <div
          className='container contact-header text-light py-2'
          data-aos='zoom-in'
        >
          <h3>Contact</h3>
          <h1>
            Say <span className='text-blue'>Hello.</span>
          </h1>
          <h3>
            Submit the form below so I can get back to you as soon as posible
          </h3>
        </div>
        <div className='container flex-wrap' data-aos='zoom-in-down'>
          <form onSubmit={handleSubmit}>
            <input
              type='hidden'
              name='_subject'
              value='Your response is here!!'
            ></input>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Name'
              className='box'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor='subject'>Subject</label>

            <input
              type='text'
              id='subject'
              name='subject'
              placeholder='Subject'
              className='box'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label htmlFor='email'>Email</label>

            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              className='box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor='message'>Message</label>

            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              value={message}
              placeholder='Message'
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <input type='submit' className='btn btn-blue' id='submit' />
          </form>
        </div>
      </section>
    </>
  )
}

export default Main
