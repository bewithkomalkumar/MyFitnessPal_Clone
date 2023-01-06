import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';

const Carousel2 = (props) => {

    var items = [
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_3_10_0_17450.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_3_10_0_65832.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_3_10_0_94804.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_2_10_0_3957.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_2_10_0_74866.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_2_10_0_26145.png" },
    ]

    return (
        <div>

            <Carousel
                indicatorIconButtonProps={{
                    style: {
                        padding: '5px',
                        color: 'white'
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        backgroundColor: "white",
                        color: "white"
                    }
                }}
                indicatorContainerProps={{
                    style: {
                        // marginTop: '50px',
                        // textAlign: 'right'
                    }
                }}
                animation="slide"
            >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>

        </div>

    )
}

function Item(props) {
    // console.log(props);
    return (
        <>
            <Paper>
                <img src={props.item.image} width="100%" height="300px" alt="pic" />
            </Paper>
        </>
    )
}

export default Carousel2;
