import React from 'react';
import PageLayout from "../../Decorators/PageLayout";
import PageComponent from "../../Decorators/PageComponent";
import Container from "./Components/Contaner"
import Header from "./Components/Header"
import PriceList from "./Components/PriceList"
import Content from "./Components/Content"
import Consultation from "../../UI/Consultation"
import Breadcrumbs from "../../UI/Breadcrumbs"
import ImagesBlock from "../../UI/ImagesBlock"

class VentilationService extends PageComponent {

    priceList = [
        {
            name: 'до 2500м3',
            price: '2700 руб/час'
        },
        {
            name: 'от 2500 до 5000м3',
            price: '2900 руб/час'
        },
        {
            name: ' от 5000м3',
            price: 'дог.'
        },
    ];

    render() {
        return (
            <Container>
                <Header h1={this.h1}/>
                <Breadcrumbs title={this.h1}/>
                <PriceList header='Стоимость обслуживания вентиляции' list={this.priceList}/>
                <div className="works__link">
                    <a href='#works'>Примеры наших работ&nbsp;<i className="fa fa-link fa-sm"/></a>
                </div>
                <Consultation/>
                <Content>
                    <h2>Обслуживание и чистка вентиляции</h2>
                    <p>
                        В процессе эксплуатации техника нуждается в обслуживании (сервисе). Не составляет исключение и
                        вентиляционная система. Она накапливает неисправности даже в период простоя. Здесь мы
                        рассказываем о том, какие виды обслуживания вентиляции обеспечивает наша компания и в чем их
                        содержание.
                    </p>
                    <h3>Какие бывают виды обслуживания?</h3>
                    <p>
                        Ошибаются те, кто пытается провести четкую разницу между разными видами сервиса. С семантической
                        точки зрения любое обслуживание является техническим. А оно может быть:
                    </p>
                    <ul>
                        <li>Сервисным (несмотря на тавтологию). Бывает бесплатным (гарантийным) в течение гарантийного
                            срока, или платным по истечении срока или нарушения условий гарантии. Проводится
                            изготовителем оборудования, исполнителем работ или авторизованным ими субъектами
                        </li>
                        <li>Гарантийным. Проводится поставщиком товара, исполнителем работ или авторизованными ими
                            субъектами бесплатно в течение определенного срока. Это частный случай сервисного
                            обслуживания
                        </li>
                        <li>Просто техобслуживанием. Проводится кем угодно независимо гарантийного срока, фактора оплаты
                            и обязательств производителя
                        </li>
                    </ul>
                    <p>
                        Некоторые исполнители работ вводят в заблуждение заказчиков, пытаясь внушить им, что они
                        осуществляют все виды обслуживания. На деле это одна и та же работа, поэтому наша компания делит
                        техобслуживание вентиляции на гарантийное и постгарантийное – по признаку истечения сроков
                        гарантии и соблюдения заказчиком ее условий.
                    </p>

                    <h3>Что входит в обслуживание вентиляции?</h3>
                    <p>
                        В состав гарантийной и постгарантийной услуги входит проверка, чистка вентиляции, отдельных ее
                        частей, ремонт и замена:
                    </p>
                    <ul>
                        <li>воздушных фильтров;</li>
                        <li>узлов регулирования</li>
                        <li>воздушных клапанов</li>
                        <li>дренажных подсистем</li>
                        <li>лопаток и ремней вентиляторов</li>
                        <li>электрических цепей и автоматики</li>
                        <li>вентиляционных решеток</li>
                        <li>рекуператоров, теплообменников и калориферов</li>
                    </ul>
                    <p>
                        Ремонт и замена происходят в случае выхода функционального узла из строя. Чистка требуется тем
                        элементам системы, которые могут стать источниками дальнейших загрязнений или вывести
                        оборудование из строя.
                    </p>
                    <p>Кроме указанного, обслуживание включает:</p>
                    <ul>
                        <li>осмотр технических систем воздухообмена</li>
                        <li>диагностику неисправностей</li>
                        <li>антибактериальную обработку и противогрибковую дезинфекцию воздуховодов</li>
                        <li>проверку правильности настроек</li>
                        <li>проверку работоспособности всей системы;нтиляторов</li>
                        <li>проверку взаимодействия вентиляционного оборудования со смежными устройствами
                            кондиционирования и увлажнения воздуха и автоматики
                        </li>
                    </ul>
                    <p>В силу своей специфики, дезинсекция и дератизация (актуальные на промышленных объектах),
                        проводятся другими службами, и при необходимости их лучше приурочить к полному обслуживанию
                        вентиляции.</p>

                    <h3>Наши услуги</h3>
                    <p>
                        Стоимость услуг по техническому обслуживанию вентиляции зависит от сложности системы.
                        Обязательными составляющими процедуры, без которых невозможно предоставление услуги, являются:
                    </p>
                    <ul>
                        <li>выезд мастера на объект;</li>
                        <li>диагностика неполадок.</li>
                    </ul>
                    <p>
                        Эти, и другие составляющие сервиса в пределах гарантийного срока обходятся бесплатно.
                        Внегарантийный сервис оплачивается. Все составляющие техобслуживания вне действия гарантии
                        оплачиваются заказчиком согласно прайс-листу, при этом заказчик может выбрать из него тот набор
                        услуг, который желает получить.
                        Преимущества сотрудничества с нами:
                    </p>
                    <ul>
                        <li>Оперативное реагирование на заявку</li>
                        <li>Приемлемые и обоснованные цены</li>
                        <li>Понятный и прозрачный механизм формирования стоимости</li>
                        <li>Обходительное и вежливое обращение с заказчиком</li>
                        <li>Высокое качество выполнения всех работ</li>
                        <li>Отсутствие навязанных услуг: клиент может не заказывать чистку воздуховодов, если хочет
                            починить только вентилятор
                        </li>
                        <li>Современное оборудование</li>
                        <li>Квалифицированный, опытный и учтивый персонал.</li>
                    </ul>
                </Content>
                <ImagesBlock images={
                    ['/vs/2.jpeg', '/vs/3.jpeg', '/vs/4.jpeg', '/vs/7.jpeg', '/vs/5.jpeg', '/vs/6.jpeg', '/vs/1.jpeg', '/vs/9.jpeg',]
                } alt='Обслуживание и чистка вентиляции'/>
            </Container>
        )
    }
}

export default PageLayout(VentilationService);
