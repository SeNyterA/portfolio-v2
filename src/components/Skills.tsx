export default function Skills() {
  return (
    <div className='skills-container relative flex h-screen w-screen items-center p-16 text-sky-200'>
      <div className='z-[2] flex h-fit max-w-lg flex-1 flex-col items-center bg-black p-10 text-justify font-light'>
        <p
          className='z-50 w-full text-2xl font-black uppercase leading-10'
          style={{
            fontFamily: 'vortice-concept, sans-serif',
            filter: 'drop-shadow(0 0 4px #1528d2aa)'
          }}
        >
          Frontend
        </p>

        {/* I have experience working with ReactJS (NextJS, Hook, Redux Toolkit), VueJS (NuxtJS, Vuex), Material UI, TailwindCSS, Bootstrap, Axios, and other technologies. */}
        <p className='z-50 text-base'>
          I am a skilled creator committed to designing engaging web and mobile
          experiences that prioritize user satisfaction. I possess expertise in
          advanced technologies like{' '}
          <span className='text-lime-400'>ReactJS</span> ,{' '}
          <span className='text-lime-400'>NextJS</span> and{' '}
          <span className='text-lime-400'>React Native</span> which I utilize to
          build complex, high-performance applications. With a strong foundation
          and the necessary skills, I adeptly tackle the challenges of frontend
          development, leveraging my expertise and supplementary libraries to
          execute projects swiftly and efficiently.
        </p>

        <ul className='z-50 list-inside text-sm'>
          <li className='indent-8'>
            Deep understanding of{' '}
            <span className='text-lime-400'>React Hook</span> and system
            optimization techniques to ensure optimal performance and user
            experience.
          </li>
          <li className='indent-8'>
            For building basic and advanced web structures, a strong command of{' '}
            <span className='text-lime-400'>HTML</span>,{' '}
            <span className='text-lime-400'>CSS</span>,{' '}
            <span className='text-lime-400'>SCSS</span>,{' '}
            <span className='text-lime-400'>Responsive</span> and{' '}
            <span className='text-lime-400'>TailwindCSS</span> is essential.
          </li>
          <li className='indent-8'>
            Utilize popular UI libraries such as{' '}
            <span className='text-lime-400'>Ant Design</span>,{' '}
            <span className='text-lime-400'>MaterialUI</span>, and{' '}
            <span className='text-lime-400'>Mantine</span> to create visually
            appealing and intuitive user interfaces.
          </li>
          <li className='indent-8'>
            Specialized in handling and managing state management, particularly{' '}
            <span className='text-lime-400'>Redux</span>, for complex systems.
          </li>
          <li className='indent-8'>
            Mastered <span className='text-lime-400'>Axios</span>,{' '}
            <span className='text-lime-400'>RESTful API</span> (
            <span className='text-lime-400'>SWR</span>,{' '}
            <span className='text-lime-400'>ReactQuery</span>) and
            <span className='text-lime-400'>Graphql</span> (
            <span className='text-lime-400'>ApolloClient</span>) for efficient
            data access.
          </li>
        </ul>
      </div>

      <div className='z-[2] flex h-fit max-w-lg flex-1 flex-col items-center bg-black p-10 text-justify font-light'>
        <p
          className='z-50 w-full text-2xl font-black uppercase leading-10 text-transparent'
          style={{
            fontFamily: 'vortice-concept, sans-serif',
            filter: 'drop-shadow(0 0 4px #1528d2aa)',
            WebkitTextStroke: '0.5px white'
          }}
        >
          Backend
        </p>
        <p className='z-50 text-base'>
          I have a specialization in developing robust and real-time systems.
          Building high-performance server-side solutions is my passion and I
          use <span className='text-lime-600'>NodeJS</span> and{' '}
          <span className='text-lime-600'>NestJS</span> to create APIs and
          backend services that meet the highest standards of performance and
          scalability. My expertise also includes designing and implementing
          <span className='text-lime-600'>RESTful APIs</span> and{' '}
          <span className='text-lime-600'>GraphQL</span> to facilitate flexible
          and efficient data access. With my extensive experience, I have a
          proven track record of optimizing application speed and building
          real-time functionalities to provide exceptional user experiences.
        </p>

        <ul className='z-50 list-inside text-sm'>
          <li className='indent-8'>
            Adept at using ORM frameworks such as{' '}
            <span className='text-lime-600'>TypeORM</span>,{' '}
            <span className='text-lime-600'>Prisma</span> for efficient data
            modeling and seamless database interaction with{' '}
            <span className='text-lime-600'>MySQL</span>,{' '}
            <span className='text-lime-600'>PostgreSQL</span>, and{' '}
            <span className='text-lime-600'>MongoDB</span>.
          </li>
          <li className='indent-8'>
            Implement real-time features using{' '}
            <span className='text-lime-600'>SocketIO</span> and leverage{' '}
            <span className='text-lime-600'>Redis</span> for caching and data
            storage optimization.
          </li>
          <li className='indent-8'>
            Proficient in both Object-Oriented Programming (OOP), Functional
            Programming, and Design Patterns.
          </li>
          <li className='indent-8'>
            Using tools like <span className='text-lime-600'>Docker</span>,{' '}
            <span className='text-lime-600'>AWS</span>, and{' '}
            <span className='text-lime-600'>Nginx</span> for development and
            deployment processes, management, and automation.
          </li>
          <li className='indent-8'>
            Having a comprehensive knowledge of information security practices
            is crucial.
          </li>
        </ul>
      </div>
    </div>
  )
}
