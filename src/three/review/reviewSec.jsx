import React, { Component } from 'react'
import './reviewSec.css';


class Reviewsec extends Component {
    constructor(props) {
        super(props)             
           
        this.state = {          
            dialogs: [
                {
                    name: "Самуил",
                    data: '11.09.2012',
                    review: 'Привет! Супер все'
                },
                {
                    name: "Андрей",
                    data: '11.08.2011',
                    review: 'Хочу заказать отел! '
                },
                {
                    name: "Елена",
                    data: '11.08.2011',
                    review: 'Тур просто супер! Спасибо'
                },
                {
                    name: "Артур",
                    data: '11.08.2011',
                    review: 'Идеально все, я в восторге'
                },
                {
                    name: "Гость",
                    data: '11.08.2011',
                    review: 'Пользовался впервый раз! Остался доволен!'
                },
                {
                    name: "Марина",
                    data: '11.08.2011',
                    review: 'ОТЛИЧНО!'
                },

            ]
        }
    }
    render() {
        return (
            <div>
                <section>
                    <ul> {this.state.dialogs.map(dialogs => <div className="dialogs-and-review">
                        <div>
                            <h5 className="dialogs-name-user">{dialogs.name}</h5><span className="data-dialog"> {dialogs.data}</span>
                        </div>
                        <div className="dialogs-review">{dialogs.review}</div>
                    </div>)}
                    </ul>
                </section>
            </div>
        )
    }
}
export default Reviewsec