import React from 'react'

class Accordian extends React.Component{

     constructor(props){
        super(props)
            props={
                sections:[],
            }
            this.state={
                currentStateIndex: null,
            }
            this.handleClick = this.handleClick.bind(this)
    }

handleClick(index){
    this.setState(prevState =>{
        return( 
        {currentStateIndex: index})
    })
}
renderButtons(currentStateIndex){
    const {sections} = this.props
    return(
    
    sections.map((section,index)=>(
        <div>
        <button type='button' key={index} onClick={() => this.handleClick(index)}>
            {section.title}
        </button>
        {(currentStateIndex === index) && <p>{section.content}</p>}
        </div>
    ))
    )}

renderTitle(){
    const currentTitle = this.state.currentStateIndex
    
    return(
        <ul className='Accordion'>
            <li>{currentTitle.content}</li>
        </ul>
    )
}
render(){   
    return(
        <div>
            {this.renderButtons(this.state.currentStateIndex)}
            
        </div>

        )
}
        
}

export default Accordian