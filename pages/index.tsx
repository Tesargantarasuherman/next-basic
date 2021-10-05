import Layout from '../components/Layout';
import Cookies from "js-cookie";
import styles from '../styles/Home.module.css'

export default function Home (props:any){
  return (
    <>
      <Layout pageTitle="Home Page">
      <div className={styles.container}>
        <h2>{props.token}</h2><br/>
      <button type="button" onClick={()=>{
       fetch("/api/login",{
         method:"post",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify({token:"ABCD"})
       })
      }}>Login</button>
      <button type="button" onClick={()=>{
               fetch("/api/logout",{
                method:"post",
                headers:{
                  "Content-Type":"appllication/json"
                },
                body:JSON.stringify({})
              })
      }}>Logout</button>
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
    props:{
      token: props.req.cookies.token || ""
    }
  }
}
