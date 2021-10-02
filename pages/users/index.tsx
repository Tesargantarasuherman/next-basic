import Layout from '../../components/Layout';
import {useRouter} from 'next/router';
import styles from '../../styles/user.module.css';
// tipe variabel props
interface UserProps{
    dataUser: Array<any>;
}
// 
const indexUsers = (props:UserProps) => {
    const {dataUser} =  props;
    const router = useRouter();

    console.log(dataUser)
    return (
        <Layout pageTitle="Users">
            {dataUser.map((user:any)=>{
                return(
                    <div key={user.id} onClick={()=>router.push(`/users/${user.id}`)} className={styles.card}>
                    <p >{user.name}</p>
                    </div>
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
