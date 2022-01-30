import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MainButton from "../main-button/MainButton";
import {CardStyle, Destinations, Views} from "./Item.style";

const Item = ({item}) => {
    return (
        <CardStyle>
            <CardMedia
                component="img"
                height="140"
                image={item.img}
                sx={{border: 0}}
            />
            <CardContent>
                <Destinations>
                    <span>{item.outboundId}</span>
                    <AirplanemodeActiveIcon/>
                    <span>{item.inboundId}</span>
                </Destinations>
                <Views>
                    <RemoveRedEyeIcon/>
                    {item.viewersCount}
                </Views>
            </CardContent>
            <CardActions>
                <MainButton>Now From {item.currencySymbol}{item.currentMinPrice}</MainButton>
            </CardActions>
        </CardStyle>
    );
};

export default Item;
