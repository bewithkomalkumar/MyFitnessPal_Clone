import React from 'react';
import Carousel1 from './Carousel1';

let sData = [

    {
        id: 1,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png",
        title: "Fitbit",
        category: "Activity Trackers",
        getUrl: "http://www.myfitnesspal.com/fitbit/authorize"
    },

    {
        id: 2,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png",
        title: "Garmin Connect",
        category: "Activity Trackers",
        getUrl: "http://connect.garmin.com/mfp"
    },

    {
        id: 3,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_110_1_10_0_74815.png",
        title: "MapMyFitness",
        category: "Fitness Apps",
        getUrl: "http://www.mapmyfitness.com/app/"
    },

    {
        id: 4,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png",
        title: "MapMyRun",
        category: "Fitness Apps",
        getUrl: "http://www.mapmyrun.com/app/"
    },

    {
        id: 5,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_182_1_10_0_90660.png",
        title: "MapMyWalk",
        category: "Fitness Apps",
        getUrl: "http://www.mapmywalk.com/app/"
    },

    {
        id: 6,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_184_1_10_0_61431.png",
        title: "MapMyRide",
        category: "Fitness Apps",
        getUrl: "http://www.mapmyride.com/app/"
    },

    {
        id: 7,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_139_1_10_0_10915.png",
        title: "Withings Health Mate",
        category: "Activity Trackers",
        getUrl: "https://account.withings.com/connect/partner?p=myfitnesspal"
    },

    {
        id: 8,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png",
        title: "Strava",
        category: "Fitness Apps",
        getUrl: "http://strava.com/"
    },

    {
        id: 9,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png",
        title: "RunKeeper",
        category: "Fitness Apps",
        getUrl: "http://runkeeper.com/running-app?appsFlyerMediaSource=&appsFlyerCampaign="
    },

    {
        id: 10,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_306_1_10_0_49537.png",
        title: "TrainingPeaks",
        category: "Fitness Apps",
        getUrl: "http://home.trainingpeaks.com/?af=myfitnesspal"
    },

    {
        id: 11,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_331_1_10_0_52964.png",
        title: "Polar Flow",
        category: "Activity Trackers",
        getUrl: "https://flow.polar.com/"
    },

    {
        id: 12,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_2_1_10_0_87968.png",
        title: "Runtastic",
        category: "Fitness Apps",
        getUrl: "http://www.runtastic.com/apps/runtastic?utm_source=myfitnesspal&utm_campaign=cross_promo_mfp"
    },

    {
        id: 13,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_282_1_10_0_81543.png",
        title: "Misfit",
        category: "Activity Trackers",
        getUrl: "http://store.misfit.com/products/misfit-shine"
    },

    {
        id: 14,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_130_1_10_0_23647.png",
        title: "Glow",
        category: "Fertility",
        getUrl: "https://glowing.com/"
    },

    {
        id: 15,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_281_1_10_0_11521.png",
        title: "Accupedo Pedometer",
        category: "Accupedo",
        getUrl: "https://itunes.apple.com/us/app/accupedo-pedometer/id570886923?ls=1&mt=8"
    },

    {
        id: 16,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_115_1_10_0_94711.png",
        title: "Sworkit - Circuit Traning",
        category: "Fitness Apps",
        getUrl: "http://sworkit.com/"
    },

    {
        id: 17,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_client_62_1_10_0_1001.png",
        title: "Digfit",
        category: "Fitness Apps",
        getUrl: "http://www.shareasale.com/r.cfm?u=579392&b=455591&m=45825&afftrack=&urllink=www%2Edigifit%2Ecom%2Fsolutions%2F"
    },

    {
        id: 18,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_277_1_10_0_23608.png",
        title: "LFconnect",
        category: "Exercise Equipment",
        getUrl: "http://www.lifefitness.com/home.html"
    },

    {
        id: 19,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_247_1_10_0_36368.png",
        title: "Cyclemeter",
        category: "Fitness Apps",
        getUrl: "http://abvio.com/mfpcyclemeter"
    },

    {
        id: 20,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_246_1_10_0_32703.png",
        title: "Walkmeter",
        category: "Fitness Apps",
        getUrl: "http://abvio.com/mfpwalkmeter"
    },

    {
        id: 21,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_244_1_10_0_67858.png",
        title: "Runmeter",
        category: "Fitness Apps",
        getUrl: "http://abvio.com/mfp5krunmeter"
    },

    {
        id: 22,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_client_19_1_10_0_1001.png",
        title: "Expresso Exercise",
        category: "Exercise Equipment",
        getUrl: "http://ifholdings.com/MyFitnessPal?referral=mfp"
    },

    {
        id: 23,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_134_1_10_0_67780.png",
        title: "C25K - 5K Trainer",
        category: "Fitness Apps",
        getUrl: "http://www.exerciseforpink.com/"
    },

    {
        id: 24,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_131_1_10_0_56482.png",
        title: "RunDouble C25K",
        category: "Fitness Apps",
        getUrl: "http://www.rundouble.com/"
    },

    {
        id: 25,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_86_1_10_0_19952.png",
        title: "xID",
        category: "Fitness APPS",
        getUrl: "https://api.netpulse.com/#/home"
    },

    {
        id: 26,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_164_1_10_0_23928.png",
        title: "Wahoo RFLKT",
        category: "Wearables",
        getUrl: "http://www.wahoofitness.com/devices/rflkt.html?acc=26657d5ff9020d2abefe558796b99584"
    },

    {
        id: 27,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_165_1_10_0_14227.png",
        title: "Whaoo TICKR",
        category: "Wearables",
        getUrl: "http://www.wahoofitness.com/devices/wahoo-blue-hr-heart-rate-strap.html?acc=26657d5ff9020d2abefe558796b99584"
    },

    {
        id: 28,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_167_1_10_0_65358.png",
        title: "Wahoo Balance",
        category: "Scales",
        getUrl: "https://www.wahoofitness.com/instructions/balance?acc=26657d5ff9020d2abefe558796b99584"
    },

    {
        id: 29,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_168_1_10_0_67666.png",
        title: "PEAR Sports Training Intelligence",
        category: "Fitness Apps",
        getUrl: "http://pearsports.com/"
    },

    {
        id: 30,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_249_1_10_0_64451.png",
        title: "5K Runmeter",
        category: "Fitness Apps",
        getUrl: "http://abvio.com/mfp5krunmeter"
    },

    {
        id: 31,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_client_23_1_10_0_1001.png",
        title: "FINIS Swimsense",
        category: "Wearables",
        getUrl: "https://apps.finisinc.com/access/settings#privacy"
    },

    {
        id: 32,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_25_1_10_0_53376.png",
        title: "RHYTHM+ Heart Rate Monitor",
        category: "Wearables",
        getUrl: "http://www.scosche.com/rhythm+"
    },

    {
        id: 33,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_client_87_1_10_0_1001.png",
        title: "Tictrac",
        category: "Lifestyle",
        getUrl: "https://www.tictrac.com/"
    },

    {
        id: 34,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_125_1_10_0_79468.png",
        title: "Goji Play",
        category: "Wearables",
        getUrl: "http://bluegoji.com/"
    },
    {
        id: 35,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_132_1_10_0_2728.png",
        title: "Boot Camp Challenge",
        category: "Fitness Apps",
        getUrl: "http://bootcamp-challenge.com/"
    },

    {
        id: 36,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_190_1_10_0_53477.png",
        title: "FitStar",
        category: "Fitness Apps",
        getUrl: "http://fitstar.com/"
    },

    {
        id: 37,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_305_1_10_0_30788.png",
        title: "Fitstar Yoga",
        category: "Fitness Apps",
        getUrl: "https://www.myfitnesspal.com/apps?page=3"
    },

    {
        id: 38,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_376_1_10_0_45931.png",
        title: "qardio",
        category: "Scales",
        getUrl: "https://www.myfitnesspal.com/apps?page=3"
    },

    {
        id: 39,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_1_10_0_31181.png",
        title: "VeSync",
        category: "",
        getUrl: "https://www.myfitnesspal.com/apps?page=3"
    },

    {
        id: 40,
        image: "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png",
        title: "Renpho Health",
        category: "",
        getUrl: "https://www.myfitnesspal.com/apps?page=3"
    }
];

const Apps = () => {
    return (
        <div>
            <Carousel1 />
        </div>
    )
}

export default Apps;
