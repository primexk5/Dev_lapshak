import React, { useState, useRef, useEffect } from 'react'
import { AlertCircle, ArrowUpRight, Check, Loader2, Mail, MapPin, Phone, X } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { useInView } from '../hooks/useInView'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_6ko5cur'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_wsm75xe'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'BEBVpFZr0aIUCAska'

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })

const initialData = { from_name: '', user_email: '', subject: '', message: '' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

const validate = (data) => {
  const errors = {}
  if (!data.from_name.trim()) {
    errors.from_name = 'Please tell me your name.'
  }
  if (!data.user_email.trim()) {
    errors.user_email = 'Your email is required.'
  } else if (!EMAIL_PATTERN.test(data.user_email.trim())) {
    errors.user_email = 'That email address does not look right.'
  }
  if (!data.subject.trim()) {
    errors.subject = 'A short subject helps me prioritise your note.'
  }
  if (data.message.trim().length < 10) {
    errors.message = 'Add a few more details so I can reply properly (min. 10 characters).'
  }
  return errors
}

const Contact = () => {
  const form = useRef(null)
  const successTimer = useRef(null)
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [ref, visible] = useInView()

  useEffect(() => () => clearTimeout(successTimer.current), [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting || submitted) return
    if (form.current.website?.value) return

    const nextErrors = validate(formData)
    setErrors(nextErrors)
    setError('')
    if (Object.keys(nextErrors).length > 0) return

    setIsSubmitting(true)
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
      setFormData(initialData)
      successTimer.current = setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Something went wrong sending the message. Email me directly and I will reply soon.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative section">
      <div className="container-page relative z-10">
        <div className="bg-night text-[#fafafa] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle noise texture for the dark card */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.08%22/%3E%3C/svg%3E')] mix-blend-overlay pointer-events-none" />
          
          <div
            ref={ref}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10 reveal ${
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
              aria-busy={isSubmitting}
              className="rounded-2xl border border-night-line bg-night-card/80 backdrop-blur-sm p-6 sm:p-8 space-y-5 shadow-lift"
            >
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

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
                    className={`input-field ${errors.from_name ? '!border-red-400/60' : ''}`}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.from_name)}
                    aria-describedby={errors.from_name ? 'from_name-error' : undefined}
                  />
                  {errors.from_name && (
                    <p id="from_name-error" className="mt-1.5 text-xs text-red-300">
                      {errors.from_name}
                    </p>
                  )}
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
                    className={`input-field ${errors.user_email ? '!border-red-400/60' : ''}`}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.user_email)}
                    aria-describedby={errors.user_email ? 'user_email-error' : undefined}
                  />
                  {errors.user_email && (
                    <p id="user_email-error" className="mt-1.5 text-xs text-red-300">
                      {errors.user_email}
                    </p>
                  )}
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
                  className={`input-field ${errors.subject ? '!border-red-400/60' : ''}`}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-red-300">
                    {errors.subject}
                  </p>
                )}
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
                  className={`input-field resize-y min-h-[130px] ${errors.message ? '!border-red-400/60' : ''}`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-300">
                    {errors.message}
                  </p>
                )}
              </div>

              {submitted && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3.5 text-sm text-accent-soft"
                >
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <p>
                    Message sent — thank you! I will get back to you within one
                    to two days.
                  </p>
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3.5 text-sm text-red-300"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <p className="flex-1">
                    {error}{' '}
                    <a
                      href="mailto:lapshakbarnabas4@gmail.com"
                      className="text-surface underline underline-offset-2 hover:text-accent transition-colors"
                    >
                      Write directly
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={() => setError('')}
                    aria-label="Dismiss error"
                    className="shrink-0 text-red-300/70 hover:text-red-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="btn-accent min-w-[160px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Send message
                    </>
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
      </div>
    </section>
  )
}

export default Contact
