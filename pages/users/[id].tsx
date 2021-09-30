import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
// user/{id}
const userDetail = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <Layout pageTitle="User Detail">
            User Details {id}
        </Layout>
    );
}

export default userDetail;
