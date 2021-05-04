import { useRouter } from "next/router";
import Link from 'next/link'

export default function ClientsPage() {
  const router = useRouter()
  console.log(router.query);

  const clients = [
    {id: 'max', name: 'Maxmillian'},
    {id: 'manuel', name: 'manuel'}
  ]
  
  return (
   <div>
     <h1>
       The clients page
     </h1>
     <ul>
       {clients.map(client => (
       <li key={client.id}>
         <Link href={`/clients/${client.id}`}>{client.name}</Link>
         </li>))}
       </ul>
   </div>
  )
}