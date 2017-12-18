import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback} from '../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';

class HeaderContent extends Component{

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'know'};
        for (let field in this.refs) {
            screen.width < 1024 ? formData[field] = this.refs[field].value : formData[field] = this.refs[field].mask.getValue();
        }
        this.props.sendClientsCallback(formData);
        yaCounter44418460.reachGoal('KNOW');
        ga('send', 'event', 'know-as', 'send-know-as');
        roistatGoal.reach({name: formData.phone, phone: formData.phone, email: '', leadName: 'Лендинг_Бесплатный_аудит', text: 'Лендинг АС - Узнайте, сколько новых клиентов Вы можете получить с сайта'});
    }
    allBtnSend(e) {
        yaCounter44418460.reachGoal('ALL_BTN_SEND3');
    }

    clientsNotification() {
        let response = this.props.formState.clientsResp;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="know-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="know-form__notification know-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
            return notification(response);
        } else {
            return false;
        }
    }

    render() {
        return(
            <section className="header-content-background">
                <div className="content--background">
                    <div className="container header__content">
                        <h2 className="header__content-title">Профессиональный аудит сайта <span>за 72 часа</span></h2>
                        <p className="header__content-text">Позволит увеличить число клиентов в несколько раз</p>
                        <p className="header__content-text">с помощью наших рекомендаций по 47 критериям</p>
                        <h5 className="know-form__title">Узнайте, сколько новых клиентов Вы можете получить с сайта</h5>
                        {this.clientsNotification()}
                        <form className="form-group know-form" onSubmit={this.btnSubmitHandler.bind(this)}>
                            {screen.width < 1024 ? <input type="text" ref="phone" className="form-control" placeholder="Телефон *"  required/> :
                                <MaskedInput mask="+7(111) 111 11 11" type="text" ref="phone" className="form-control" placeholder="Телефон *"  required/>
                            }
                            <input type="submit" className="btn submit-btn"  value="Узнать" onClick={this.allBtnSend.bind(this)}/>
                        </form>
                    </div>
                    <div className="separatorbottom">
                        <div className="bigcircle-bottom"></div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({sendClientsCallback}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
