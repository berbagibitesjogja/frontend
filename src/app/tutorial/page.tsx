import { redirect } from "next/navigation";

export default function Page() {
  redirect(`https://youtube.com/shorts/74SzcukH8pQ`); // redirect ke halaman /target
  return null;
}
