import  React from 'react'
import { PropTypes } from 'prop-types'

const tahoeResorts = [
    "Alpine Medows",
    "Boreal",
    "Diamond Peak",
    "Donner Ski Ranch",
    "Heavenly",
    "Homewood",
    "Kirkwood",
    "Mt. Rose",
    "Northstar",
    "Squaw Valley",
    "Sugar Bowl"
]

export class Autocomplete extends React.Component {

    get value() {
        return this.refs.inputResort.value
    }

    set value(inputValue) {
        this.refs.inputResort.value = inputValue
    }

    render() {
        return (
            <div>
                <input ref="inputResort" type="text" list="tahoe-resorts"  />
                <datalist id="tahoe-resorts">
                    {this.props.options.map(
                        (opt, i) => <option key={i}>{opt}</option>)}
                </datalist>
            </div>
        )
    }
}

export const AddDayForm = ({ resort, date, powder, backcountry, onNewDay }) => {

    let _resort, _date, _powder, _backcountry

    const submit = (e) => {
        e.preventDefault();

        onNewDay({
            resort: _resort.value,
            date: _date.value,
            powder: _powder.checked,
            backcountry: _backcountry.checked
        })

        _resort.value = '';
        _date.value = '';
        _powder.checked = false;
        _backcountry.checked = false;

        // console.log('resort', _resort.value);
        // console.log('date', _date.value);
        // console.log('powder', _powder.checked);
        // console.log('backcountry', _backcountry.checked);
    }

    return (
        <form onSubmit={submit} className="add-day-form">
            <label htmlFor="resort">Resort Name</label>
            <Autocomplete options={tahoeResorts} ref={input => _resort = input }/>

            <label htmlFor="date">Date</label>
            <input id="date" type="date" required defaultValue={date} ref={input => _date = input }/>

            <div>
                <label htmlFor="powder">Powder Day</label>
                <input id="powder" type="checkbox" required defaultChecked={powder} ref={input => _powder = input }/>
            </div>
           <div>
                <label htmlFor="backcountry">Backcountry Day</label>
                <input id="backcountry" type="checkbox" required defaultChecked={backcountry} ref={input => _backcountry = input }/>
            </div>
            <button>Add day</button>
        </form>
    )
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