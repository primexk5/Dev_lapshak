import React, { useState, useRef } from 'react'
import { ArrowUpRight, Check, Loader2, Mail, MapPin, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useInView } from '../hooks/useInView'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lapshakbarnabas4@gmail.com',
    href: 'mailto:lapshakbarnabas4@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 816 855 0514',
    href: 'tel:+2348168550514',
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: 'Jos, Plateau, Nigeria',
    href: 'https://maps.app.goo.gl/gR2Ya2T8Y8etUhVL8?g_st=ac',
  },
]

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [ref, visible] = useInView()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    emailjs
      .sendForm(
        'service_6ko5cur',
        'template_wsm75xe',
        form.current,
        'BEBVpFZr0aIUCAska'
      )
      .then(() => {
        setSubmitted(true)
        setFormData({
          from_name: '',
          user_email: '',
          subject: '',
          message: '',
        })
        setTimeout(() => setSubmitted(false), 4000)
      })
      .catch(() => {
        setError('Could not send. Email me directly and I will reply soon.')
      })
      .finally(() => setIsSubmitting(false))
  }

  return (
    <section id="contact" className="relative section bg-night text-surface">
      <div className="container-page relative z-10">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 reveal ${
            visible ? 'visible' : ''
          }`}
        >
          <div className="lg:col-span-5 space-y-10">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
                <span className="w-6 h-px bg-accent" />
                Contact
              </p>
              <h2 className="font-serif text-display text-surface">
                Let&apos;s build
                <span className="italic text-night-muted"> something solid.</span>
              </h2>
              <p className="mt-4 text-night-muted text-base md:text-lg leading-relaxed max-w-md">
                Hiring, freelance, or a product idea you want to ship — send a
                note. I typically respond within one to two days.
              </p>
            </div>

            <ul className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        item.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group flex items-start gap-4"
                    >
                      <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full border border-night-line bg-night-soft text-accent group-hover:border-accent/40 transition-colors">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span>
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-night-muted mb-0.5">
                          {item.label}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-surface group-hover:text-accent transition-colors">
                          {item.value}
                          {item.href.startsWith('http') && (
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                          )}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-night-line bg-night-card/80 backdrop-blur-sm p-6 sm:p-8 space-y-5 shadow-lift"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="from_name" className="block text-xs font-medium text-night-muted mb-2">
                    Name
                  </label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="input-field"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-xs font-medium text-night-muted mb-2">
                    Email
                  </label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="input-field"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-night-muted mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Role, project, or intro"
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-night-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="A few lines about the opportunity or project…"
                  className="input-field resize-y min-h-[130px]"
                />
              </div>

              {error && (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent min-w-[160px]"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Message sent
                    </>
                  ) : isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send message'
                  )}
                </button>
                <p className="text-xs text-night-muted">
                  Prefer email?{' '}
                  <a
                    href="mailto:lapshakbarnabas4@gmail.com"
                    className="text-surface underline underline-offset-2 hover:text-accent transition-colors"
                  >
                    Write directly
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
