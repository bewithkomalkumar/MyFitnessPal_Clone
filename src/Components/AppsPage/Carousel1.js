import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';

const Carousel1 = (props) => {

    var items = [
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_2_10_0_90706.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_2_10_0_25954.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_2_10_0_4027.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_2_10_0_3957.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_2_10_0_74866.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_2_10_0_26145.png" },
        { image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_2_10_0_2751.png" },
    ]

    return (
        <div>

            <Carousel
                indicatorIconButtonProps={{
                    style: {
                        padding: '5px',
                        color: 'black'
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        backgroundColor: 'red',
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
    console.log(props);
    return (
        <>
            <Paper>
                <img src={props.item.image} width="400px" height="300px" alt="pic" />
            </Paper>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </>
    )
}

export default Carousel1;
