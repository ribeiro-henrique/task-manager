import Image from "next/image";

function DayMarked({day}: {day: boolean | undefined}){

  return (
    <div className="flex items-center justify-center w-9 h-9">
      <Image src="/images/green.svg" width={10} height={10} alt='marquinha'/>
    </div>
  )
}

export default DayMarked;