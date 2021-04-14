import { useRouter } from "next/router";

export default function ClientsPage() {
  const router = useRouter()
  console.console.log(router.query);

  return (
    <div>
      <hl>
        The projects of a Given Client
      </hl>
    </div>
  )
}