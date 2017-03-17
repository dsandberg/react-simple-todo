// React
import React from 'react';

// Component
class DateHeader extends React.Component {
    // Set the initial state
    constructor(prompt) {
        super(prompt);

        this.days = [
            'SUNDAY', 'MONDAY','TUESDAY',
            'WEDNESDAY','THURSDAY','FRIDAY',
            'SATURDAY',];

        this.months = [
            "JAN", "FEB", "MAR",
            "APR", "MAY", "JUN", "JUL",
            "AUG", "SEP", "OCT",
            "NOV", "DEC"
        ];

        this.state = {
            liveDate: new Date(),
        };
    }

    // Update date, update state
    updateDate() {
        this.setState({liveDate: new Date()});
    }

    // Render
    render() {
        return (
            <header className="date_header">
                <h1>
                    <div className="date_left">
                        <div>
                            <span>{this.state.liveDate.getDate()}</span>
                        </div>
                        <div className="month_year">
                            <span className="month">{this.months[this.state.liveDate.getMonth()]}</span>
                            <span className="year">{this.state.liveDate.getFullYear()}</span>
                        </div>
                    </div>
                    <div className="date_right day">
                        <span>{this.days[this.state.liveDate.getDay()]}</span>
                    </div>
                </h1>
            </header>
        );
    }
}

// Export component
export default DateHeader;