import React from 'react'
import styles from "./loader.module.css"

const Loader = () => {
  return (
    <div className=' col-span-3'>
        <div className={styles.loader}></div>
    </div>
  )
}

export default Loader;