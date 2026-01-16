import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../App'
import './Navbar.css'

const Navbar = () => {
    const { language, toggleLanguage } = useLanguage()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const navItems = [
        { href: '#about', en: 'About', ar: 'عني' },
        { href: '#skills', en: 'Skills', ar: 'المهارات' },
        { href: '#experience', en: 'Experience', ar: 'الخبرة' },
        { href: '#projects', en: 'Projects', ar: 'المشاريع' },
        { href: '#why-me', en: 'Why Me', ar: 'لماذا أنا' },
        { href: '#contact', en: 'Contact', ar: 'تواصل' }
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const element = document.querySelector(href)
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
    }

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="nav-container">
                <motion.a
                    href="#hero"
                    className="nav-logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="logo-bracket">&lt;</span>
                    AS
                    <span className="logo-bracket">/&gt;</span>
                </motion.a>

                <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a
                                href={item.href}
                                className="nav-link"
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {language === 'en' ? item.en : item.ar}
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <motion.button
                        className="lang-toggle"
                        onClick={toggleLanguage}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle Language"
                    >
                        {language === 'en' ? 'AR' : 'EN'}
                    </motion.button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
