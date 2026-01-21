import React, { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log('Sending email...')

    // Replace these with your actual EmailJS service ID, template ID, and public key
    emailjs.sendForm('service_6ko5cur', 'template_wsm75xe', form.current, 'BEBVpFZr0aIUCAska')
      .then(
        () => {
          setSubmitted(true)
          setFormData({ from_name: '', user_email: '', subject: '', message: '' })
          setTimeout(() => {
            setSubmitted(false)
          }, 3000)
        },
        (error) => {
          console.error('FAILED...', error)
          alert('Failed to send message. Please check the console for details.')
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lapshakbarnabas4@gmail.com',
      href: 'mailto:lapshakbarnabas4@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 8168550514',
      href: 'tel:+234 8168550514'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jos Plateau, Nigeria',
      href: 'https://maps.app.goo.gl/gR2Ya2T8Y8etUhVL8?g_st=ac'
    }
  ]

  return (
    <section id='contact' className='py-20 bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl text-white font-bold mb-4'>
            Get In
            <span className='bg-white bg-clip-text text-transparent ml-2'>
              Touch
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Have a project in mind? Let's collaborate and bring your ideas to life
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Contact Info */}
          <div className='space-y-6'>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.href}
                  className='flex gap-4 p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group'
                >
                  <div className='flex-shrink-0'>
                    <div className='p-3 bg-cyan-500/20 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform'>
                      <Icon className='w-6 h-6' />
                    </div>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500 font-medium'>{info.label}</p>
                    <p className='text-white font-semibold mt-1 group-hover:text-cyan-400 transition-colors'>
                      {info.value}
                    </p>
                  </div>
                </a>
              )
            })}

            {/* Social Links */}
            {/* <div className='pt-6 border-t border-white/10'>
              <h3 className='text-white font-bold mb-4'>Follow Me</h3>
              <div className='flex gap-4'>
                {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href='#'
                    className='p-3 bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 rounded-lg transition-all duration-300 hover:scale-110'
                  >
                    <span className='text-gray-400 hover:text-cyan-400 text-sm font-semibold'>
                      {social[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <form ref={form} onSubmit={handleSubmit} className='space-y-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300'>
              {/* Name Input */}
              <div>
                <label className='block text-white font-semibold mb-2'>Your Name</label>
                <input
                  type='text'
                  name='from_name'
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder='John Doe'
                  className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300'
                />
              </div>

              {/* Email Input */}
              <div>
                <label className='block text-white font-semibold mb-2'>Email Address</label>
                <input
                  type='email'
                  name='user_email'
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  placeholder='john@example.com'
                  className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300'
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className='block text-white font-semibold mb-2'>Subject</label>
                <input
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder='Project Inquiry'
                  className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300'
                />
              </div>

              {/* Message Input */}
              <div>
                <label className='block text-white font-semibold mb-2'>Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='5'
                  placeholder='Tell me about your project...'
                  className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 resize-none'
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold py-3 rounded-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed'
              >
                {submitted ? (
                  <>
                    <Check className='w-5 h-5 group-hover:scale-110 transition-transform' />
                    <span>Message Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
