import Layout from "../../components/Layout";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";
import { useState, useEffect } from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import styles from './style.module.css'
interface BlogProps {
    data_blog: Array<any>;
}
const indexBlog = (props: BlogProps) => {
    // const { data_blog } = props;
    const router = useRouter();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("token")
        getBlog(token);
    }, [])
    const getBlog = async (token: any) => {
        try {
            const res = await fetch('http://localhost:3000/api/blog', {
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
        <Layout pageTitle="Blog">

            <Grid divided='vertically' padded className={styles.card_margin_top}>
                <Grid.Row columns={4}  >
                    {blogs ?
                    blogs.map((blog: any) => {
                        return (
                            <Grid.Column onClick={() => router.push(`/blog/${blog._id}`)} >
                                <Card key={blog._id}>
                                    <Image src={`${blog.url_image ? blog.url_image : 'https://images.unsplash.com/photo-1633783156075-a01661455344?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80'}`} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>{blog.title}</Card.Header>
                                        <Card.Meta>Joined in 2016</Card.Meta>
                                        <Card.Description>
                                            {blog.description}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='chat' />
                                            10 Komentar
                                        </a>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        )
                    })
                    :
                    'Anda Belum Login'
                    }
                </Grid.Row>
            </Grid>

        </Layout>
    );
}
// indexBlog.getInitialProps = async () => {
//     const token = Cookies.get('token')
//     console.log(token)
//     const res = await fetch('http://localhost:3000/api/blog');
//     const data_blog = await res.json();
//     return {
//         data_blog
//     }
// }
// export async function getStaticProps() {
//     const token = Cookies.get('token')
//     const res = await fetch('http://localhost:3000/api/blog', {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYmFzaWMiLCJpYXQiOjE2MzQwMTA5MjIsImV4cCI6MTYzNDAxNDUyMn0.FyoyvwLAHgncL_bqNkAV26f6TA_mPWugqWKOFHfvgII`
//         }
//     });
//     const data_blog_res = await res.json();
//     const data_blog = data_blog_res.data;
//     return {
//         props: {
//             data_blog: data_blog || ''
//         }
//     }
// }

export default indexBlog;
