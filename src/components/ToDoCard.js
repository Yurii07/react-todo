import React from 'react'

const ToDoCard = (props) => {
    return (
    <div className="ui card">
        <div className="content">
          <div className="header">{/*ToDo TITLE*/}</div>
          {/* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete 
            */}
          <button onClick={null} className="ui button blue">Change</button>
          <button onClick={null} className="ui button red">Delete</button>
        </div>
        
    </div>
    )
}

export default ToDoCard