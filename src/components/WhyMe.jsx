import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaShieldAlt, FaTachometerAlt, FaLightbulb } from 'react-icons/fa'
import { useLanguage } from '../App'
import './WhyMe.css'

const WhyMe = () => {
    const { language } = useLanguage()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const content = {
        en: {
            tag: 'What sets me apart',
            title: 'Why Hire Me',
            cards: [
                {
                    icon: FaCode,
                    title: 'Clean & Scalable Code',
                    desc: "I write maintainable, well-documented code following SOLID principles and design patterns. Your codebase stays clean as it grows."
                },
                {
                    icon: FaShieldAlt,
                    title: 'Security-First Approach',
                    desc: "Security isn't an afterthought—it's built in from day one. From input validation to encryption, I protect your data and users."
                },
                {
                    icon: FaTachometerAlt,
                    title: 'Performance Optimization',
                    desc: "I obsess over milliseconds. From database query optimization to caching strategies, I ensure peak efficiency."
                },
                {
                    icon: FaLightbulb,
                    title: 'Problem-Solving Mindset',
                    desc: "I don't just code—I solve problems. I analyze requirements, anticipate challenges, and deliver solutions that exceed expectations."
                }
            ]
        },
        ar: {
            tag: 'ما يميزني',
            title: 'لماذا توظفني',
            cards: [
                {
                    icon: FaCode,
                    title: 'كود نظيف وقابل للتوسع',
                    desc: 'أكتب كودًا قابلًا للصيانة وموثقًا جيدًا يتبع مبادئ SOLID وأنماط التصميم. قاعدة الكود تبقى نظيفة مع نموها.'
                },
                {
                    icon: FaShieldAlt,
                    title: 'نهج الأمان أولاً',
                    desc: 'الأمان ليس فكرة لاحقة—إنه مدمج من اليوم الأول. من التحقق من المدخلات إلى التشفير، أحمي بياناتك ومستخدميك.'
                },
                {
                    icon: FaTachometerAlt,
                    title: 'تحسين الأداء',
                    desc: 'أهتم بالميلي ثانية. من تحسين استعلامات قاعدة البيانات إلى استراتيجيات التخزين المؤقت، أضمن أقصى كفاءة.'
                },
                {
                    icon: FaLightbulb,
                    title: 'عقلية حل المشكلات',
                    desc: 'أنا لا أكتب كود فقط—أحل المشكلات. أحلل المتطلبات، وأتوقع التحديات، وأقدم حلولًا تتجاوز التوقعات.'
                }
            ]
        }
    }

    const t = content[language]

    return (
        <section className="section why-me" id="why-me" ref={ref}>
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

                <div className="why-grid">
                    {t.cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="why-card"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className="why-icon">
                                <card.icon />
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                            <div className="card-shine"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyMe
