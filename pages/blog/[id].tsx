import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
// users/{id}


interface Blog{
  title:string;
  description:string;
  _id:string;
}
interface BlogDetailProps{
  blog:Blog;
}
const blogDetail = (props:BlogDetailProps) => {
  const router = useRouter();
  const { id } = router.query;
  const {blog} = props;
  return (
  <Layout pageTitle="User Detail">
      <p>{blog.data.title}</p>
      <p>{blog.data.description}</p>
  </Layout>
  )
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/blog");
  const dataBlog = await res.json();

  const data_blog = dataBlog.data;

  const paths = data_blog.map((blog:Blog) => ({
    params: {
      id:`${blog._id}`,
    },
  }));
  return {
    paths,
    fallback:false
  };
}
interface _getStaticProps{
  params:{
    id:string;
  }
}
export async function getStaticProps(context:_getStaticProps){
  const {id} = context.params;
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const blog = await res.json();
  return{
    props:{
      blog,
    }
  }
}
export default blogDetail;
