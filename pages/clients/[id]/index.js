import { useRouter } from "next/router";

export default function ClientsPage() {
  const router = useRouter()
  console.log(router.query);

  const loadProjectHandle = () => {
    //load data...
    router.push('/clients/max/project-a')
    //router.replace('/clients/max/project-a')
    
    // router.push({pathname: '/clients/[id]/[clientProjectId]',
    // query: {id: 'max', clientProjectId: 'project-a'}})
  }

  return (
    <div>
      <hl>
        The projects of a Given Client
      </hl>
      <button onClick={loadProjectHandle}>Load project A</button>
    </div>
  )
}