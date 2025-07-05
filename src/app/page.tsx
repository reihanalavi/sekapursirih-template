import Image from "next/image";
import AleivaFlowable from "../components/templates/AleivaFlowable";
import { CoverProvider } from "@/context/CoverContext";
import { AudioProvider } from "@/context/AudioContext";

export default function Home() {
  return (
    <p>Open templates in : /templates/(template-name)</p>
  );
}
