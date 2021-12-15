import React from 'react'
import styles from './UserBlock.module.css'

const UserBlock = (props) => {
  const {owner, location} = props

  return (
    <div className={styles.userBlockWrapper}>
      <div className={styles.imgWrapper}>
        <img className={styles.profilePic} src={owner.profile_pic_url} alt={`${owner.username}-profile-pic`}/>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.ownerName}> {owner.username}</div>
        <div className={styles.location}> {location.name} </div>
      </div>
    </div>
  )
}

export default UserBlock