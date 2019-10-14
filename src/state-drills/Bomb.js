import React from 'react'

class Bomb extends React.Component{
    state={
        count:0
    }

    componentDidMount(){
        this.interval= setInterval (() => {
           this.setState({ 
               count: this.state.count +1
        })}, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    bombFeature(){
        const {count} = this.state
        
        if (count >= 8){
            clearInterval(this.interval)
            return "Boom!!!!!"
            
        }else if ( count %2 === 0){
            return "tick"
        }else{
            return "tock"
        }

    }

    render(){
        return (
            <div className="Bomb">
                <p>{this.bombFeature()}</p>
            </div>
        )
    }
}

export default Bomb