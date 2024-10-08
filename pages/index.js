// next image
import Image from "next/image";

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import {motion} from 'framer-motion';

// variants
import {fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        {/* tittle */}
        <h1 className='h1'>
          Transforming Ideas <br /> Into{'  '}
          <span className='text-accent'>Digital Reality</span>
        </h1>
        {/* subtitle */}
        <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-16'>
        If you are contributing to a project where you don't want 
        your personal email to be exposed, you can use a no-reply 
        email address provided by GitHub
        </p>
        {/* btn */}
        <div className='flex justify-center xl:hidden'>
          <ProjectBtn />
        </div>
      </div>
    </div>
    {/* image */}
    <div>image</div>
    </div>
  );
};

export default Home;
