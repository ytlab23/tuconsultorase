import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Typography, Box } from '@mui/material';

import { Extra } from "./components/extra";
import { Layouts } from "./../components/layouts/layouts";
import { CustomBreadcrumbs } from "./components/breadcrumbs";
import { PopularArticles } from "./components/popularArticles";
import { Image1, Image2, Image3 } from "../assets/image/image";
import ContactAuthorSection from "./components/ContactAuthorSection";

interface PortafolioData {
    title: string;
    image: string;
    description: string[];
}

const portafolioData: PortafolioData[] = [
	{
		title: 'Portafolio',
		image: Image1,
		description: [
			'¿Google toma medidas sobre páginas generadas automáticamente que no proporcionan valor añadido? La respuesta es sí. Sin embargo; Google no es perfecto y si ves ejemplos de contenido autogenerado que se encuentra en los resultados de búsqueda que no agregan valor, como las páginas de resultados, Google quiere que envíe un informe de spam.',
		]
	},
	{
		title: '',
		image: Image3,
		description: []
	},
	{
		title: '',
		image: Image2,
		description: []
	}
]

const PortafolioItem: React.FC<PortafolioData> = ({ title, image, description }) => {
    return (
        <Box>
            <Typography variant="h1" style={{ fontSize: '1.5rem', marginBottom: '10px', textAlign: 'center', color: '#333' }}>{title}</Typography>
            <Box>
                <img src={image} alt={title} height='auto' width='479px' />
            </Box>
            <Typography variant="body1">
                <span dangerouslySetInnerHTML={{ __html: description.join(' ') }} />
            </Typography>
        </Box>
    );
};

const Portafolio = () => {
	useEffect(() => {
        document.title = 'Portafolio de paginas web - Consultoria SEO';
    }, []);
	return (
		<Layouts>
			<SeoWrapper>
				<CustomBreadcrumbs />

				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Extra />
					</Grid>

					<Grid item xs={12} md={6}>
						<Box display="flex" flexDirection="column" gap={2}>
							{portafolioData.map((item, index) => (
								<PortafolioItem key={index} {...item} />
							))}

							<ContactAuthorSection />
						</Box>
					</Grid>

					<Grid item xs={12} md={3}>
						<PopularArticles />
					</Grid>
				</Grid>
			</SeoWrapper>
		</Layouts>
	)
}

const SeoWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
})

export { Portafolio }	