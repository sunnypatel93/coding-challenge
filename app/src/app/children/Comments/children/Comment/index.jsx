import React from 'react'
import styles from './Comment.module.css'
import LikeButton from '../../../like_button'

const Comment = (props) => {
  const { comment } = props

  return (
    <div className={styles.wrapper}>
      <span className={styles.owner}> {comment.owner.username} </span>
      <span className={styles.text}> {comment.text} </span>
      <span className={styles.like}> <LikeButton size={12} liked={comment.viewer_has_liked}/> </span>
    </div>
  )
}

export default Comment