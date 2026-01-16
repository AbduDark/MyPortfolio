import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaProjectDiagram, FaUsers } from 'react-icons/fa'
import { useLanguage } from '../App'
import './About.css'

const About = () => {
    const { language } = useLanguage()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const content = {
        en: {
            tag: 'Get to know me',
            title: 'About Me',
            intro: "I'm a passionate Back-End Software Engineer with a strong foundation in Computer Science and a deep focus on building robust, scalable systems.",
            p1: "My expertise lies in designing and implementing RESTful APIs, optimizing database performance, and architecting systems that handle high traffic with reliability. I believe in writing clean, maintainable code that stands the test of time.",
            p2: "With a security-first mindset, I ensure every application I build is protected against common vulnerabilities while maintaining optimal performance. I'm constantly learning and adapting to new technologies to deliver the best solutions.",
            stats: [
                { number: '3+', label: 'Years Experience' },
                { number: '20+', label: 'Projects Completed' },
                { number: '15+', label: 'Happy Clients' }
            ]
        },
        ar: {
            tag: 'تعرف علي',
            title: 'نبذة عني',
            intro: 'أنا مهندس برمجيات باك-إند شغوف، لدي أساس قوي في علوم الحاسب وتركيز عميق على بناء أنظمة قوية وقابلة للتوسع.',
            p1: 'تكمن خبرتي في تصميم وتنفيذ واجهات RESTful APIs، وتحسين أداء قواعد البيانات، وبناء أنظمة تتحمل حركة المرور العالية بموثوقية. أؤمن بكتابة كود نظيف وقابل للصيانة يصمد أمام اختبار الزمن.',
            p2: 'بعقلية الأمان أولاً، أضمن حماية كل تطبيق أبنيه ضد الثغرات الشائعة مع الحفاظ على الأداء الأمثل. أتعلم باستمرار وأتكيف مع التقنيات الجديدة لتقديم أفضل الحلول.',
            stats: [
                { number: '3+', label: 'سنوات خبرة' },
                { number: '20+', label: 'مشروع مكتمل' },
                { number: '15+', label: 'عميل سعيد' }
            ]
        }
    }

    const t = content[language]
    const statIcons = [FaCode, FaProjectDiagram, FaUsers]

    return (
        <section className="section about" id="about" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">{t.tag}</span>
                    <h2 className="section-title">{t.title}</h2>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="visual-frame">
                            <div className="profile-image-wrapper">
                                <img
                                    src="/profile.jpg"
                                    alt="Abdulrahman Sayed"
                                    className="profile-image"
                                />
                                <div className="image-glow"></div>
                            </div>
                            <div className="visual-decoration">
                                <div className="deco-ring ring-1"></div>
                                <div className="deco-ring ring-2"></div>
                                <div className="deco-ring ring-3"></div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="about-text">
                        <motion.p
                            className="about-intro"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {t.intro}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {t.p1}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            {t.p2}
                        </motion.p>

                        <motion.div
                            className="about-stats"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {t.stats.map((stat, index) => {
                                const Icon = statIcons[index]
                                return (
                                    <motion.div
                                        key={index}
                                        className="stat-item"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                    >
                                        <Icon className="stat-icon" />
                                        <span className="stat-number">{stat.number}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
