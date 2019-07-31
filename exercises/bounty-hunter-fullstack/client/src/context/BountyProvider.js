import React, { Component } from 'react'
import axios from 'axios'

const BountyContext = React.createContext()

class BountyProvider extends Component {
    constructor(){
        super()
        this.state = {
            bounties: [],
            firstName: "",
            lastName: "",
            living: false,
            bounty: 0,
            alignment: "",
        }
    }

    componentDidMount = () => {
        axios.get("/bounties")
        .then(res => {
            this.setState({ bounties: res.data })
        })
        .catch(err => console.log(err))
    }

    handleChange = e => {
        const { name } = e.target
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        const { firstName, lastName, living, bounty, alignment } = this.state
        e.preventDefault()
        const newBounty = {
            firstName: firstName,
            lastName: lastName,
            living: living,
            bounty: bounty,
            alignment: alignment
        }

        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            living: false,
            bounty: 0,
            alignment: "",
            bounties: [...prevState.bounties, newBounty]
        }))
    }

    render(){
        return
    }
}

export default BountyProvider