import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PiPaintBrushBroadDuotone } from "react-icons/pi";

export default function Hero() {
  return (
    <div className="mx-auto flex w-[90%] items-center justify-center lg:mb-[100px] lg:h-[calc(100dvh-200px)]">
        <div>
            <Link href="/">
                <Image src="/herologo.png" width={900} height={430} alt="" />
            </Link>
            <p className="text-center p-10 mb-[15px] hidden font-bold text-[20px] lg:block">
                あのコラージュアートはどんなところから持ってきたんだろう？ <br />
                そんな疑問を解決するコラージュアートの素材投稿サイトです。
            </p>
            <div className="flex justify-center">
                <Button type="button" className="mx-auto h-[60px] w-[200px] font-bold flex justify-center">はじめる</Button>
                <Button className="mx-auto h-[60px] w-[200px] font-bold">自分の作品を見る</Button>
            </div>
        </div>
    </div>
  )
}
