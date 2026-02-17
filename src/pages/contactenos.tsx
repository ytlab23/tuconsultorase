import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Typography, Box } from '@mui/material';

import { Extra } from "./components/extra";
import { Layouts } from "./../components/layouts/layouts";
import { CustomBreadcrumbs } from "./components/breadcrumbs";
import { PopularArticles } from "./components/popularArticles";
import { contactenos1, contactenos2 } from "../assets/image/image";

interface ContactenosData {
    title: string;
    image: string;
    description: string[];
}

const contactenosData: ContactenosData[] = [
	{
		title: 'Formulario de contacto',
		image: contactenos2,
		description: [
			'Por favor, pongase en contacto con nosotros en relación con CUALQUIERA de los servicios ofrecidos en este Sitio Web.',
		]
	},
	{
		title: '',
		image: contactenos1,
		description: [
			'Ud. puede solicitar una evaluación SEO gratuita de su sitio web. Conozca que factores impiden que su pagina web no este posicionada en los primeros lugares en los resultados de búsqueda o simplemente solicite un presupuesto para su página web. Sus datos estarán seguros con nosotros, no serán vendidos o cedidos en ningún modo. Garantía de confidencialidad.',
			'<br>Dejenos saber en que podemos ayudarle más allá de las cuestiones básicas de <strong>seo</strong>. Diseño y desarrollo de sitios web. Ofrecemos una perspectiva fresca a los dueños de negocios online, <strong>webmaster</strong>Analítica web, investigación de palabras clave.'
		]
	}
]

const ContactenosItem: React.FC<ContactenosData> = ({ title, image, description }) => {
	return (
		<Box>
			<Typography variant="h1" style={{ fontSize: '1.5rem', marginBottom: '10px', textAlign: 'center', color: '#333' }}>{title}</Typography>
			<Box>
				<img src={image} alt={title} height='auto' width='auto' />
			</Box>
			<Typography variant="body2">
				<span dangerouslySetInnerHTML={{ __html: description.join(' ') }} />
			</Typography>
		</Box>
	);
};

const Contactenos = () => {
	useEffect(() => {
        document.title = 'Formulario de contacto';
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
							{contactenosData.map((item, index) => (
								<ContactenosItem key={index} {...item} />
							))}
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

export { Contactenos }	