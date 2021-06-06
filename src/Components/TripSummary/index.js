import React from 'react';
import './index.css'
import { details } from "./data"

const TripSummary = () =>{
    return(
        <div className="Trip_Section">
            <div className="trip_header">
                <div>Date:04/19/2020 at 05:20 AM - 04/19/2020 at 10:20 AM (05 hrs 0 mins)</div>
                <div><span>Total KM:165 KM</span><span>Total Expense:0</span></div>
                <div>-</div>
            </div>
            <div className="table_container">
                <table>
                    <thead>
                        <th>#</th>
                        <th>Trips Starts(Node) to Trip Ends(Node)</th>
                        <th>Driver Name</th>
                        <th>Trip Expenses</th>
                        <th>Trip KM</th>
                        <th>Trip GPS KM</th>
                        <th>Trip Time</th>
                        <th>Odometer Reading</th>
                        <th>Action</th>
                    </thead>
                    {details && details.map((item,i)=>{
                        return(
                            <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.trips.tripStart}({item.trips.tripStartTime})&#8594;{item.trips.tripEnd}({item.trips.tripEndTime})</td>
                            <td>{item.driver}</td>
                            <td><div className="info">Rs.{item.trips.tripExpenses} 
                                <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#28dddd"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg></div>
                            </td>
                            <td>{item.trips.tripKm} KM</td>
                            <td>{item.trips.gpsKm} KM</td>
                            <td>{item.trips.tripTime}</td>
                            <td>{item.trips.odometerReading.start}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#28dddd"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg>{item.trips.odometerReading.end}</td>
                            <td style = {{display:'flex',justifyContent: 'center'}}>
                                <div className="report">Movement Report</div>
                                <div className="report">Stoppage Report</div>
                            </td>
                        </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default TripSummary;