import { Box, Typography } from "@mui/material";
import { BlogHeader, BlogItemWrapper } from "../../components/blog/blog";

const BlogItem = ({ title, description }: BlogData) => {
    return (
        <BlogItemWrapper>
            <BlogHeader>
                <Typography variant="h2">{title}</Typography>
            </BlogHeader>

            <Box>
                {description.map((item: string, index: number) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
            </Box>

            {/* <CustomActiveLink to="/">
                <Typography variant="h5">Leer más: {title}</Typography>
            </CustomActiveLink> */}
        </BlogItemWrapper>
    );
};

export { BlogItem };