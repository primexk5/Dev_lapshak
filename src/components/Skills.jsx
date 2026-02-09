import React from 'react'
import { Code2, Zap, Shield, Gauge } from 'lucide-react'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiTailwindcss,
  SiExpress
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className='w-6 h-6' />,
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'JavaScript', icon: SiJavascript }
      ]
    },
    {
      title: 'Backend',
      icon: <Shield className='w-6 h-6' />,
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'RESTful APIs', icon: null }
      ]
    },
    {
      title: 'DevOps',
      icon: <Gauge className='w-6 h-6' />,
      skills: [
        { name: 'Docker', icon: SiDocker },
        { name: 'CI/CD', icon: null },
        { name: 'GitHub', icon: SiGithub },
        // { name: 'AWS', icon: null }
      ]
    },
    {
      title: 'Specializations',
      icon: <Zap className='w-6 h-6' />,
      skills: [
        { name: 'Full Stack', icon: null },
        { name: 'Database Design', icon: null },
        // { name: 'Cloud Native', icon: null },
        { name: 'Performance Optimization', icon: null }
      ]
    }
  ]

  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive, modern websites with React and Next.js'
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end application development with Node.js and PostgreSQL'
    },
    {
      title: 'API Development',
      description: 'RESTful and scalable API design with Express and Node.js'
    },
    {
      title: 'Database Design',
      description: 'Efficient database architecture and optimization'
    },
    {
      title: 'DevOps ',
      description: 'Docker containerization '
    },
    {
      title: 'Performance Optimization',
      description: 'Code optimization and application performance tuning'
    }
  ]

  return (
    <section id='skills' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Skills Section */}
        <div className='mb-20'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-3xl font-bold mb-4'>
              <span className='text-black'>
                Skills & Expertise
              </span>
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              Proficient in modern web technologies and best practices
            </p>
          </div>

          {/* Skills Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className='bg-white border border-black/10 rounded-xl p-6 hover:border-black hover:shadow-xl transition-all duration-300 group'
              >
                <div className='flex items-center gap-3 mb-6'>
                  <div className='p-3 bg-cyan-500/10 rounded-lg text-cyan-600 group-hover:scale-110 transition-transform'>
                    {category.icon}
                  </div>
                  <h3 className='text-lg font-bold text-black'>{category.title}</h3>
                </div>

                <div className='space-y-3'>
                  {category.skills.map((skill, idx) => {
                    const IconComponent = skill.icon
                    return (
                      <div key={idx} className='flex items-center gap-3 group/skill'>
                        {IconComponent ? (
                          <IconComponent className='w-5 h-5 text-gray-600' />
                        ) : (
                          <div className='w-5 h-5 rounded bg-black/10' />
                        )}
                        <span className='text-sm text-gray-600 group-hover/skill:text-cyan-600 transition-colors'>
                          {skill.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-3xl font-bold mb-4'>
              <span className='text-black'>
                Services
              </span>
            </h2>
            <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
              What I can do for your project
            </p>
          </div>

          {/* Services Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white border border-black/10 rounded-xl p-6 hover:border-black hover:shadow-xl transition-all duration-300 group'
              >
                <div className='flex items-start gap-4'>
                  <div className='p-3 bg-cyan-500/10 rounded-lg text-cyan-600 mt-1'>
                    <Code2 className='w-5 h-5' />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-black mb-2 group-hover:text-cyan-600 transition-colors'>
                      {service.title}
                    </h3>
                    <p className='text-gray-600 text-sm'>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
