import React from 'react'
import Card from './card'

function App() {

const data = [
  {
    plan:"FREE",
    price:0,
    user : "single User",
    storage:"5GB Storage",
    PublicProject:"Unlimited Public Projects",
    communityAccess:"Community Access",
    PrivateProjects:"Unlimited Private Projects",
    support:"DedicatedPhonesupport",
    subdomain:"Free Subdomain",
    reports:"Monthly Status Reports"

  },
  {
    plan:"Plus",
    price:9,
    user : "5 Users",
    storage:"50GB Storage",
    PublicProject:"Unlimited Public Projects",
    communityAccess:"Community Access",
    PrivateProjects:"Unlimited Private Projects",
    support:"DedicatedPhonesupport",
    subdomain:"Free Subdomain",
    reports:"Monthly Status Reports"

  },
  {
    plan:"PRO",
    price:49,
    user : "Multiple users",
    storage:"150GB Storage",
    PublicProject:"Unlimited Public Projects",
    communityAccess:"Community Access",
    PrivateProjects:"Unlimited Private Projects",
    support:"DedicatedPhonesupport",
    subdomain:"Unlimited Free Subdomains",
    reports:"Monthly Status Reports"

  }
]


  return <>
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            data.map((e)=>{
              return <Card details={e}/>
            })
          }

        </div>
      </div>
    </section>
  </>
}


export default App