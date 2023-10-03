import { currentMock, forecastMock, locationMock } from '../mocks';
import '../styles/searchedCity.scss';

export interface Props {
    closeSearch: () => void;
}

export const SearchedCity = ({ closeSearch }: Props) => {

    const dayOfTheWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    return (
        <div className="container__city">
            <div className="searched__city__container">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{locationMock.name}</span>

                    <button onClick={closeSearch}>Fechar</button>
                </div>

                <h2>{currentMock.temp_c}° {currentMock.condition.text}</h2>

                <div className='more__details'>
                    <div className='more__details__top'>
                        <div className='min__max__container'>
                            <span>{currentMock.min}°</span>
                            <span>{currentMock.max}°</span>
                        </div>

                        <span>Sensação <strong>{currentMock.feelslike_c}°</strong></span>
                    </div>

                    <div className='more__details__bottom'>
                        <span>Vento <strong>{currentMock.wind_kph} km/h</strong></span>
                        <span>Umidade <strong>{currentMock.humidity}%</strong></span>
                    </div>
                </div>

                <hr className='searched__city__separator' />

                <div className='week__days'>
                    {forecastMock.forecastday.map(item => {

                        const myDate = new Date(item.date);

                        return (
                            <div className="day">
                                <p>{dayOfTheWeek[myDate.getDay()]}</p>
                                <div>
                                    <strong className='min'>Min {item.day.mintemp_c}</strong>
                                    <strong>Max {item.day.maxtemp_c}</strong>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}