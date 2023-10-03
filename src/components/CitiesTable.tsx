import { useEffect, useState } from "react";
import api from "../services/api";

import '../styles/mainCities.scss';

interface CityProps {
    city_name: string;
    country_code: string;
    data: any[];
}

export const MainCitiesTable = () => {

    const [mainCities] = useState([
        { id: '3663517', city: 'Manaus' },
        { id: '3448439', city: 'São Paulo' },
        { id: '3451190', city: 'Rio de Janeiro' },
        { id: '3469058', city: 'Brasilia' }
    ]);
    const [mainCitiesData, setMainCitiesData] = useState<CityProps[]>([
        {
            city_name: 'São Paulo',
            country_code: 'string',
            data: [ {min_temp: 10, max_temp: 20} ],
        },
        {
            city_name: 'Rio de Janeiro',
            country_code: 'string',
            data: [ {min_temp: 30, max_temp: 35} ],
        },
        {
            city_name: 'Belo Horizonte',
            country_code: 'string',
            data: [ {min_temp: 20, max_temp: 30} ],
        },
        {
            city_name: 'Salvador',
            country_code: 'string',
            data: [ {min_temp: 25, max_temp: 36} ],
        },
        {
            city_name: 'Curitiba',
            country_code: 'string',
            data: [ {min_temp: 12, max_temp: 21} ],
        },
        {
            city_name: 'Manaus',
            country_code: 'string',
            data: [ {min_temp: 18, max_temp: 23} ],
        }
    ]);

    const [isLoadingMainCities, setIsLoadingMainCities] = useState(false);

    // Fetch capitals from the API
    const fetchCapitals = async () => {

        setIsLoadingMainCities(true)

        try {
            const responseCapitals = await Promise.all(
                mainCities.map(async capital => {
                    const response = await api.get('/forecast/daily', {
                        params: {
                            city_id: capital.id,
                        },
                    });

                    return response.data;
                })
            );

            setMainCitiesData(responseCapitals);

            console.log(responseCapitals)

            setIsLoadingMainCities(false);

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {

        setIsLoadingMainCities(true)

        //fetchCapitals();

        setTimeout(() => {

            setIsLoadingMainCities(false)
            
        }, 1000);
    }, [])

    return (
        <div className="main__cities__container">
            {isLoadingMainCities ? (
                <span>loading...</span>
            ) : (
                <>
                    <div className="main__cities__table">

                        <h2>Capitais</h2>

                        <table cellSpacing={16}>
                            <tr>
                                <th>Min</th>
                                <th>Máx</th>
                            </tr>

                            <tbody>

                                {mainCitiesData.map((item: any) => (
                                    <tr>
                                        <td>{`${Math.round(item.data[0].min_temp)}°`}</td>
                                        <td>{`${Math.round(item.data[0].max_temp)}°`}</td>
                                        <td>{item.city_name}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>

                    </div>
                </>
            )}
        </div>
    )
}