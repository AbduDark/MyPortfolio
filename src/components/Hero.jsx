import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaRocket, FaPaperPlane, FaChevronDown } from 'react-icons/fa'
import { useLanguage } from '../App'
import './Hero.css'

const Hero = () => {
    const { language } = useLanguage()

    const content = {
        en: {
            badge: 'Available for opportunities',
            greeting: "Hi, I'm",
            name: 'Abdulrahman Sayed',
            title: 'Back-End Software Engineer',
            tagline: 'Crafting scalable architectures and high-performance APIs that power seamless digital experiences.',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
            scrollDown: 'Scroll Down'
        },
        ar: {
            badge: 'متاح للفرص الجديدة',
            greeting: 'مرحباً، أنا',
            name: 'عبدالرحمن سيد',
            title: 'مهندس برمجيات الباك-إند',
            tagline: 'أبني أنظمة قابلة للتوسع وواجهات برمجة تطبيقات عالية الأداء تمنح تجارب رقمية سلسة.',
            viewProjects: 'عرض المشاريع',
            contactMe: 'تواصل معي',
            scrollDown: 'اسحب للأسفل'
        }
    }

    const t = content[language]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="hero-gradient-orb orb-1"></div>
                <div className="hero-gradient-orb orb-2"></div>
                <div className="hero-gradient-orb orb-3"></div>
                <div className="hero-grid"></div>
            </div>

            <motion.div
                className="container hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="hero-badge" variants={itemVariants}>
                    <span className="status-dot"></span>
                    <span>{t.badge}</span>
                </motion.div>

                <motion.h1 className="hero-title" variants={itemVariants}>
                    <span className="greeting">{t.greeting}</span>
                    <span className="name gradient-text">{t.name}</span>
                </motion.h1>

                <motion.div className="hero-subtitle" variants={itemVariants}>
                    <TypeAnimation
                        sequence={[
                            language === 'en' ? 'Back-End Software Engineer' : 'مهندس برمجيات الباك-إند',
                            2000,
                            language === 'en' ? 'API Architect' : 'مهندس واجهات برمجة التطبيقات',
                            2000,
                            language === 'en' ? 'Database Expert' : 'خبير قواعد البيانات',
                            2000,
                            language === 'en' ? 'Problem Solver' : 'حلال مشكلات',
                            2000
                        ]}
                        wrapper="h2"
                        speed={50}
                        repeat={Infinity}
                        className="typewriter"
                    />
                </motion.div>

                <motion.p className="hero-tagline" variants={itemVariants}>
                    {t.tagline}
                </motion.p>

                <motion.div className="hero-cta" variants={itemVariants}>
                    <motion.a
                        href="#projects"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaRocket />
                        <span>{t.viewProjects}</span>
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaPaperPlane />
                        <span>{t.contactMe}</span>
                    </motion.a>
                </motion.div>

                <motion.div
                    className="hero-scroll"
                    variants={itemVariants}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <a href="#about" className="scroll-indicator">
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <span>{t.scrollDown}</span>
                        <FaChevronDown className="scroll-arrow" />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
