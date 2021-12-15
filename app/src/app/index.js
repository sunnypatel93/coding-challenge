import React from 'react'
import Image from './children/image'
import styles from './styles'
import UserBlock from './children/UserBlock'
import Comments from './children/Comments'
import Footer from './children/Footer'

const App = (props) => {
  const { data } = props
  console.log(data)
  
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <UserBlock 
          id={data.id}
          owner={data.owner} 
          location={data.location} 
        />
        <Comments 
          id={data.id}
          owner={data.owner} 
          caption={data.edge_media_to_caption} 
          comments={data.edge_media_to_comment}
        />
        <Footer
          id={data.id}
          numberOfLikes={data.edge_media_preview_like.count}
          datePosted={data.taken_at_timestamp}
        />
      </div>
    </main>
  )
}

export default App
