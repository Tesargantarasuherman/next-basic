import Layout from '../components/Layout';
import Cookies from "js-cookie";
import styles from '../styles/Home.module.css'
export default function Home (){
  return (
    <>
      <Layout pageTitle="Home Page">
      <div className={styles.container}>
      <button type="button" onClick={()=>{
        Cookies.set("token","ABCDEF",{expires:1/24})
      }}>Login</button>
      <button type="button" onClick={()=>{}}>Login</button>
      </div>
      </Layout >
    </>
  )
}

interface parameter{
  req:any;
  res:any
}

export function getServerSideProps(props:parameter){
  return{
    props:{}
  }
}
