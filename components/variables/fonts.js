import { Poppins } from "next/font/google";


export const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});