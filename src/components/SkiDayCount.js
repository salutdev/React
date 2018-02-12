import React from 'react'
import '../stylesheets/ui.scss'


export const SkiDayCount = React. ({
//export class SkiDayCount extends React.Component {
    render() {
        return (
            <div className='ski-day-count'>
                <div className='total-days'>
                    <span>5 days</span>
                </div>
                <div className='powder-days'>
                    <span>2 days</span>
                </div>
                <div className='backcountry-days'>
                    <span>1 hiking days</span>
                </div>
            </div>
        )
    }

})