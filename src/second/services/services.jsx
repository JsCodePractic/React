import React, { Component } from 'react';
import './services.css';

class Services extends Component {
    state = {
        array: [
            {
                title: "Ручное бронирование",
                services: 11
            },
            {
                title: "Пакетные туры",
                services: 8
            },
            {
                title: "Отели",
                services: 5
            }
        ],
        maxValue: 0
    }

    componentDidMount() {
        const services = this.state.array.map(({ services }) => services)
        const maxValue = Math.max.apply(null, services)
        this.setState({ maxValue })
    }

    render() {
        return (
            <div className="servis-contener">
                <p className='servis'>Услуг</p>
                <div className="progress">
                    <div className="progres-bar">

                        {this.state.array.map(service =>
                            <table cellpadding="0">
                                <tr className="progres-table">
                                    <th className="filler" style={{ maxWidth: `${(100 / this.state.maxValue) * service.services}%` }}>
                                        <p className="progres-servive-title">{service.title}</p>                                       
                                    </th>
                                    <th className="services">{service.services} </th>
                                    
                                </tr>
                               
                            </table>

                        )}

                    </div>
                    
                </div>
                <section>
                    <div className="Total">
                        <h1 className="Total-write">Всего</h1>
                        <p className="Total-score">  {this.state.array.map(element => element.services).reduce((a, b) => a + b)}</p>
                    </div>
                </section>

            </div>
        )
    }

}








export default Services;
