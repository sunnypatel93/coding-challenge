import React from 'react'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'

const LikeButton = (props) => {
  const {liked = false, size} = props

  return liked ? <LikedIcon size={size} /> : <UnlikedIcon size={size} />
}

export default LikeButton
