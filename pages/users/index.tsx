import Layout from '../../components/Layout';

// tipe variabel props
interface UserProps{
    dataUser: Array<any>;
}
// 
const indexUsers = (props:UserProps) => {
    const {dataUser} =  props;
    console.log(dataUser)
    return (
        <Layout pageTitle="Users">
            {dataUser.map((user:any)=>{
                return(
                    <>
                    <p >{user.name}</p>
                    </>
                )
            })}
        </Layout>
    );
}
export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUser = await res.json();
    return{
        props: {
            dataUser
        }
    }
}
export default indexUsers ;
