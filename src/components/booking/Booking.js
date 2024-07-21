import React from "react";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-react-schedule";

class Booking extends React.Component {
    render() {
        return <ScheduleComponent>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
    }
}

export default Booking