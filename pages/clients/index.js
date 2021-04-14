import { useRouter } from "next/router";

export default function ClientsPage() {
  const router = useRouter()
  console.console.log(router.query);
  
  return (
   <div>
     <h1>
       The clients page
     </h1>
   </div>
  )
}