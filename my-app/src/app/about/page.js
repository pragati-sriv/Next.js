import Link from "next/link"

const AboutPage =()=>{
    return(
        <div>
            <h1>Nested Routing</h1>
            <br/>
            <br/>
            <h2>Hello I am About Page</h2>
            <br/>
            <br/>
            <Link href="/about/aboutcollege">Go tp AboutCollegePage</Link>
            <br/>
            <br/>
            <Link href="/about/aboutstudent">go to AboutStudentPage</Link>
        </div>
    )
}
export default AboutPage