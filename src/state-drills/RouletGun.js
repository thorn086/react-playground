import React from 'react'

class RouletGun extends React.Component{

    state={
        chamber: null,
        spinningTheChamber: false
    }

    static defaultProps ={
        bulletInChamber: 8
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    handleTrigger =() =>{
        this.setState({
            spinningTheChamber:true}
        )
        this.timeout = setTimeout(()=>{
            const randomBullet = Math.ceil(Math.random()*8)

            this.setState({
                chamber:randomBullet,
                spinningTheChamber:false

            })
        }, 2000)
    }

     game(){
        const {chamber, spinningTheChamber} = this.state
        const {bulletInChamber} = this.props
        if (spinningTheChamber){
            return "Spinning the chamber and pulling the trigger!"
        }else if(chamber === bulletInChamber){
            return "BANG! We are notifying your family and wiring 1M dollars to your bank account..."
        }else{
            return "You're Safe..."
        }
    }
    render(){
        return(
            <div className="rouletWheel">
                <p>{this.game()}</p>
                <button onClick = {this.handleTrigger}>Pull the Trigger!</button>
            </div>
        )
    }
}

export default RouletGun