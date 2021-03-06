import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
import { useState, useEffect } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

interface Blog {
    title: string;
    description: string;
    _id: string;
    url_image: string
}
interface BlogDetailProps {
    blog: Blog;
}
const blogDetail = (props: BlogDetailProps) => {
    const router = useRouter();
    // const { id } = router.query;
    // const { blog } = props;
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("token");
        let id = router.query;
        getBlog({ token, id });
    }, [])
    const getBlog = async (token: any) => {
        try {
            const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                }
            });
            const data_blog_res = await res.json();
            const data_blog = data_blog_res.data;
            setBlogs(data_blog)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <Layout pageTitle={`Blog Detail${blogs.title}`}>
            <Grid.Row columns={1}  >
                <Grid.Column >
                    <Card key={blogs._id} fluid>
                        <Image src={`${blogs.url_image  ? blogs.url_image : 'https://images.unsplash.com/photo-1633783156075-a01661455344?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80'}`} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{blogs.title}</Card.Header>
                            <Card.Meta>Joined in 2016</Card.Meta>
                            <Card.Description>
                                {blogs.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                10 Komentar
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Layout>
    )
};

// export async function getStaticPaths() {
//     const res = await fetch("http://localhost:3000/api/blog");
//     const dataBlog = await res.json();

//     const data_blog = dataBlog.data;

//     const paths = data_blog ? data_blog.map((blog: Blog) => ({
//         params: {
//             id: `${blog._id}`,
//         },
//     })) : null;
//     return {
//         paths,
//         fallback: false
//     };
// }
// interface _getStaticProps {
//     params: {
//         id: string;
//     }
// }
// export async function getStaticProps(context: _getStaticProps) {
//     const { id } = context.params;
//     const res = await fetch(`http://localhost:3000/api/blog/${id}`);
//     const blog_res = await res.json();
//     const blog = blog_res.data;

//     return {
//         props: {
//             blog,
//         }
//     }
// }
export default blogDetail;
