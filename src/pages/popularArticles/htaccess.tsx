import { useEffect } from "react"
import { styled } from "@mui/material/styles"
import { Grid, Box } from "@mui/material"

import { Extra } from "../components/extra"
import { Layouts } from "../../components/layouts/layouts"
import { CustomBreadcrumbs } from "../components/breadcrumbs";
import { PopularArticles } from "../components/popularArticles"
import { BlogItem } from "../components/blogitem"
import ContactAuthorSection from "../components/ContactAuthorSection"

const blogSeoData: BlogData[] = [
	{
		title: 'Consejos y trucos para mejorar Joomla! la seguridad. Htaccess en Joomla!',
		description: [
			'<h3 style="color: #4cb2cf">&iquest;Qu&eacute; es el .htaccess</h3>',
            '.Htaccess es un archivo de configuraci&oacute;n para usar en servidores web que ejecutan el software de Apache Web Server. Los archivos .htaccess se pueden utilizar para alterar la configuraci&oacute;n del software de Apache Web Server para habilitar/deshabilitar la funcionalidad y caracter&iacute;sticas adicionales que el software Apache Web Server ofrece.',
            '<h3 style="color: #4cb2cf">Creaci&oacute;n de un archivo .htaccess</h3>',
            '<strong><em>.Htaccess</em></strong> es el nombre del archivo en su totalidad, no es una extensi&oacute;n Joomla! Por ejemplo, usted no tiene que crear un archivo llamado,  <strong><em>nombre.htaccess</em></strong> <strong><em>.htaccess.txt</em></strong>, simplemente se llama <strong><em>.htaccess</em></strong>',
            '<br>Usted puede crear un nuevo archivo .htaccess utilizando cualquier buen editor de texto como&nbsp; UltraEdit, bloc de notas y similar.',
            '<br>La creaci&oacute;n de un archivo .htaccess puede causar algunos problemas. Escribir el archivo es f&aacute;cil, s&oacute;lo necesitas ingresar el c&oacute;digo adecuado en un editor de texto (como el Bloc de notas). Usted puede tener problemas al guardar el archivo porque .htaccess es un nombre de archivo extra&ntilde;o y no es aceptado en ciertos sistemas.',
            '<br>Con la mayor&iacute;a de los sistemas operativos, sin embargo, todo lo que tiene que hacer es guardar el archivo introduciendo el nombre como &quot;.htaccess&quot; (incluyendo las comillas). Si esto no funciona, tendr&aacute; que darle un nombre y una extensi&oacute;n (por ejemplo htaccess.txt) y luego subirlo al servidor. Una vez que haya cargado al servidor, puede cambiarle el nombre usando un programa FTP (por ejemplo FileZilla).',
            '<h3 style="color: #4cb2cf">Modo de empleo .Htaccess en Joomla!</h3>',
            'Joomla! ya tiene un archivo llamado <strong><em>htaccess.txt</em></strong> ubicado en el directorio ra&iacute;z. Una vez que desee utilizar este archivo debe cambiarle el nombre a <strong><em>.htaccess</em></strong>',
            '<br>Por defecto, este archivo se ha preconfigurado para trabajar bien con Joomla!, como SEF.',
            '<h3 style="color: #4cb2cf">Tutorial .htaccess</h3>',
            'En esta parte te mostrar&eacute; c&oacute;mo utilizar el archivo htaccess.',
            '<h4>Archivos de &iacute;ndice de directorio personalizada</h4>',
            'El archivo <strong><em>index.php</em></strong> es el esqueleto de la <strong><em>p&aacute;gina web.</em></strong> Cada <strong>p&aacute;gina web</strong> que Joomla! entrega en el archivo  <strong><em>index.php</em></strong> una selecci&oacute;n de contenido insertado desde la base de datos. Por defecto, el archivo <em>index.html </em> se ejecutar&aacute; con prioridad, por lo que si usted tieneeste archivo en el directorio ra&iacute;z obtendr&aacute; una <strong>p&aacute;gina</strong> en blanco. Para solucionar este problema, agregue a htaccess las siguientes l&iacute;neas:',
            '<ol style="background-color: #f1f1f1;"><li>DirectoryIndex index.php index.html</li></ol>',
            '<h4>Ocultar y negar archivos</h4>',
            'A veces se desea ocultar o impedir el acceso a cualquier archivo en su carpeta Joomla! (por ejemplo, archivos xml)',
            '<ol style="background-color: #f1f1f1; box-shadow: 0 0 0 0.5px;" ><li>&lt;FIles ~ <span style=" color: blue">&quot;\\.xml$&quot;</span>&gt;</li><li>Order allow deny,</li><li>Deny ffrom all</li><li>Satify all</li><li>&lt;/Files&gt;</li></ol>',
            '<h4>Permitir el acceso a un determinado archivo</h4>',
            'Si usted desea permitir el acceso a algunos archivos (por ejemplo, permitir que los motores de b&uacute;squeda accedan a su sitemap.xml)',
            '<ol style="background-color: #f1f1f1; box-shadow: 0 0 0 0.5px;"><li>&lt;Files&gt; sitemap.xml</li><li>Allow from all</li><li>&lt;/Files&gt;</li></ol><h4>Redireccionar www a sin www</h4><ol style="background-color: #f1f1f1; box-shadow: 0 0 0 0.5px;"><li>RewriteCond &#37;&#123;HTTP_HOST&#125; &#94;www.tuconsultoraseo.com &#91;NC&#93;</li><li>RewriteRule &#94;&#40;&#183;&#42;&#41;&#36; http://<span style="color: green;">tuconsultoraseo.com/&#36;1 &#91;L, R&#61;301&#93;</span></li></ol><h4>Redireccionar sin www a www</h4><ol style="background-color: #f1f1f1; box-shadow: 0 0 0 0.5px;"><li>RewriteCond &#37;&#123;HTTP_HOST&#125; &#94;www.tuconsultoraseo.com &#91;NC&#93;</li><li>RewriteRule &#94;&#40;&#183;&#42;&#41;&#36; http://<span style="color: green;">tuconsultoraseo.com/&#36;1 &#91;L, R&#61;301&#93;</span></li></ol><h4>Redirigir dominio viejo a nuevo dominio</h4><ol style="background-color: #f1f1f1; box-shadow: 0 0 0 0.5px;"><li>RewriteRule &#94;&#40;&#183;&#42;&#41;&#36; http://<span style="color: green;">tuconsultoraseo.com/&#36;1 &#91;L, R&#61;301&#93;</span></li></ol><h4>Redireccionar a una URL diferente</h4><ol style="background-color: #f1f1f1; box-shadow: 0 0 0 0.5px;"><li>redircet/categoria/articulo-viejo.html. http://www.tuconsultoraseo.com/categoria</li></ol><h4>Redireccionar antigua categoria a nueva categoria</h4><ol style="background-color: #f1f1f1; box-shadow: 0 0 0 0.5px;"><li>redirect /categoria-viega/articulo.html http://www.tuconsultoraseo.com/nuevo-categoria/articulo.html</li></ol>',
            '<em><strong>Las especificaciones del archivo tendran efecto en el directorio en que se coloca y en todos los archivos y subdirectorios.</strong></em>'
		]
	}
]

const Htaccess = () => {
	useEffect(() => {
		document.title = 'htaccess en joomla! - Consultoria SEO';
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
							{blogSeoData.map((item, index) => (
								<BlogItem key={index} {...item} />
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
});

export { Htaccess }	