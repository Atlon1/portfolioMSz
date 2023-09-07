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
            className='w-full h-full absolute translate-z-0'
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
                            quantity: 90
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#e68e2e'
                    },
                    links: {
                        color: '#f5d393',

                    }
                }
            }}
        />
    );
};

export default ParticlessConteiner;