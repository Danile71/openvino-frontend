import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Body} from './Body';
import {useEffect, useState} from "react";
import axios from 'axios';
import animateScrollTo from "animated-scroll-to";

const App: React.FC = () => {

    // http://192.168.43.2:8080/total

    const [data, setData] = useState();
    const [totalData, setTotalData] = useState();
    const [loadingToggle, setLoadingToggle] = useState(true);
    const [serverError, setServerError] = useState(false);

    useEffect(() => {
            getData();
            getTotalData();
    }, []);

    const getData = async () => {
        try {
            const mensAndWomens = await axios.get(`http://10.12.250.180:8080/stats`);
            setData(mensAndWomens.data);
            if(mensAndWomens.data) {
                setLoadingToggle(false);
            }
        }
        catch(e) {
            console.log(e);
            setServerError(true);
        }
    };


    const getTotalData = async () => {
        try {
            const total = await axios.get(`http://10.12.250.180:8080/total`);
            if(total.data) {
                setLoadingToggle(false);
            }
            setTotalData(JSON.parse(total.data));
        } catch (e) {
            console.log(e);
            setServerError(true);
        }
    };

    const goDown = (e: any) => {
        animateScrollTo(900)
    };

    return (
    <div className="App" onKeyDown={(e) => goDown(e)}>
        {
            serverError ? (
                <div className="error">
                    <h1 style={{marginTop: '300px'}}>Сервер недоступен</h1>
                    <div className="cat" />
                </div>) : ( loadingToggle ? ( <h1 style={{marginTop: '300px'}}>Получение данных...</h1>) : (
                    data && totalData && <Body genderData={data} totalData={totalData} />
                )
            )
        }
    </div>
  );
};

export default App;
