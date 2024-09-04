import { motion } from 'framer-motion'

export default function Marquee ({ items, position }) {
  return (
    <div className='gradient'>
      {[1, 2].map(i =>
        <motion.div
          key={i} className='list'
          initial={{ x: position.from }}
          animate={{ x: position.to }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {items.map(([name, tech], i) =>
            <motion.div whileHover={{ scale: 1.1 }} className='marquee-item' key={i}>
              <img src={tech} />
              {name}
            </motion.div>)}
        </motion.div>
      )}
    </div>
  )
}
