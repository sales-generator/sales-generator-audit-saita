import React, { Component } from 'react';
import {showModal, setTypeAudit} from '../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';

class YouSiteAudit extends Component{
    callPopupHandler(event) {
        this.props.setTypeAudit(event.target.getAttribute('data-audit'));
        this.props.showModal(true);
        switch (event.target.getAttribute('data-audit')) {
            case 'Поднять позиции в поисковых системах':
                yaCounter44418460.reachGoal('RAISE_POSITION');
                break;
            case 'Увеличить число новых клиентов':
                yaCounter44418460.reachGoal('INCREASE');
                break;
            case 'Уменьшить стоимость привлечения клиентов':
                yaCounter44418460.reachGoal('CUT_COST');
                break;
        }
    }
    render() {
        return(
            <ScrollableAnchor id={'help-audit'}>
            <section className="audit">
              <div className="zigzag-bottom">
                <div className="container">
                    <h2 className="audit__title">Аудит Вашего сайта поможет</h2>
                    <div className="audit-info">
                        <div className="audit-info__item">
                            <img src="images/schedule.svg" alt="Позиции" title="Поднять позиции" data-audit="Поднять позиции в поисковых системах" onClick={this.callPopupHandler.bind(this)}/>
                            <h4>Поднять позиции</h4>
                            <p>в поисковых системах</p>
                        </div>
                        <div className="audit-info__item">
                            <img src="images/clients.svg" alt="Увеличить число клиентов" title="Увеличить число новых клиентов" data-audit="Увеличить число новых клиентов" onClick={this.callPopupHandler.bind(this)}/>
                            <h4>Увеличить</h4>
                            <p>число новых клиентов</p>
                        </div>
                        <div className="audit-info__item">
                            <img src="images/lowprice.svg" alt="Уменьшить стоимость привлечения клиентов" title="Уменьшить стоимость привлечения клиентов"  data-audit="Уменьшить стоимость привлечения клиентов" onClick={this.callPopupHandler.bind(this)}/>
                            <h4>Уменьшить стоимость</h4>
                            <p>привлечения клиентов</p>
                        </div>
                    </div>
                </div>
              </div>
            </section>
            </ScrollableAnchor>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, setTypeAudit}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(YouSiteAudit);