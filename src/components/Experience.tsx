export default function Experience() {
  return (
    <div className='experience-container relative flex h-screen w-screen gap-8 overflow-hidden p-16 text-sky-200'>
      <div className='flex h-full max-w-md flex-1 flex-col items-center justify-center pb-12 text-justify font-light'>
        <p
          className='z-50 w-full text-2xl font-black uppercase leading-10'
          style={{
            fontFamily: 'vortice-concept, sans-serif',
            filter: 'drop-shadow(0 0 4px #1528d2aa)'
          }}
        >
          TGL Solutions
        </p>
        <p className='z-50 text-base'>
          I started as a{' '}
          <span className='text-lime-400'>
            FullStack Developer intern in March 2022
          </span>{' '}
          and transitioned to{' '}
          <span className='text-lime-400'>full-time in April 2022</span>. I work
          for a company that provides outsourcing services and my
          responsibilities include participating in product development
          projects.
        </p>
        <p className='z-50 mt-4 text-base'>
          Throughout my professional career, I have acquired extensive and
          varied experience in software development. This experience encompasses
          a range of different projects, including both in-house development
          work and outsourced work for third-party clients. I have been involved
          in a multitude of projects, each utilizing different technologies and
          methodologies, each of which has presented its own unique challenges.
          I have worked across a variety of software development areas, from
          FrontEnd development to BackEnd development and real-time
          communication management. This experience has made me an adaptable and
          dependable developer, capable of providing high-quality software
          solutions for a broad range of projects.
        </p>
      </div>
      <div className='z-10 m-10 flex flex-1 items-center justify-center'>
        <div className='w-full' id='award'>
          <img
            className='z-50 h-full w-full object-contain'
            src='img/award.jpeg'
            alt='Experience design'
          />
        </div>
      </div>

      <div className='absolute inset-8 z-[-1000] bg-black/90 text-sm font-light opacity-0'>
        <div className='group absolute left-1/2 top-1/2 flex h-[40%] w-[40%] translate-x-[-100%] translate-y-[-100%] items-end justify-end overflow-hidden bg-blue-500/20 transition-all duration-700 hover:h-1/2 hover:w-1/2 hover:bg-blue-500/90'>
          <div className='p-4'>
            <p
              style={{
                fontFamily: 'vortice-concept, sans-serif',
                WebkitTextStroke: '0.5px white',
                filter: 'drop-shadow(0 0 4px #1528d2aa)'
              }}
            >
              01. House Inspection System
            </p>
            <p className=''>
              This project involves a web and mobile application system that is
              designed to conduct surveys and evaluations of construction works
              and apartment buildings. The main purpose of this project is to
              provide a convenient and efficient way to assess the condition and
              quality of these structures.
            </p>
            <p>
              Role:{' '}
              <span className='text-blue-600'>
                Frontend, Backend, Mobile developer
              </span>
            </p>
            <p>
              My contributions: I contributed to a project involving surveys and
              evaluations of construction works and apartments. I worked on
              frontend, backend, and mobile app roles. I used ReactJS, Tailwind
              CSS, Ant Design, Redux, React Hook Form, and React DND Beautiful
              for the frontend. For the backend, I used NestJS and MongoDB, and
              for the mobile app, I used React Native. I optimized performance
              for handling large amounts of data in forms and integrated GraphQL
              with Apollo Client for efficient data retrieval and manipulation.
            </p>
          </div>
        </div>
        <div className='absolute left-1/2 top-1/2 flex h-[35%] w-[30%] translate-x-[-100%] items-center justify-center overflow-hidden bg-red-500/20 p-4 transition-all duration-700 hover:h-1/2 hover:w-1/2 hover:bg-red-500/90'>
          <div className='p-4'>
            <p
              style={{
                fontFamily: 'vortice-concept, sans-serif'
              }}
            >
              03. Custom open-source
            </p>

            <p>
              The aim of this project is to improve the functionality of
              Mattermost, an open-source code, to facilitate better
              communication operations, follow-up communication, task
              management, and internal company processes. The main goal is to
              enhance the user interface and incorporate additional features
              that can seamlessly connect with other company systems, creating a
              more cohesive ecosystem. This approach aims to increase
              operational efficiency and streamline the management of internal
              activities.
            </p>
            <p>
              Role: <span className='text-blue-600'>Frontend</span>
            </p>
            <p>
              I have made significant contributions by customizing and improving
              the open-source code of Mattermost. My work involved enhancing the
              user interface to make it more user-friendly and integrating
              additional features with other systems used by the company. These
              changes resulted in improved communication efficiency and
              simplified management of internal processes.
            </p>
          </div>
        </div>
        <div className='absolute left-1/2 top-[50%] flex h-[40%] w-[35%] items-center justify-center overflow-hidden bg-violet-500/20 transition-all duration-700 hover:h-1/2 hover:w-1/2 hover:bg-violet-500/90'>
          <div className='p-4'>
            <p
              style={{
                fontFamily: 'vortice-concept, sans-serif'
              }}
            >
              04. Travel booking system
            </p>
            <p>
              This project aims to renew an outdated logistics system using new
              technologies based on customer requirements. The process will
              involve generating ideas for improvements, implementing necessary
              upgrades and integrations, and overhauling the entire system to
              make it more efficient and functional.
            </p>
            <p>
              Role:{' '}
              <span className='text-blue-600'>Frontend, Backend developer</span>
            </p>
            <p>
              My contributions: I built easily usable and reusable components,
              upgraded and maintained them. I organized modules to shorten
              project development time and enhance efficiency. I utilized
              NextJS, React Query, Ant Design, Tailwind CSS, React Hook Form,
              TypeScript, and styled components to create a visually appealing,
              responsive, and well-structured project.
            </p>
          </div>
        </div>
        <div className='absolute left-1/2 top-[50%] flex h-[30%] w-[45%] translate-y-[-100%] items-center justify-center overflow-hidden bg-gray-500/20 transition-all duration-700 hover:h-1/2 hover:w-1/2 hover:bg-gray-500/90'>
          <div className='p-4'>
            <p
              style={{
                fontFamily: 'vortice-concept, sans-serif'
              }}
            >
              02. Finaccel module
            </p>
            <p>
              A booking system built with Next.js caters to businesses needing a
              web-based platform optimized for mobile devices. Its responsive
              design ensures accessibility across all devices with web browsers,
              providing an efficient solution for integration within clients'
              webviews. This approach minimizes costs while enhancing
              convenience and user experience.
            </p>
            <p>
              Role: <span className='text-blue-600'>Frontend developer</span>
            </p>
            <p>
              My contributions: I integrated Firebase authentication with
              webviews and created a visually appealing UI using Ant Design and
              Tailwind CSS. I used SWR for efficient data fetching and socket.io
              for instant communication, while NestJS, Laravel Echo and Firebase
              served as reliable backend services for real-time communication
              and messaging functionality to support the booking system.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
