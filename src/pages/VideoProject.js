import React from 'react'
import './videoProject.scss'
import card1 from '../image/card-1.jpg'
import card2 from '../image/card-2.JPG'
import card3 from '../image/card-3.jpg'
const VideoProject = () => {
  return (
    <section className='videoProject'>
      <div className='container py-5'>
        <h1 className='headline text-center text-light p-2'>
          Video <span className='text-blue'>Project</span>
        </h1>
        <p className='text-light text-center sm'>
          Video marketing is play very important role in the digital marketing{' '}
        </p>
        <div className='card-wrapper'>
          {/* card-1 */}
          <div
            className='card grid-responsive bg-grey'
            onClick={() =>
              (window.location.href =
                'https://www.youtube.com/channel/UC-SxNLOm5L7vEcdUnH_nUAg')
            }
          >
            <div className='card-image'>
              <img src={card1} alt='' />
            </div>
            <div className='card-content'>
              <h2 className='text-blue'>
                Personal YouTube Channel (ST Warrior)
              </h2>
              <p>
                I have been managing this YouTube Channel for about 3 years and
                upload 130+ videos
              </p>
            </div>
          </div>
          {/* card-2 */}
          <div
            className='card grid-responsive bg-grey'
            onClick={() =>
              (window.location.href =
                'https://www.youtube.com/watch?v=Wvfaohk4QVc&list=PLCftdv0B_JugTqUgAo4D02Vpf2-JdL4A9')
            }
          >
            <div className='card-image'>
              <img src={card2} alt='' />
            </div>
            <div className='card-content'>
              <h2 className='text-blue'>Property listing video</h2>
              <p>
                I have work with several property agent for their listing
                property as now the video marketing is become part of their
                marketing purpose
              </p>
            </div>
          </div>
          {/* card-3 */}
          <div
            className='card  grid-responsive bg-grey'
            onClick={() =>
              (window.location.href =
                'https://www.youtube.com/watch?v=SU8zeETqEiU&list=PLCftdv0B_JuiZa7zKI1WLQvHL_dtWbqzR')
            }
          >
            <div className='card-image'>
              <img src={card3} alt='' />
            </div>
            <div className='card-content'>
              <h2 className='text-blue'>Property series video</h2>
              <p>
                This series video is stand at corporate level to deliver the
                company message through our creative ideas to form a light
                hearted series of video
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoProject
