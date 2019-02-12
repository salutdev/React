import  React from 'react'
import { PropTypes } from 'prop-types'

export class AddDayForm extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        console.log('resort', this.refs.resort.value);
        console.log('date', this.refs.date.value);
        console.log('powder', this.refs.powder.checked);
        console.log('backcountry', this.refs.backcountry.checked);
    }

    render() {
        const { resort, date, powder, backcountry } = this.props
        return (
            <form onSubmit={this.submit} className="add-day-form">
                <label htmlFor="resort">Resort Name</label>
                <input id="resort" type="text" required defaultValue={resort} ref="resort"/>

                <label htmlFor="date">Date</label>
                <input id="date" type="date" required defaultValue={date} ref="date"/>

                <div>
                    <label htmlFor="powder">Powder Day</label>
                    <input id="powder" type="checkbox" required defaultChecked={powder} ref="powder"/>
                </div>
               <div>
                    <label htmlFor="backcountry">Backcountry Day</label>
                    <input id="backcountry" type="checkbox" required defaultChecked={backcountry} ref="backcountry"/>
                </div>
                <button>Add day</button>
            </form>
        )
    }
}

AddDayForm.defaultProps = {
    resort: "Kirkwood",
    date: "2017-12-02",
    powder: true,
    backcountry: false
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}