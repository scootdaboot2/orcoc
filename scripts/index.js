'use strict'

const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: false }
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.'
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'this button will be a map soon'
    )
    // return (
  	// 	<button onClick={() => this.setState({ liked: true })}>
    // 		Like
  	// 	</button>
		// )
  }
}
const domContainer = document.querySelector('#map')
const root = ReactDOM.createRoot(domContainer)
root.render(e(LikeButton))