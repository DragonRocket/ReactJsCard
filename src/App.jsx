import sampleImage from './assets/index.jpeg'
import './App.css'
import { Fragment } from 'react'
import Card from './components/Card'

function App() {
  const title = 'Swat'
  const image = sampleImage
  const subheading = 'Swat District, also known as the Swat'
  const description = 'Swat District, also known as the Swat Valley, is a district in the Malakand Division of Khyber Paktunkhwa, Pakistan. With as population of 2,309,570 per the 2017 national census, Swat is the 15th-largest district of Khyber Pakhtunkhwa with many popular tourist attractions.'

  return (
    <Fragment>
      <div className='main'>
        <Card title={title} image={image} subheading={subheading} description={description}/>
      </div>
    </Fragment>
  )
}

export default App
