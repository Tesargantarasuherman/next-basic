import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
// users/{id}

interface UserDetailProps{
  user:object;
}
const userDetail = (props:any) => {
  const router = useRouter();
  const { id } = router.query;
  const {user} = props;
  return (
  <Layout pageTitle="User Detail">
      <p>{user.name}</p>
      <p>{user.phone}</p>
  </Layout>
  )
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUser = await res.json();

  const paths = dataUser.map((user: any) => ({
    params: {
      id:`${user.id}`,
    },
  }));
  return {
    paths,
    fallback:true
  };
}
export async function getStaticProps(context:any){
  const {id} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return{
    props:{
      user,
    }
  }
}
export default userDetail;
