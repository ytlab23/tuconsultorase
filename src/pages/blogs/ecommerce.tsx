import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs"
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"

const blogEcommerceData: BlogData[] = [
	{
		title: 'Tips Consejos SEO para sitios e-commerce',
		description: [
			'Los siguientes son ideas y consejos relacionadas con <span>SEO</span>  que pueden resultar útiles para su sitio de comercio electrónico (e-commerce).',
			'<ol><li><b>Cosas que harán que los compradores potenciales lo piensen antes de ir más allá en el proceso de compra en su tienda online.</b></li></ol>',
			'Los clics excesivos pueden hacer perder compradores, ya que no agilizan el proceso de compra.',
		]
	}, {
		title: "Principios de diseño de paginas web",
		description: [
			'Entre los <strong>principios</strong> para un buen <strong>diseño de paginas web</strong> o sitios es importante tener en cuenta la experiencia del usuario; factores como la usabilidad, navegación, búsquedas, formularios, de allí que tenemos que tomar en cuenta las siguientes secciones:',
		]
	}, {
		title: 'Que aspectos considerar en e-commerce para garantizar su exito',
		description: [
			'<span>He encontrado empresas de comercio electrónico qu</span>e eligen su tecnología basada principalmente en la estética y en segundo lugar en la funcionalidad. Los aspectos del negocio en cuanto a tecnología de comercio electrónico a menudo se pasan por alto. ',
		]
	}	
]

const Ecommerce = () => {
	useEffect(() => {
        document.title = 'e-commerce - Consultoria SEO';
    }, []);
	return (
		<Layouts>
			<EcommerceWrapper>
				<CustomBreadcrumbs />

				<Grid container spacing={2}>
					<Grid item xs={12} md={3}>
						<Extra />
					</Grid>

					<Grid item xs={12} md={6}>
						<Box display="flex" flexDirection="column" gap={2}>
							{blogEcommerceData.map((item, index) => (
								<BlogItem key={index} {...item} />
							))}
						</Box>
					</Grid>

					<Grid item xs={12} md={3}>
						<PopularArticles />
					</Grid>
				</Grid>
			</EcommerceWrapper>
		</Layouts>
	)
}

const EcommerceWrapper = styled(Box)({
	gap: '5px',
	paddingTop: '10px',
	display: 'flex',
	flexDirection: 'column',
})

export { Ecommerce }	