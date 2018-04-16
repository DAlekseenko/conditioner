import React, {Component} from 'react';
import PageLayout from "../../Decorators/PageLayout";
import PageComponent from "../../Decorators/PageComponent";
import './what'

export class What extends PageComponent {
    render() {
        return [
            <div key={1} className="what" id="what">
                <div className="what__wrap l-wrap">
                    <h2 className="what__title">
                        ЧТО МЫ ДЕЛАЕМ
                    </h2>
                    <div className="what__text">
                        <p>
                            Наша компания проводит весь комплекс работ по обслуживанию и ремонту <br/>
                            систем кондиционирования, вентиляции и холодоснабжения
                        </p>
                    </div>
                    <div className="what__list">
                        <ul className="list list--yellow">
                            <li className="list__item">
                                Регулярное техническое обслуживание в соответствии с нормами предприятия-изготовителя
                                оборудования;
                            </li>
                            <li className="list__item">
                                Диагностика состояния и неисправностей систем;
                            </li>
                            <li className="list__item">
                                Чистка компонентов оборудования;
                            </li>
                            <li className="list__item">
                                Аварийные выезды;
                            </li>
                            <li className="list__item">
                                Дополнительные выезды на объект в периоды температурных пиков (резкие похолодания,
                                потепления).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            ,
            <div key={2} className="for" id="for">
                <div className="for__wrap l-wrap">
                    <h2 className="for__title">
                        ДЛЯ КОГО МЫ ЭТО ДЕЛАЕМ
                    </h2>
                    <div className="for__text">
                        <p>
                            Наша компания работает на рынке более 5 лет и за это время с нами работают самые разные
                            клиенты от частных лиц до крупнейших торговых сетей Мира.
                        </p>
                    </div>
                    <ul className="for__list">
                        <li className="for__item for__item--1">
                            <br/>Частные лица
                        </li>
                        <li className="for__item for__item--2">
                            <br/>Заводы
                        </li>
                        <li className="for__item for__item--3">
                            <br/>Отели
                        </li>
                        <li className="for__item for__item--4">
                            Гос.<br/>
                            организации
                        </li>
                        <li className="for__item for__item--5">
                            Крупные<br/>
                            торговые сети
                        </li>
                    </ul>
                </div>
            </div>,
            <div key={3} className="guarantee" id="guarantee">
                <div className="guarantee__wrap l-wrap">
                    <h2 className="guarantee__title">
                        <span className="guarantee__uptitle">Реальная гарантия</span>
                        <br/>
                        на выполненные работы
                    </h2>
                    <div className="guarantee__text">
                        <p>
                            Мы даем гарантию на произведенные работы от 3-х месяцев до 3-x лет.
                        </p>
                        <p>
                            Наши клиенты на самом деле удивляются уровнем сервиса.
                        </p>
                    </div>
                </div>
            </div>,
            <div key={4} className="advantages" id="advantages">
                <h2 className="advantages__title">
                    <span className="advantages__uptitle">90% КЛИЕНТОВ</span>
                    <br/>
                    СТАНОВЯТСЯ ПОСТОЯННЫМИ
                </h2>
                <div className="advantages__line">
                    <div className="advantages__item">
                        <div className="advantages__content advantages__content--right">
                            <div className="advantages__name">
                                Опыт наших<br/>
                                мастеров от 5 лет
                            </div>
                            <div className="advantages__text">
                                <p>
                                    Мы знаем о системах вентиляции и кондиционирования почти всё. Опыт наших мастеров по
                                    обслуживанию и ремонту систем более 5 лет.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="advantages__item advantages__item--grey-right">
                        <div className="advantages__content advantages__content--left">
                            <div className="advantages__name">
                                Срок реагирования<br/>
                                20 часов
                            </div>
                            <div className="advantages__text">
                                <p>
                                    Мы быстро выезжаем к вам и проводим необходимые работы при срочном заказе или
                                    аварийной ситуации. Работаем по гарантийным письмам.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advantages__line">
                    <div className="advantages__item advantages__item--grey-left">
                        <div className="advantages__content advantages__content--right">
                            <div className="advantages__name">
                                в вечернее время<br/>
                                и Выходные
                            </div>
                            <div className="advantages__text">
                                <p>
                                    Мы работаем в выходные и вечерние часы, чтобы ваши сотрудники или клиенты не
                                    почувствовали дискомфорта во время обслуживания и ремонта
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="advantages__item">
                        <div className="advantages__content advantages__content--left">
                            <div className="advantages__name">
                                Оборудование<br/>
                                Rothenberger
                            </div>
                            <div className="advantages__text">
                                <p>
                                    Мы используем только профессиональное оборудование для ремонта систем вентиляции и
                                    кондиционирования, вы можете быть уверены в надежности работ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advantages__line">
                    <div className="advantages__item">
                        <div className="advantages__content advantages__content--right">
                            <div className="advantages__name">
                                Замена запчастей
                            </div>
                            <div className="advantages__text">
                                <p>
                                    При необходимости замены запчасти мы самостоятельно найдем подходящую запчасть и
                                    установим ее
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="advantages__item advantages__item--grey-right">
                        <div className="advantages__content advantages__content--left">
                            <div className="advantages__name">
                                Объем работ
                            </div>
                            <div className="advantages__text">
                                <p>
                                    Мы ведем честную работу и проводим работы в соответствии с перечнем утверждённым
                                    после диагностики. Согласованная смета сохраняется до завершения работ по объекту
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ];
    }
}

export default PageLayout(What);