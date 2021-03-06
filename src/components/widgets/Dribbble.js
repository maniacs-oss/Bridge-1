import React, { Component } from 'react'

class Dribbble extends Component {

  render () {
    const { usr, usrUrl, img, imgUrl, title } = this.props.data.values

    return (
      <div className='w-dribbble' style={{ backgroundImage: `url(${img})` }}>

        <div className='z dribbble-overlay'>

          <a href={imgUrl}>
            {title}
          </a>

          <div className='usr'>
            {'by '}
            <a href={usrUrl}>
              {usr}
            </a>
          </div>

        </div>

      </div>
    )
  }

}

export default Dribbble
