import { redirect } from "next/navigation";

export default function Page() {
  redirect(`https://berbagibitesjogja.com/app`); // redirect ke halaman /target
  return null;
}
