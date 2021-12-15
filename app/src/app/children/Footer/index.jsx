import React from 'react'
import LikedIcon from '../like_button'
import styles from './Footer.module.css'

const Footer = (props) => {
  const {numberOfLikes, datePosted} = props

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.textWrapper}>
        <div className={styles.numberOfLikes}> {`${numberOfLikes} likes`} </div>
        <div className={styles.datePosted}> {new Date(datePosted).toLocaleDateString('us')} </div>
      </div>

      <span className={styles.iconWrapper}><LikedIcon size={20} /> </span>
    </div>
  )
} 

export default Footer