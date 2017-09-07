import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';

const AboutPage = () => {
    return(
        <Jumbotron className="about-page">
            <h1>Курсы валют</h1>
            <p>
                Эта маленькая программа разрешает загружать и просматривать курсы валют за разные даты.
                Основной фичей является то, что с легкостью можно изменить API провайдера курсов валют.
                Для этого достаточно только в файле <mark>/constants/index.js</mark> расширить объект
                <mark>providers</mark> новыми параметрами и изменить значение параметра
                <mark>providerArchiveDay</mark> или <mark>providerCurrentDay</mark> соответственно.
            </p>
            <p>
                Сейчас используються 2 провайдера для отображения курсов за сегодня и для
                отображения курсов за архивную дату.
            </p>
        </Jumbotron>
    );
};

export default AboutPage;