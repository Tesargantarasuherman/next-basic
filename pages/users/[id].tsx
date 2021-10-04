import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
// user/{id}
const userDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return <Layout pageTitle="User Detail">User Details {id}</Layout>;
};
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUser = await res.json();

  const paths = dataUser.map((user: any) => ({
    params: {
      id: user.id,
    },
  }));
  return {
    paths: {
      dataUser,
    },
  };
}
export default userDetail;
