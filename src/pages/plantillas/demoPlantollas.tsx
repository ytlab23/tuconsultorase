import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";
import { DemoItem } from "../components/demoplantillasitem";
import { FaCcMastercard, FaEnvelope, FaLaptop, FaTwitter, FaStar, FaGoogle, FaRocket } from 'react-icons/fa';
import { Hero } from '../components/hero';
import { TopA1, TopA2, TopA3, TopB1, TopB2, TopB3, TopC1, TopC2, TopC3 } from '../../assets/image/image';
import { BtnDemoplantillas } from "../../components/button/demoplantillas";
import { Layouts } from "../../components/layouts/layouts";

const plantillasDemoData: PlantillasDemoItem[] = [
    {
        title: 'Articulo A1',
        image: TopA1,
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        btn: <BtnDemoplantillas icon={<FaCcMastercard />} />
    },
    {
        title: 'Articulo B1',
        image: TopA2,
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        btn: <BtnDemoplantillas icon={<FaEnvelope />} />
    },
    {
        title: 'Articulo C1',
        image: TopA3,
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        btn: <BtnDemoplantillas icon={<FaLaptop />} />
    },
    {
        title: 'Articulo A2',
        image: TopB1,
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        btn: <BtnDemoplantillas icon={<FaTwitter />} />
    },
    {
        title: 'Articulo B2',
        image: TopB2,
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        btn: <BtnDemoplantillas icon={<FaGoogle />} />
    },
    {
        title: 'Articulo C2',
        image: TopB3,
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        btn: <BtnDemoplantillas icon={<FaRocket />} />
    },
    {
        title: 'Articulo A3',
        image: TopC1,
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        btn: <BtnDemoplantillas icon={<FaStar />} />
    },
    {
        title: 'Articulo B3',
        image: TopC2,
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        btn: <BtnDemoplantillas icon={<FaRocket />} />
    },
    {
        title: 'Articulo C3',
        image: TopC3,
        description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        ],
        btn: <BtnDemoplantillas icon={<FaStar />} />
    }
];

interface PlantillasDemoItem {
    title: string;
    image: string;
    description: string[];
    btn: React.ReactNode;
}

const DemoPlantillas = () => {
    useEffect(() => {
        document.title = 'Demo Plantilla Bootstrap Atomicai - Consultoria SEO';
    }, []);
    
    return (
        <Layouts>
            <DemoPlantillaWrapper>
                <Hero />
                <Grid container spacing={2}>
                    {plantillasDemoData.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <DemoItem {...item} btn={
                                <Box>
                                    {item.btn}
                                </Box>
                            } />
                        </Grid>
                    ))}
                </Grid>
            </DemoPlantillaWrapper>
        </Layouts>
    );
};

const DemoPlantillaWrapper = styled(Box)({
    // margin: '50px',
});

export { DemoPlantillas };