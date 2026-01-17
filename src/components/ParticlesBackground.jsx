import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from 'tsparticles-slim'

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                background: {
                    color: {
                        value: 'transparent'
                    }
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'grab'
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 150,
                            links: {
                                opacity: 0.5
                            }
                        }
                    }
                },
                particles: {
                    color: {
                        value: ['#9ca3af', '#6b7280', '#4b5563']
                    },
                    links: {
                        color: '#9ca3af',
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: true,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000
                        },
                        value: 60
                    },
                    opacity: {
                        value: 0.4,
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.1
                        }
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.5
                        }
                    }
                },
                detectRetina: true
            }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
            }}
        />
    )
}

export default ParticlesBackground
