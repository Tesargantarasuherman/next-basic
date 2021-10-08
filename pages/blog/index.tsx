import Layout from "../../components/Layout";
interface BlogProps{
    data_blog: Array<any>;
}
const indexBlog = (props: BlogProps) => {
    const {data_blog} =  props;
    const dataBlog = data_blog.data
    return (
        <Layout pageTitle="Blog">
            {dataBlog.map((blog: any) => {
                return (
                    <div key={blog._id}>
                        {blog.title}
                    </div>
                )
            })}        
        </Layout>
    );
}
indexBlog.getInitialProps = async()=>{
    const res = await fetch('http://localhost:3000/api/blog');
    const data_blog = await res.json();
    return {
    data_blog
    }
}
// export async function getStaticProps() {

// }
export default indexBlog;
