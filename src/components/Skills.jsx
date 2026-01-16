import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaServer, FaDatabase, FaShieldAlt, FaTools } from 'react-icons/fa'
import { useLanguage } from '../App'
import './Skills.css'

const Skills = () => {
    const { language } = useLanguage()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const content = {
        en: {
            tag: 'What I work with',
            title: 'Skills & Technologies',
            categories: [
                {
                    icon: FaServer,
                    name: 'Backend Development',
                    skills: ['Laravel', 'Node.js', 'REST APIs', 'PHP', 'Express.js']
                },
                {
                    icon: FaDatabase,
                    name: 'Databases',
                    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Query Optimization']
                },
                {
                    icon: FaShieldAlt,
                    name: 'Security',
                    skills: ['Authentication', 'Authorization', 'API Security', 'JWT / OAuth', 'Penetration Testing']
                },
                {
                    icon: FaTools,
                    name: 'Tools & DevOps',
                    skills: ['Git', 'Docker', 'Linux', 'Postman', 'CI/CD']
                }
            ]
        },
        ar: {
            tag: 'ما أعمل به',
            title: 'المهارات والتقنيات',
            categories: [
                {
                    icon: FaServer,
                    name: 'تطوير الباك-إند',
                    skills: ['Laravel', 'Node.js', 'REST APIs', 'PHP', 'Express.js']
                },
                {
                    icon: FaDatabase,
                    name: 'قواعد البيانات',
                    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Query Optimization']
                },
                {
                    icon: FaShieldAlt,
                    name: 'الأمان',
                    skills: ['Authentication', 'Authorization', 'API Security', 'JWT / OAuth', 'Penetration Testing']
                },
                {
                    icon: FaTools,
                    name: 'الأدوات والـ DevOps',
                    skills: ['Git', 'Docker', 'Linux', 'Postman', 'CI/CD']
                }
            ]
        }
    }

    const t = content[language]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section className="section skills" id="skills" ref={ref}>
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

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {t.categories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className="card-glow"></div>
                            <div className="card-content">
                                <div className="category-header">
                                    <div className="category-icon">
                                        <category.icon />
                                    </div>
                                    <h3>{category.name}</h3>
                                </div>
                                <div className="skill-tags">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skillIndex}
                                            className="skill-tag"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
