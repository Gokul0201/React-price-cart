
import './App.css';
import PriceCard from './PriceCard';

function App() {
  let data=[
    {
  plan:"Free",
  price:"0",
  user:"Single user",
  isUser:true,
  storage:"5GB Storage",
  isStorage:true,
  publicProject:"Unlimited Public Projects",
  isPublicProject:true,
  communityAccess:"Community Access",
  isCommunityAccess:true,
  privateProject:"Unlimited Private Projects",
  isPrivateProjects:false,
  phone:"Dedicated Phone Support",
  isPhone:false,
  subdomain:"Free Sub Domains",
  isSubDomain:false,
  reports:"Monthly Status Report",
  isReports:false
  
  },
{
  plan:"Plus",
  price:"9",
  user:"5 users",
  isUser:true,
  storage:"50GB Storage",
  isStorage:true,
  publicProject:"Unlimited Public Projects",
  isPublicProject:true,
  communityAccess:"Community Access",
  isCommunityAccess:true,
  privateProject:"Unlimited Private Projects",
  isPrivateProjects:true,
  phone:"Dedicated Phone Support",
  isPhone:true,
  subdomain:"Free Sub Domains",
  isSubDomain:true,
  reports:"Monthly Status Report",
  isReports:false
},{
  plan:"Pro",
  price:"49",
  user:"Unlimited users",
  isUser:true,
  storage:"150GB Storage",
  isStorage:true,
  publicProject:"Unlimited Public Projects",
  isPublicProject:true,
  communityAccess:"Community Access",
  isCommunityAccess:true,
  privateProject:"Unlimited Private Projects",
  isPrivateProjects:true,
  phone:"Dedicated Phone Support",
  isPhone:true,
  subdomain:"Unlimited Free Sub Domains",
  isSubDomain:true,
  reports:"Monthly Status Report",
  isReports:true
}]
return <>
  <section className="pricing py-5">
    <div className="container">
    <div className="row">
      {
        data.map((e,i) => {
      return <PriceCard data={e} key={i} />
      })
      }
      </div>
      </div>
  </section>
</>
}

export default App;
