import React from 'react'

const PassedPropDIsplay = (props) => {
  return (
    <div className="message-display" style={{background:"red",height:"150px", color:"whitesmoke"}}>
      <p>{props.message} this sentence is from passedprop component</p>
    </div>
  )
}

export default PassedPropDIsplay
