import DayMarked from "@/components/DayMarked";
import Image from "next/image";

export default function Home() {

  const habits = {
    'Estudar': {
      '2023-08-01': true,
      '2023-07-31': false,
      '2023-07-30': false,
    },
    'Academia': {
      '2023-08-01': false,
      '2023-07-31': false,
      '2023-07-30': true,
    }
  };

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16">
  {
    habits === null || Object.keys(habits).length === 0 ? (
      <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
        Você não tem Tarefas cadastradas!
      </h1>
    ) : (
      Object.entries(habits).map(([habit, sequence]) => (
        <div key={habit}>
          <div className="flex justify-between items-center">
            <span className="text-xl font-light text-white font-sans">{habit}</span>
            <button>
              <Image src='/images/deleteIcon.svg' width={20} height={20} alt='lixeira'/>
            </button>
          </div>
          <section className="flex flex-grow bg-neutral-800 rounded-md p-2">
            {
              daysOfWeek.map((dia) => (
                <div key={dia} className='flex flex-col items-center flex-grow'>
                  <span className="font-sans text-xs text-white">
                    {dia}
                  </span>
                  <DayMarked day={undefined}/>
                </div>
              ))
            }
          </section>
        </div>
      ))
    )
  }
</main>
  )
}
