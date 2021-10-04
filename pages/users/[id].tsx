import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
// users/{id}


interface User{
  name:string;
  phone:string;
  id:number;
}
interface UserDetailProps{
  user:User;
}
const userDetail = (props:UserDetailProps) => {
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

  const paths = dataUser.map((user:User) => ({
    params: {
      id:`${user.id}`,
    },
  }));
  return {
    paths,
    fallback:true
  };
}
interface _getStaticProps{
  params:{
    id:string;
  }
}
export async function getStaticProps(context:_getStaticProps){
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
