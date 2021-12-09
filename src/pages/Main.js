import React from 'react'
import homePage from '../image/home-image.png'
import gear from '../image/gear-grey.png'
import html from '../image/HTML2.png'
import css from '../image/CSS32.png'
import javascript from '../image/javascript2.png'
import sass from '../image/sass.png'
import react from '../image/React.png'
import xd from '../image/XD.png'
import foodStore from '../image/projects/Food store.png'
import JDSport from '../image/projects/JDSport.png'
import BEFIT from '../image/projects/BEFIT.png'
import Proshop from '../image/projects/Proshop.png'
import YelpCamp from '../image/projects/YelpCamp.png'
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
          <div className='about-body flex-wrap my-3'>
            {/* item1 */}

            <div className='about-content text-light' data-aos='fade-left'>
              <h3 className='text-blue'>Hello!</h3>
              <p>
                My name is Jayden and I’m a passionate Frontend Web Developer
                using web technologies to build amazing products and focusing on
                solving problems for different niches and different industries
                using the power of technology.
              </p>
              <p>
                I will love to hear from you. Whether it’s a project. Job
                opportunity, or just a chat Feel free to contact me
              </p>
            </div>
            {/* item2 */}
            <div className='about-icons' data-aos='fade-right'>
              <h3 className='icon-text text-blue'>
                The technologies I am using
              </h3>
              <div className='grid grid-3'>
                <div className='icon'>
                  <h4 className='text-light'>HTML</h4>
                  <img src={html} alt='' />
                </div>

                <div className='icon'>
                  <h4 className='text-light'>CSS</h4>
                  <img src={css} alt='' />
                </div>
                <div className='icon'>
                  <h4 className='text-light'>JavaScript</h4>
                  <img src={javascript} alt='' />
                </div>
                <div className='icon'>
                  <h4 className='text-light'>SASS</h4>
                  <img src={sass} alt='' />
                </div>
                <div className='icon'>
                  <h4 className='text-light'>React</h4>
                  <img src={react} alt='' />
                </div>
                <div className='icon'>
                  <h4 className='text-light'>AdobeXD</h4>
                  <img src={xd} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------Project section--------- */}
      <section className='project-section' id='project'>
        <div className='container'>
          <div className='project-header text-light' data-aos='zoom-in'>
            <h3>Work</h3>
            <h1>
              Latest <span className='text-blue'>Project</span>
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
              <div className='image'>
                <img src={YelpCamp} alt='' />
              </div>
              <div className='project-content'>
                <h1>
                  YelpCamp{' '}
                  <span className='text-blue'>Full stack Application</span>
                </h1>
                <p>
                  This is full stack application.User can create their own
                  account and share campground in the community where user can
                  also leave review at other user campgound.{' '}
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

            {/* item5 */}
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
