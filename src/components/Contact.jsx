import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaSpinner, FaCheck } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../App'
import './Contact.css'

const Contact = () => {
    const { language } = useLanguage()
    const ref = useRef(null)
    const formRef = useRef()
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [formState, setFormState] = useState('idle') // idle, sending, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const content = {
        en: {
            tag: "Let's connect",
            title: 'Get In Touch',
            subtitle: "Have a project in mind or want to discuss opportunities? I'd love to hear from you.",
            email: 'Email',
            form: {
                name: 'Your Name',
                namePlaceholder: 'John Doe',
                email: 'Your Email',
                emailPlaceholder: 'john@example.com',
                subject: 'Subject',
                subjectPlaceholder: 'Project Inquiry',
                message: 'Message',
                messagePlaceholder: 'Tell me about your project...',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Message Sent!',
                error: 'Failed to Send'
            }
        },
        ar: {
            tag: 'لنتواصل',
            title: 'تواصل معي',
            subtitle: 'لديك مشروع في ذهنك أو تريد مناقشة الفرص؟ أود أن أسمع منك.',
            email: 'البريد الإلكتروني',
            form: {
                name: 'اسمك',
                namePlaceholder: 'اسمك الكامل',
                email: 'بريدك الإلكتروني',
                emailPlaceholder: 'email@example.com',
                subject: 'الموضوع',
                subjectPlaceholder: 'استفسار عن مشروع',
                message: 'الرسالة',
                messagePlaceholder: 'أخبرني عن مشروعك...',
                send: 'إرسال الرسالة',
                sending: 'جاري الإرسال...',
                success: 'تم الإرسال!',
                error: 'فشل الإرسال'
            }
        }
    }

    const t = content[language]

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormState('sending')

        // EMAILJS CONFIGURATION
        const SERVICE_ID = 'service_9h8gzjr'
        const TEMPLATE_ID = 'template_c0hyoxi'
        const PUBLIC_KEY = 'CEx6PolpN2-IkgSC2'

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                setFormState('success')
                setFormData({ name: '', email: '', subject: '', message: '' })
                setTimeout(() => setFormState('idle'), 3000)
            }, (error) => {
                console.error(error.text)
                setFormState('error')
                setTimeout(() => setFormState('idle'), 3000)
            })
    }

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const contactInfo = [
        { icon: FaEnvelope, label: t.email, value: 'abdulrahman@example.com', href: 'mailto:abdulrahman@example.com' },
        { icon: FaGithub, label: 'GitHub', value: 'github.com/abdulrahmansayed', href: 'https://github.com/abdulrahmansayed' },
        { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/abdulrahmansayed', href: 'https://linkedin.com/in/abdulrahmansayed' }
    ]

    return (
        <section className="section contact" id="contact" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">{t.tag}</span>
                    <h2 className="section-title">{t.title}</h2>
                    <p className="section-subtitle">{t.subtitle}</p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="contact-card"
                                whileHover={{ x: language === 'ar' ? -10 : 10 }}
                            >
                                <div className="contact-icon">
                                    <item.icon />
                                </div>
                                <div className="contact-details">
                                    <span className="contact-label">{item.label}</span>
                                    <span className="contact-value">{item.value}</span>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.form
                        ref={formRef}
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">{t.form.name}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t.form.namePlaceholder}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t.form.email}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t.form.emailPlaceholder}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">{t.form.subject}</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder={t.form.subjectPlaceholder}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t.form.message}</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder={t.form.messagePlaceholder}
                                required
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className={`btn btn-primary btn-full ${formState}`}
                            disabled={formState !== 'idle' && formState !== 'error'}
                            whileHover={formState === 'idle' ? { scale: 1.02 } : {}}
                            whileTap={formState === 'idle' ? { scale: 0.98 } : {}}
                        >
                            {formState === 'idle' && (
                                <>
                                    <FaPaperPlane />
                                    <span>{t.form.send}</span>
                                </>
                            )}
                            {formState === 'sending' && (
                                <>
                                    <FaSpinner className="spinner" />
                                    <span>{t.form.sending}</span>
                                </>
                            )}
                            {formState === 'success' && (
                                <>
                                    <FaCheck />
                                    <span>{t.form.success}</span>
                                </>
                            )}
                            {formState === 'error' && (
                                <>
                                    <span>⚠️ {t.form.error}</span>
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact
