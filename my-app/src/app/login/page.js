"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const LoginPage =()=>{
    const router = useRouter();

    const navigate = (page)=>{
        router.push(page)
    }
    return(
        <div>
            <h1>Nested Routing</h1>
            <br/>
            <br/>
            <h2>Hello I am login Page</h2>
            <br/>
            <br/>
            <Link href="/login/loginteacher">Go tp loginteacherPage</Link>
            <br/>
            <br/>
            <Link href="/login/loginstudent">go to AboutStudentPage</Link>
            <br/>
            <br/>
            <button onClick={()=>navigate("/login/loginteacher")}>Go tp loginteacherPage</button>
            <br/>
            <br/>
            <button onClick={()=>navigate("/login/loginstudent")}>go to loginStudentPage</button>
        </div>
    )
}
export default LoginPage