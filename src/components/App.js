import  React from 'react'
import  { SkiDayList }  from './SkiDayList'
import  { SkiDayCount }  from './SkiDayCount'

var createReactClass = require('create-react-class');

export class App extends React.Component {
//export const App = createReactClass({

    constructor(props) {
        super(props);
        this.state = {
            allSkiDays:  [
                {
                    resort: "Squaw Valley",
                    date: new Date("1/1/2018"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Kirkwood",
                    date: new Date("12/20/2017"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: "Mt Tallac",
                    date: new Date("08/28/2016"),
                    powder: false,
                    backcountry: true
                }
            ]
        }
    }

    countDays(filter) {
        const { allSkiDays } = this.state;
        return allSkiDays.filter((day) => filter ? day[filter] : day).length
    }

    render() {
        return (
            <div className="app">
                <SkiDayList days={this.state.allSkiDays }/>
                <SkiDayCount total={this.countDays()}
                            backcountry={this.countDays("backcountry")}
                            powder={this.countDays("powder")}/>
            </div>
        )
    }
}
//)