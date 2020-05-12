import React from "react"

class Player extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    
    componentDidMount() {
      const {startTime} = this.props
      if (typeof startTime === 'number') {
        this.audio.currentTime = startTime
        this.audio.play()
      }
      
    }
    
    componentDidUpdate(prevProps) {
      if ((prevProps.startTime !== this.props.startTime) || prevProps.src !== this.props.src) {
        this.audio.currentTime = this.props.startTime
      }
    }
    
    render () {
      const {src, autoPlay} = this.props
      return (<div className="bg-gray-100 border border-bgray-400 mx-auto my-4 p-3">
          <h2 className="font-bold text text-lg p-2">Player component</h2>
      <audio 
        ref={(input) => {this.audio = input}} 
        controls 
        className="mx-auto" 
        src={src}
        autoPlay={autoPlay}
        />
      <h3>Props</h3>
      <pre className="m-2 p-2 bg-gray-200 border border-gray-400">
        {JSON.stringify(this.props,null,2)}
      </pre>
      <h3>State</h3>
      <pre className="m-2 p-2 bg-gray-200 border border-gray-400">
        {JSON.stringify(this.state,null,2)}
      </pre>
    </div>)
    }
  }

  export default Player