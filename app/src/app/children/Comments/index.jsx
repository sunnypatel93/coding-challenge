import React from 'react'
import Comment from './children/Comment'
import styles from './Comments.module.css'

const Comments = (props) => {
  const { comments, owner, caption } = props

  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.ownerName}> {owner.username} </span>
        <span className={styles.caption}> {caption.edges[0].node.text} </span>
      </div>
      {Object.keys(comments.edges).map(index => {
        return (
          <Comment 
            comment={comments.edges[index].node}
          />
        )
      })}
    </div>
   
  )
}

export default Comments