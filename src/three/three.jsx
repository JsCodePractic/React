import React, { Component } from 'react';
import './three.css';
import like from './image-dialog/like.png';
import dialog from './image-dialog/dialogs.png';
import { NavLink } from 'react-router-dom'

class review extends Component {
    constructor(props) {
        super(props)
        const today = new Date(),
            date = + today.getDate() + ' ' + (today.getMonth() + 1) + ' ' + today.getFullYear();
        this.state = {
            like: 192,
            activ: true,
            input: '',
            date: date,
            dialogs: [
                {
                    name: "Самуил",
                    data: '11.09.2012',
                    review: 'Привет! Супер все'
                },
                {
                    name: "Андрей",
                    data: '11.08.2011',
                    review: 'Хочу заказать отель! '
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
    addNew = (e) => {
        if (e.ctrlKey && e.which === 13) {
            this.setState({
                dialogs: [{
                    name: 'Гость',
                    data: this.state.date,
                    review: this.state.input
                }, ...this.state.dialogs],
                input: ""
            })

        }

    }
    addNewButtom = () => {
        this.setState({
            dialogs: [{
                name: 'Гость',
                data: this.state.date,
                review: this.state.input
            }, ...this.state.dialogs],
            input: ""
        })



    }

    likePlus = () => {
        if (this.state.activ === false) {
            this.setState({ like: ++this.state.like })
            this.setState({ activ: true })

        } if (this.state.activ === true) {
            this.setState({ like: --this.state.like })
            this.setState({ activ: false })
        } else { }



    }

    render() {

        return (

            <div className="review">

                <section className="review-section">
                    <h3 className="last-review">Последние отзывы </h3><NavLink to="/other" className="other-road">Все отзывы</NavLink>
                    <section className="like-and-repost">
                        <img className="like" src={like} alt="" onClick={this.likePlus} /><samp>{this.state.like}</samp>
                        <img className="dialogs" src={dialog} alt="" /><samp>{this.state.dialogs.length}</samp>
                    </section>
                    <section>
                        <ul> {this.state.dialogs.map(dialogs => <div className="dialogs-and-review">
                            <div>
                                <h5 className="dialogs-name-user">{dialogs.name}</h5><span className="data-dialog"> {dialogs.data}</span>
                            </div>
                            <div className="dialogs-review">{dialogs.review}</div>
                        </div>)}
                        </ul>
                    </section>

                </section>
                <section className="Footer">
                    <div>
                        <input
                            onKeyPress={this.addNew}
                            value={this.state.input}
                            onChange={(e) => {
                                this.setState({
                                    input: e.target.value
                                })
                            }}
                            className="text-area" name="text" id="" cols="30" rows="10" ></input>
                    </div>
                    <div className="Push-button">
                        <button onClick={this.addNewButtom} className="yelow-buttom" >
                            <span className="span-text-buttom">Написать консультанту </span>
                        </button>
                    </div>
                </section>
            </div>
        )
    }

}
export default review;