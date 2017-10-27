import React, { Component } from 'react';
import {openCase} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import Slider from 'react-slick';
import ScrollableAnchor from 'react-scrollable-anchor';

class Result extends Component{
    caseClickHandler(event){
        let array = [];

        for (let image in this.refs) {
            if (this.refs.hasOwnProperty(image)) {
                let source = this.refs[image].src;
                array.push(source);
            }
        }

        for (let i = 0; i < array.length; i+=1) {
            if (array[i] === event.target.src) {
                let index = array.indexOf(array[i]);
                array.splice(index, 1);
                array.unshift(event.target.src);
                break;
            }
        }
        /*array.find((source) => {
            if (source === event.target.src) {
                let index = array.indexOf(source);
                array.splice(index, 1);
                array.unshift(event.target.src);
            }
        });*/

        this.props.openCase(array, true);
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            lazyLoad: false,
            draggable: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false
                }
            }]
        };
    return(

        <section className="results">
            <div className="zigzag-bottom">

                <div className="container">
                    <h2 className="results__title">Результаты сайтов после <br/> внедрения наших рекомендаций</h2>
                    <p className="results__subtitle">Более <span>870 сайтов</span> улучшили свои показатели благодаря нашему аудиту</p>
                    <ScrollableAnchor id={'results'}>
                    <Slider {...settings}>
                    <div>
                    <div className="results-info__row">
                        <div className="results-info__column">
                            <div className="results-info__column__item"><img ref="image1" src="images/gd.jpg" alt="График роста сайта Генеральный дирекктор" title="График роста сайта Генеральный дирекктор" onClick={this.caseClickHandler.bind(this)}/></div>
                            <div className="results-info__column__item"><img ref="image2" src="images/icc2-min.jpg" alt="График роста сайта Междунаротной торговой палаты" title="График роста сайта Междунаротной торговой палаты" onClick={this.caseClickHandler.bind(this)}/></div>
                        </div>
                    </div>
                    </div>
                    <div>
                      <div className="results-info__row">
                        <div className="results-info__column">
                            <div className="results-info__column__item"><img ref="image3" src="images/po2-min.jpg" alt="График роста сайта Пансионат Осень" title="График роста сайта Пансионат Осень" onClick={this.caseClickHandler.bind(this)}/></div>
                            <div className="results-info__column__item"><img ref="image4" src="images/dd2-min.jpg" alt="График роста сайта De Jure De Facto" title="График роста сайта De Jure De Facto" onClick={this.caseClickHandler.bind(this)}/></div>
                        </div>
                      </div>
                    </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image5" src="images/sr2-min.jpg" alt="График роста сайта Сантехрегион" title="График роста сайта Сантехрегион" onClick={this.caseClickHandler.bind(this)}/></div>
                                    <div className="results-info__column__item"><img ref="image6" src="images/br2-min.jpg" alt="График роста сайта Бизнес Ресурс" title="График роста сайта Бизнес Ресурс" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image7" src="images/sd2-min.jpg" alt="График роста сайта Слово и дело" title="График роста сайта Слово и дело" onClick={this.caseClickHandler.bind(this)}/></div>
                                    <div className="results-info__column__item"><img ref="image8" src="images/biokit-min.jpg" alt="График роста сайта Биокит" title="График роста сайта Биокит" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image9" src="images/mrvov-min.jpg" alt="График роста сайта Мистер ВОВ" title="График роста сайта Мистер ВОВ" onClick={this.caseClickHandler.bind(this)}/></div>
                                    <div className="results-info__column__item"><img ref="image10" src="images/patent-min.jpg" alt="График роста сайта Царская привилегия" title="График роста сайта Царская привилегия" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image9" src="images/trecom-min.jpg" alt="График роста сайта Треком" title="График роста сайта Треком" onClick={this.caseClickHandler.bind(this)}/></div>
                                    <div className="results-info__column__item"><img ref="image10" src="images/vvs-min.jpg" alt="График роста сайта ВВС" title="График роста сайта ВВС" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    </ScrollableAnchor>
                </div>

            </div>
        </section>
    );
    }
};

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({openCase}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);