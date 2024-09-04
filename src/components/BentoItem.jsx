import { motion } from 'framer-motion'

function BentoItem ({ children, columns, img, rows, align = 'center', className, animate, transition }) {
  const style = {
    gridColumn: columns,
    gridRow: rows,
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    textAlign: align
  }

  const generatePostionX = (position) => {
    switch (position) {
      case 'left':
        return -200
      case 'right':
        return 200
      default:
        return 0
    }
  }

  const generatePostionY = (position) => {
    switch (position) {
      case 'top':
        return -200
      case 'bottom':
        return 200
      default:
        return 0
    }
  }

  const initial = {
    opacity: 0,
    x: generatePostionX(animate),
    y: generatePostionY(animate)
  }
  return (
    <motion.div
      style={style}
      className={`bento-item ${className}`}
      variants={{
        left: {
          opacity: 1,
          x: 0
        }
      }}
      initial={initial}
      animate={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{ duration: 1.25, ease: 'circOut', ...transition }}
    >
      {children}
    </motion.div>
  )
}

export default BentoItem
