import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaShoppingCart, FaComments, FaKey, FaChartLine } from 'react-icons/fa'
import { useLanguage } from '../App'
import './Projects.css'

const Projects = () => {
    const { language } = useLanguage()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const content = {
        en: {
            tag: 'Featured work',
            title: 'Projects',
            solved: 'Problem solved:',
            projects: [
                {
                    icon: FaShoppingCart,
                    title: 'E-Commerce API Platform',
                    desc: 'A comprehensive REST API for e-commerce applications featuring product management, cart operations, order processing, and payment integration.',
                    problem: 'Eliminated complex frontend-backend coupling, enabling rapid development of multiple client applications.',
                    stack: ['Laravel', 'MySQL', 'Redis', 'Stripe API']
                },
                {
                    icon: FaComments,
                    title: 'Real-Time Chat System',
                    desc: 'Scalable WebSocket-based messaging platform with group chats, file sharing, message encryption, and real-time notifications.',
                    problem: 'Provided instant communication with 50ms latency, handling 1000+ concurrent connections.',
                    stack: ['Node.js', 'Socket.io', 'MongoDB', 'Redis']
                },
                {
                    icon: FaKey,
                    title: 'Authentication Microservice',
                    desc: 'Secure, standalone authentication service with JWT tokens, refresh token rotation, OAuth integration, and role-based access control.',
                    problem: 'Created reusable auth infrastructure, reducing development time for new projects by 70%.',
                    stack: ['Node.js', 'PostgreSQL', 'JWT', 'Docker']
                },
                {
                    icon: FaChartLine,
                    title: 'Analytics Dashboard API',
                    desc: 'High-performance API for analytics dashboards with data aggregation, caching strategies, and real-time metrics streaming.',
                    problem: 'Transformed slow reporting queries into instant dashboard loads with intelligent caching.',
                    stack: ['Laravel', 'PostgreSQL', 'Redis', 'GraphQL']
                }
            ]
        },
        ar: {
            tag: 'أعمال مميزة',
            title: 'المشاريع',
            solved: 'المشكلة المحلولة:',
            projects: [
                {
                    icon: FaShoppingCart,
                    title: 'منصة API للتجارة الإلكترونية',
                    desc: 'واجهة REST API شاملة لتطبيقات التجارة الإلكترونية تتضمن إدارة المنتجات وعمليات السلة ومعالجة الطلبات.',
                    problem: 'أزالت الاقتران المعقد بين الواجهة والخلفية، مما مكّن من التطوير السريع.',
                    stack: ['Laravel', 'MySQL', 'Redis', 'Stripe API']
                },
                {
                    icon: FaComments,
                    title: 'نظام محادثة فوري',
                    desc: 'منصة رسائل قابلة للتوسع مبنية على WebSocket مع محادثات جماعية ومشاركة ملفات وتشفير.',
                    problem: 'وفرت اتصالًا فوريًا بزمن 50 مللي ثانية مع معالجة 1000+ اتصال متزامن.',
                    stack: ['Node.js', 'Socket.io', 'MongoDB', 'Redis']
                },
                {
                    icon: FaKey,
                    title: 'خدمة مصادقة مصغرة',
                    desc: 'خدمة مصادقة مستقلة وآمنة مع رموز JWT وتدوير رموز التحديث وتكامل OAuth.',
                    problem: 'أنشأت بنية مصادقة قابلة لإعادة الاستخدام، مما قلل وقت التطوير بنسبة 70%.',
                    stack: ['Node.js', 'PostgreSQL', 'JWT', 'Docker']
                },
                {
                    icon: FaChartLine,
                    title: 'واجهة لوحة تحليلات',
                    desc: 'واجهة API عالية الأداء للوحات التحليلات مع تجميع البيانات واستراتيجيات التخزين المؤقت.',
                    problem: 'حولت استعلامات التقارير البطيئة إلى تحميلات فورية مع التخزين المؤقت الذكي.',
                    stack: ['Laravel', 'PostgreSQL', 'Redis', 'GraphQL']
                }
            ]
        }
    }

    const t = content[language]

    return (
        <section className="section projects" id="projects" ref={ref}>
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

                <div className="projects-grid">
                    {t.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -12 }}
                        >
                            <div className="project-image">
                                <div className="project-icon">
                                    <project.icon />
                                </div>
                                <div className="project-overlay">
                                    <motion.a
                                        href="#"
                                        className="project-link"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaGithub />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="project-link"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <FaExternalLinkAlt />
                                    </motion.a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className="project-problem">
                                    <strong>{t.solved}</strong>
                                    <span> {project.problem}</span>
                                </div>
                                <div className="project-stack">
                                    {project.stack.map((tech, techIndex) => (
                                        <span key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
