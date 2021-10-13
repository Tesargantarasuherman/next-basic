import Layout from '../components/Layout';
import Cookies from "js-cookie";
import styles from '../styles/Home.module.css'
import Link from "next/link"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, Form, Loader, Segment } from 'semantic-ui-react'

const Home = (props: any) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isSubmiting) {
      if (Object.keys(errors).length === 0) {
        submitLogin();
      }
      else {
        setIsSubmiting(false)
      }
    }
  }, [errors])


  const submitLogin = async () => {
    console.log(form)
    try {
      const res = await fetch('http://localhost:3000/api/user/login', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
      const data_res_login = await res.json();
      console.log(data_res_login.data)
      if (data_res_login.data) {
        fetch("/api/login", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ token: data_res_login.data.token })
        })
        localStorage.setItem('token', data_res_login.data.token);
        router.push("/blog")
      }
      else {
        setIsSubmiting(false)
        alert('user not found')
        localStorage.removeItem('token');
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let errs = validate()
    setErrors(errs)
    setIsSubmiting(true)

  }
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    let err = {};
    if (!form.email) {
      err.email = "email required"
    }
    if (!form.password) {
      err.password = "password required"
    }
    return err
  }

  return (
    <>

      <Layout pageTitle="Home Page">
        <div className={styles.container}>
          <div>
            {
              isSubmiting ?
                <Loader active inline="centered" />
                :
                <Segment inverted>
                  <Form inverted onSubmit={handleSubmit}>
                    <Form.Input fluid error={errors.email ? { content: 'Please enter a email', ponting: 'below' } : null} label="Email" placeholder="email" name="email" onChange={handleChange} />
                    <Form.Input fluid error={errors.password ? { content: 'Please enter a password', ponting: 'below' } : null} type="password" label="password" placeholder="password" name="password" onChange={handleChange} />
                    <Button type="submit">Login</Button>
                  </Form>
                </Segment>
            }
          </div>
          {/* <h2>{props.token}</h2><br />
          <button type="button" onClick={() => {
            fetch("/api/login", {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ token: "ABCD" })
            })
          }}>Login</button>
          <button type="button" onClick={() => {
            fetch("/api/logout", {
              method: "post",
              headers: {
                "Content-Type": "appllication/json"
              },
              body: JSON.stringify({})
            })
          }}>Logout</button> */}
        </div>
      </Layout >
    </>
  )
}

interface parameter {
  req: any;
  res: any
}

export function getServerSideProps(props: parameter) {
  return {
    props: {
      token: props.req.cookies.token || ""
    }
  }
}
export default Home;