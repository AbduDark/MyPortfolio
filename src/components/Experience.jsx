import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../App'
import './Experience.css'

const Experience = () => {
    const { language } = useLanguage()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const content = {
        en: {
            tag: 'My journey',
            title: 'Experience',
            timeline: [
                {
                    date: '2022 - Present',
                    badge: 'Full-time',
                    badgeType: 'primary',
                    title: 'Back-End Development',
                    items: [
                        'Designed and implemented RESTful APIs serving 10,000+ daily requests with 99.9% uptime',
                        'Optimized database queries reducing response times by 40% through indexing',
                        'Implemented secure authentication systems using JWT and OAuth 2.0',
                        'Built microservices architecture improving scalability'
                    ]
                },
                {
                    date: '2021 - 2022',
                    badge: 'Freelance',
                    badgeType: 'secondary',
                    title: 'Freelance Development',
                    items: [
                        'Delivered 15+ web applications for clients across e-commerce and healthcare',
                        'Built payment integration systems with Stripe and PayPal',
                        'Developed automated reporting systems reducing manual work by 60%'
                    ]
                },
                {
                    date: '2020 - 2021',
                    badge: 'Learning',
                    badgeType: 'tertiary',
                    title: 'Foundation & Growth',
                    items: [
                        'Completed Computer Science degree with focus on algorithms',
                        'Built personal projects to master PHP, Laravel, and database design',
                        'Contributed to open-source projects'
                    ]
                }
            ]
        },
        ar: {
            tag: 'مسيرتي',
            title: 'الخبرة',
            timeline: [
                {
                    date: '2022 - الحالي',
                    badge: 'دوام كامل',
                    badgeType: 'primary',
                    title: 'تطوير الباك-إند',
                    items: [
                        'صممت ونفذت واجهات REST APIs تخدم أكثر من 10,000 طلب يومياً بنسبة 99.9%',
                        'حسنت استعلامات قواعد البيانات مما قلل أوقات الاستجابة بنسبة 40%',
                        'نفذت أنظمة مصادقة آمنة باستخدام JWT و OAuth 2.0',
                        'بنيت بنية الخدمات المصغرة مما حسن قابلية التوسع'
                    ]
                },
                {
                    date: '2021 - 2022',
                    badge: 'عمل حر',
                    badgeType: 'secondary',
                    title: 'التطوير الحر',
                    items: [
                        'قدمت أكثر من 15 تطبيق ويب لعملاء في التجارة الإلكترونية والرعاية الصحية',
                        'بنيت أنظمة تكامل الدفع مع Stripe و PayPal',
                        'طورت أنظمة تقارير آلية قللت العمل اليدوي بنسبة 60%'
                    ]
                },
                {
                    date: '2020 - 2021',
                    badge: 'تعلم',
                    badgeType: 'tertiary',
                    title: 'الأساس والنمو',
                    items: [
                        'أكملت درجة علوم الحاسب مع التركيز على الخوارزميات',
                        'بنيت مشاريع شخصية لإتقان PHP و Laravel',
                        'ساهمت في مشاريع مفتوحة المصدر'
                    ]
                }
            ]
        }
    }

    const t = content[language]

    return (
        <section className="section experience" id="experience" ref={ref}>
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

                <div className="timeline">
                    {t.timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-marker">
                                <div className="marker-dot"></div>
                                <div className="marker-pulse"></div>
                            </div>
                            <motion.div
                                className="timeline-content"
                                whileHover={{ x: language === 'ar' ? -8 : 8 }}
                            >
                                <div className="timeline-header">
                                    <span className="timeline-date">{item.date}</span>
                                    <span className={`timeline-badge ${item.badgeType}`}>{item.badge}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <ul className="timeline-list">
                                    {item.items.map((listItem, listIndex) => (
                                        <li key={listIndex}>{listItem}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
