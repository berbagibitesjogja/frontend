import { redirect } from "next/navigation";

export default function Page() {
  redirect(`https://berbagibitesjogja.com/app/login`); // redirect ke halaman /target
  return null;
}
