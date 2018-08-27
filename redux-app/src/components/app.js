
import React from 'react'
import CounterDisplay from './counterDisplay'
import Button from './button'

export default class App extends React.Component {

    render() {
        console.log("render")
        return (
            <div>
                <Button num={1} operation="+" />
                <Button num={5} operation="-" />
                <Button num={20} operation="*" />
                <Button num={100} operation="+" />
                <CounterDisplay />
            </div>
        )
    }
}