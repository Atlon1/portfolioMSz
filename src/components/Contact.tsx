import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {db} from '../Firebase'
import {collection, addDoc} from 'firebase/firestore'

const Contact = () => {


    const validateName = (form: any) => {
        if (!form.name) {
            return "Podane imię jest nie prawidłowe!"
        } else if (form.name.length < 2) {
            return "Imię jest za krótkie!"
        }
        return null
    }


    const validateEmail = (form: any) => {
        if (!form.email) {
            return "Podany email jest nie prawidłowy!"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            return "Zły e-mail!"
        }
        return null
    }

    const validateText = (form: any)=> {
        if (!form.text) {
            return "Pole nie może być pustę!"
        } else if (form.text.length < 40) {
            return "Wiadomość musi mieć conajmniej 40 znaków!"
        }
        return null
    }



    const [nameErr, setNameErr] = useState(null as any);
    const [emailErr, setEmailErr] = useState(null as any);
    const [textErr, setTextErr] = useState(null as any);

    const [borderColor, setBorderColor] = useState('' as any);
    const [agree, setAgree] = useState(<div/>)
    const [form, setForm] = useState({
        name: '',
        email: '',
        text: ''
    })

    const usersCollectionRef = collection(db,"contact")



    const updateField = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSendMessage = async (e: any) => {
        e.preventDefault()
        const nameError = validateName(form)
        const emailError = validateEmail(form)
        const textErorr = validateText(form)

        if (nameError || emailError || textErorr) {
            setNameErr(nameError)
            setEmailErr(emailError)
            setTextErr(textErorr)
            setBorderColor('1px solid red')
        } else {
            setNameErr('')
            setEmailErr('')
            setTextErr('')
            setBorderColor('')

            await addDoc(usersCollectionRef,{
                name: form.name,
                email: form.email,
                text: form.text
            })

            return setAgree (
                <div style={
                    {
                        color: '#49953a',
                        textAlign: 'center',
                    }
                }
                >
                    Wiadomość wysłana! Dziękuję :)
                </div>
            )
        }
    }


    return <section className='p-[px] lg:section w-full h-full' id='contact'>
        <div className='container mx-auto'>
            <div className=' flex flex-col lg:flex-row'>
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className='flex-1 flex justify-start items-center'>
                    <div>
                        <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                        <h2 className='text-[45px] uppercase lg:text-[90px] leading-none mb-12'>
                            Zacznijmy prace <br/> razem!
                        </h2>
                    </div>
                </motion.div>
                <motion.form
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'

                >
                    <input
                        onChange={updateField}
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                        type='text'
                        placeholder='Twoje Dane'
                        name="name"
                        style=
                            {
                                {
                                    borderBottom: (!nameErr ? "1px solid white" : borderColor)
                                }
                            }
                    />
                    <div className='text-red-700 font-secondary flex'>{nameErr}</div>
                    <input
                        onChange={updateField}
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                        type='text'
                        name="email"
                        style=
                            {
                                {
                                    borderBottom: (!emailErr ? "1px solid white" : borderColor)
                                }
                            }
                        placeholder='Adres email'/>
                    <div className='text-red-700 font-secondary flex'>{emailErr}</div>
                    <textarea
                        onChange={updateField}
                        className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-5'
                        placeholder='Wiadomość'
                        style=
                            {
                                {
                                    borderBottom: (!textErr ? "1px solid white" : borderColor)
                                }
                            }
                        name="text"
                    />
                    <div className='text-red-700 font-secondary flex'>{textErr}</div>
                    <button className='btn btn-lg' onClick={handleSendMessage}>Wyślij wiadomosc!</button>
                    {agree}
                </motion.form>
            </div>
        </div>
    </section>;
};

export default Contact;
