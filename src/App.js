import {useEffect, useState} from "react";
import axios from "axios";
import GlobalStyle from "./Global.style";
import Header from "./components/header/Header";
import Item from "./components/item/Item";
import {Content} from './App.style';
import {Grid} from "@mui/material";

const App = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('test.json');
            setData(res.data);
        };

        fetchData();
    }, []);

    const renderItems = data?.map(item => {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Item key={item.id}
                      item={item}
                />
            </Grid>
        )
    });

    return (
        <div>
            <GlobalStyle/>
            <Header title="Auctions Deals"/>
            <Content>
                <Grid container spacing={3}>
                    {renderItems}
                </Grid>
            </Content>
        </div>
    );
}

export default App;
