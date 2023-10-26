import React, {useCallback} from 'react';
import {Particles} from "react-tsparticles";
import {loadFull} from "tsparticles";

const ParticlessConteiner = () => {

    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine)
    }, [])

    const particlesloaded = useCallback(async () => {
    }, [])

    return (
        <Particles
            className='w-full sm:max-h-[600px] md:max-h-[500px] max-h-[350px] h-full absolute translate-z-0 z-[1] sm:top-[140px] top-[190px]'
            id='tsparticles' init={particlesInit} loaded={particlesloaded}
            options={{
                fullScreen: {enable: false},
                background: {
                    color: {
                        value: ''
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push'
                        },
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 50,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#e68e2e',
                    },
                    links: {
                        color: '#f5d393',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce'
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 70
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: {min:2, max: 5}
                    }
                },
                detectRetina: true
            }}
        />
    );
};

export default ParticlessConteiner;