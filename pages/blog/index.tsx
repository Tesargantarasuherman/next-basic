import Layout from "../../components/Layout";
import Link from 'next/link';

import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import styles from './style.module.css'
interface BlogProps {
    data_blog: Array<any>;
}
const indexBlog = (props: BlogProps) => {
    const { data_blog } = props;
    const dataBlog: [string] = data_blog.data;
    // const router = useRouter();

    return (
        <Layout pageTitle="Blog">
            <Grid divided='vertically' padded className={styles.card_margin_top}>
                <Grid.Row columns={3}  >
                    {dataBlog.map((blog: any) => {
                        return (
                            <Grid.Column >
                                <Card key={blog._id}>
                                    <Image src='https://images.unsplash.com/photo-1633114127408-af671c774b39?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80' wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>Daniel</Card.Header>
                                        <Card.Meta>Joined in 2016</Card.Meta>
                                        <Card.Description>
                                            Daniel is a comedian living in Nashville.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name='user' />
                                            10 Friends
                                        </a>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        )
                    })}
                </Grid.Row>
            </Grid>

        </Layout>
    );
}
// indexBlog.getInitialProps = async () => {
//     const res = await fetch('http://localhost:3000/api/blog');
//     const data_blog = await res.json();
//     return {
//         data_blog
//     }
// }
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/blog');
    const data_blog = await res.json();
    return {
        props: {
            data_blog
        }
    }
}
export default indexBlog;
