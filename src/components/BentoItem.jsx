function BentoItem ({ children, columns, img, rows, align = 'center', className }) {
  const style = {
    gridColumn: columns,
    gridRow: rows,
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    textAlign: align
  }
  return (
    <div
      style={style}
      className={`bento-item ${className}`}
    >
      {children}
    </div>
  )
}

export default BentoItem
