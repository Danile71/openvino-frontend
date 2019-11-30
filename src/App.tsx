import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Body} from './Body';
import {useEffect, useState} from "react";
import axios from 'axios';

const App: React.FC = () => {

    const [data, setData] = useState();
    const [totalData, setTotalData] = useState();

    useEffect(() => {
        // getData();
        // getTotalData();
    }, []);

    const getData = async () => {
        try {
            const mensAndWomens = await axios.get(`http://192.168.43.2:8080/stats`);
            setData(mensAndWomens.data);
        }
        catch(e) {
            console.log(e);
        }
    };

    const getTotalData = async () => {
        try {
            const total = await axios.get(`http://192.168.43.2:8080/total`);
            setTotalData(JSON.parse(total.data));
        } catch (e) {

        }
    };

    return (
    <div className="App">
        {
            data && totalData && <Body genderData={data} totalData={totalData} />
        }
    </div>
  );
};

export default App;
