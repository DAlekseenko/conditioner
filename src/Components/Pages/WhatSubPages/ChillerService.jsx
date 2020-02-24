import React from 'react';
import PageLayout from "../../Decorators/PageLayout";
import PageComponent from "../../Decorators/PageComponent";
import Container from "./Components/Contaner"
import Header from "./Components/Header"
import Img from "./Components/Img"
import PriceList from "./Components/PriceList"
import Content from "./Components/Content"
import Consultation from "../../UI/Consultation"
import Breadcrumbs from "../../UI/Breadcrumbs"

class ChillerService extends PageComponent {

    src = "/images/service/chiller_1.jpg"

    priceList = [
        {
            name: 'в зависимости от оборудования',
            price: 'от 2500 руб'
        },
    ];

    render() {
        return (
            <Container>
                <Header h1={this.h1}/>
                <Breadcrumbs title={this.h1}/>
                <Img src={this.src} addClass={'design-img'} title={this.h1}/>
                <PriceList header='Стоимость диагностики чиллеров и файнколов' list={this.priceList}/>
                <Content>
                    <h2>
                        Обслуживание, диагностика и ремонт чиллеров и фанкойлов
                    </h2>
                    <p>Кондиционирование воздуха в больших торговых, коммерческих и производственных помещениях
                        невозможно обеспечить обычными бытовыми кондиционерами. Вместо них используется система
                        чиллер-фанкойл. Подобно кондиционеру, чиллер выполняет функцию, аналогичную внешнему боку
                        кондиционера, а вентиляторный доводчик (фанкойл) – соответствует внутреннему блоку. Но в отличие
                        от кондиционера, здесь в теплообменнике используется не фреон, а специальная жидкость.
                    </p>
                    <p>
                        Когда требуется охладить помещение, жидкость в радиаторе охлаждается так, как это делается в
                        холодильнике, и вентилятор гонит через радиатор воздух, который таким образом охлаждается. Если
                        жидкость подогреть, то помещение можно обогревать.
                    </p>
                    <p>
                        Преимуществом системы является то, что к ней можно подсоединять дополнительные рабочие элементы
                        по мере освоения помещений, что является настоящей находкой для развивающегося производства.
                        Длина трассы при этом не имеет значения, т.к. теплоноситель гонится по трубам насосом.
                    </p>
                    <h3>
                        Чиллер сервис в Москве
                    </h3>
                    <p>
                        Очевидно, что любое оборудование нуждается в обслуживании и ремонте. В столице много объектов
                        коммерческого, промышленного и общественного назначения, использующих чиллеры и фанкойлы. Наша
                        компания – одна из лидеров рынка услуг, направленных на обслуживание и ремонт чиллеров,
                        фанкойлов и остальных элементов оборудования:
                    </p>
                    <ul>
                        <li>Компрессоров</li>
                        <li>Электродвигателей</li>
                        <li>Теплообменников</li>
                        <li>Испарителей</li>
                        <li>Терморегулирующих вентилей</li>
                        <li>Конденсаторов</li>
                        <li>Автоматики и блоков управления</li>
                    </ul>
                    <h3>
                        Чем отличается обслуживание от ремонта?
                    </h3>
                    <p>
                        Многие предприятия, оказывающие аналогичные услуги, ради маркетингового эффекта любят
                        использовать слово «сервис», пытаясь вложить в него отдельный смысл. На самом деле слово
                        «сервис» переводится как обслуживание, и ничего уникального в таком пакете услуг нет. При этом
                        ремонт – только одна из составляющих сервиса. Два понятия соотносятся как частное и общее, т.е.
                        ремонт чиллеров и фанкойлов составляет только часть обслуживания, направленную на устранение уже
                        выявленных неполадок.
                    </p>
                    <h3>
                        Наши услуги
                    </h3>
                    <p>
                        У вас есть возможность выбрать как исчерпывающий пакет услуги, так и отдельную ее составляющую,
                        благодаря чему удается снизить стоимость работ. Кроме ремонта, наши мастера занимаются
                        выполнением таких работ:
                    </p>
                    <ul>
                        <li>Диагностика неполадок и настроек работы оборудования</li>
                        <li>Чистка, удаление пылевых, грибковых и прочих биологических накоплений (насекомых, тополиного
                            пуха, паутины и т.д.)
                        </li>
                        <li>Замена фильтров, масла в компрессоре</li>
                        <li>Долив хладагента</li>
                        <li>Проверка работы автоматики</li>
                        <li>Консервация системы и отдельных ее узлов в случае простоя и расконсервация</li>
                        <li>Проверка состояния изоляции, подключенных инженерных сетей (канализации, электрики),
                            герметичности соединений
                        </li>
                        <li>Настройка параметров работы и опций управления</li>
                        <li>Подготовка рекомендаций и инструкций по эксплуатации</li>
                        <li>Установление причин, условий неполадок и их устранение</li>
                        <li>Подключение, пусконаладка оборудования после его монтажа, длительного простоя или ремонта.
                        </li>
                        <p>
                            При этом мы не занимаемся навязыванием своих услуг. Например, если вы можете сами
                            осуществить контрольный запуск чиллера и безошибочно установить причину неисправности, его
                            не обязательно заказывать, поручив нам только ремонт.
                        </p>
                    </ul>
                </Content>
                <Consultation/>
            </Container>
        )
    }
}

export default PageLayout(ChillerService);