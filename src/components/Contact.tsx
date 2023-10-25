import React, {useState} from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {db} from '../Firebase'
import {collection, addDoc} from 'firebase/firestore'
import {contactPl} from '../data/pl/forntDataPl'
import {contactEng} from "../data/ang/forntDataEng";

const Contact = () => {

    const { thxText, singleWord, nameValidation, textValidation, emailValidation} = localStorage.getItem('lang') === 'eng' ? contactEng : contactPl

    const validateName = (form: any) => {
        const {name, nameLength} = nameValidation
        if (!form.name) {
            return `${name}`
        } else if (form.name.length < 2) {
            return `${nameLength}`
        }
        return null
    }


    const validateEmail = (form: any) => {
        const {email, emailFormat} = emailValidation
        if (!form.email) {
            return `${email}`
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            return `${emailFormat}`
        }
        return null
    }

    const validateText = (form: any) => {
        const {text, textLength} = textValidation
        if (!form.text) {
            return `${text}`
        } else if (form.text.length < 40) {
            return `${textLength}`
        }
        return null
    }


    const [err, setErr] = useState<{ name: string | null, email: string | null, text: string | null }>({
        name: null,
        email: null,
        text: null
    });


    const [borderColor, setBorderColor] = useState('');
    const [agree, setAgree] = useState(<div/>)
    const [form, setForm] = useState({
        name: '',
        email: '',
        text: ''
    })

    const usersCollectionRef = collection(db, "contact")


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
            setErr({...err, name: nameError, email: emailError, text: textErorr})
            setBorderColor('1px solid red')
        } else {
            setErr({...err, name: null, email: null, text: null})
            setBorderColor('')
            await addDoc(usersCollectionRef, {
                name: form.name,
                email: form.email,
                text: form.text
            })

            return setAgree(
                <div style={
                    {
                        color: '#49953a',
                        textAlign: 'center',
                    }
                }
                >
                    {thxText}
                </div>
            )
        }
    }


    return <section className='w-full h-full lg:section mb-20 py-[10px]' id='contact'>
        <div className='container mx-auto'>
            <div className=' flex flex-col lg:flex-row'>
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className='flex-1 flex justify-start items-center'>
                    <div>
                        <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>{singleWord[0]}</h4>
                        <h2 className='text-[45px] uppercase lg:text-[90px] leading-none mb-12'>
                            {singleWord[1]} <br/> {singleWord[2]}
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
                        placeholder={singleWord[4]}
                        name="name"
                        style=
                            {
                                {
                                    borderBottom: (!err.name ? "1px solid white" : borderColor)
                                }
                            }
                    />
                    <div className='text-red-700 font-secondary flex'>{err.name}</div>
                    <input
                        onChange={updateField}
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                        type='text'
                        name="email"
                        style=
                            {
                                {
                                    borderBottom: (!err.name ? "1px solid white" : borderColor)
                                }
                            }
                        placeholder={singleWord[5]}/>
                    <div className='text-red-700 font-secondary flex'>{err.email}</div>
                    <textarea
                        onChange={updateField}
                        className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-5'
                        placeholder={singleWord[6]}
                        style=
                            {
                                {
                                    borderBottom: (!err.text ? "1px solid white" : borderColor)
                                }
                            }
                        name="text"
                    />
                    <div className='text-red-700 font-secondary flex'>{err.text}</div>
                    <button className='btn btn-lg' onClick={handleSendMessage}>{singleWord[3]}</button>
                    {agree}
                </motion.form>
            </div>
        </div>
    </section>;
};

export default Contact;
