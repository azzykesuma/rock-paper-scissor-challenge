import {motion} from 'framer-motion'
import { useContext } from 'react'
import { ModalContext } from '../App'
const Footer = () => {
    const {setOpen} = useContext(ModalContext)
  return (
    <footer className='flex justify-center md:justify-end'>
        <motion.button 
        onClick={() => setOpen(true)}
        whileTap={{scale: 0.9}}
        className='rounded-md border-2 border-white px-6 py-1 text-white'>RULES</motion.button>
    </footer>
  )
}

export default Footer
