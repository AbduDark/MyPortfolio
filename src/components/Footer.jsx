import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { useLanguage } from '../App'
import './Footer.css'

const Footer = () => {
    const { language } = useLanguage()

    const content = {
        en: {
            designed: 'Designed & Built by',
            name: 'Abdulrahman Sayed',
            rights: 'All rights reserved.'
        },
        ar: {
            designed: 'صمم وبُني بواسطة',
            name: 'عبدالرحمن سيد',
            rights: 'جميع الحقوق محفوظة.'
        }
    }

    const t = content[language]

    const socialLinks = [
        { icon: FaGithub, href: 'https://github.com/abdulrahmansayed', label: 'GitHub' },
        { icon: FaLinkedin, href: 'https://linkedin.com/in/abdulrahmansayed', label: 'LinkedIn' },
        { icon: FaEnvelope, href: 'mailto:abdulrahman@example.com', label: 'Email' }
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <motion.a
                        href="#hero"
                        className="footer-logo"
                        whileHover={{ scale: 1.1 }}
                    >
                        <span className="logo-bracket">&lt;</span>
                        AS
                        <span className="logo-bracket">/&gt;</span>
                    </motion.a>

                    <p className="footer-text">
                        {t.designed}{' '}
                        <span className="footer-name">{t.name}</span>
                    </p>

                    <div className="footer-social">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <link.icon />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} {t.name}. {t.rights}
                    </p>
                    <p className="made-with">
                        Made with <FaHeart className="heart-icon" /> and lots of coffee
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
