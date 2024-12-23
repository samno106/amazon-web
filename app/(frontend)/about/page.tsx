import { Suspense } from 'react'

export const AboutPage =()=>{

    return(
        <section>
             <Suspense fallback={<p>Loading feed...</p>}>
            <h3>About Page</h3>
            </Suspense>
        </section>
    )
}

export default AboutPage;