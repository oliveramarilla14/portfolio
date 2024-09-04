import { motion } from 'framer-motion'

export default function Marquee ({ items, position }) {
  return (
    <div className='gradient'>
      <motion.div className='list' initial={{ x: position.from }} animate={{ x: position.to }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
        {items.map(([name, tech], i) => <div key={i}> <img src={tech} />{name}</div>)}
      </motion.div>
      <motion.div className='list' initial={{ x: position.from }} animate={{ x: position.to }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
        {items.map(([name, tech], i) => <div key={i}> <img src={tech} />{name}</div>)}
      </motion.div>
    </div>
  )
}
