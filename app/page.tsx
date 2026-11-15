import SpendingCategoryCard from "@/components/ui/SpendingCard";
const months = [
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

const categorySpendeng = [
  {
    name: 'Food',
    limit: 16000,
    spended: 12400
  },
  {
    name: 'Housing',
    limit: 12000,
    spended: 9800
  },
  
  {
    name: 'Transport',
    limit: 12000,
    spended: 9800
  },
  {
    name: 'Leisure',
    limit: 8000,
    spended: 8450
  },
  
]


export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center max-w-360 m-auto w-full ">
          <section className="max-w-125 flex flex-col items-center justify-center gap-8 mt-20">
            <span className="py-1 px-7 border border-card-border text-text-secondary rounded-full">Income, expenses and goals in one place</span>
            <h1 className="text-text-primary text-center w-100 text-5xl  sm:text-6xl sm:w-120 lg:text-7xl  lg:w-130 font-bold">
              Your money, 
              under <span className="text-light-primary">control.</span>
            </h1>
            <p className="text-text-secondary w-78 sm:w-85 md:w-90 text-center sm:text-xl">
              Log every transaction, set budgets and see
              what's left before the month ends.
            </p>
            <div className="gap-5 flex ">
              <button className="rounded-3xl px-7 font-semibold py-2 bg-primary text-text-primary ">
                Get started
              </button>
               <button className="rounded-3xl px-7 font-semibold py-2 border border-card-border  text-text-primary ">
                View demo
              </button>
            </div>
          </section>

          <section className="bg-card-border/30 my-10 flex w-full p-5 rounded-2xl border border-card-border">
          <div className="flex flex-col gap-5 w-full ">
            <div className="flex gap-7 w-195">
              <article className="border bg-background h-fit w-fit border-card-border rounded-2xl px-9.5 py-2 flex flex-col">
                <span className="text-text-secondary">Balance</span>
                <span className="text-white font-bold text-3xl">RD$ 48,250</span>
              </article>

              <article className="border bg-background h-fit w-fit border-card-border rounded-2xl px-9.5 py-2 flex flex-col">
                <span className="text-text-secondary">Income</span>
                <span className="text-light-secondary font-bold text-3xl">RD$ 85,00</span>
              </article>

              <article className="border bg-background w-fit h-fit border-card-border rounded-2xl px-9.5 py-2  flex flex-col">
                <span className="text-text-secondary">Expenses</span>
                <span className="text-alert font-bold text-3xl">RD$ 36,750</span>
              </article>
            </div>


            <div className="border-card-border border rounded-2xl bg-background w-190 flex-col flex gap-10 p-4">
              <p className="text-text-secondary">Income vs expenses · last 6 months</p>

              <article className="relative  h-50 flex gap-2">
                <div className="flex gap-2 absolute bottom ">
                  <div className="flex gap-1 justify-center w-25 items-end">
                  <div className="w-5 h-40  bg-light-secondary rounded"></div>
                  <div className="w-5 h-30  bg-alert rounded"></div>
                </div>
                <div className="flex gap-1 justify-center items-end w-25 ">
                  <div className="w-5 h-40  bg-light-secondary rounded"></div>
                  <div className="w-5 h-30  bg-alert rounded"></div>
                </div>
                <div className="flex gap-1 justify-center w-25 items-end">
                  <div className="w-5 h-40  bg-light-secondary rounded"></div>
                  <div className="w-5 h-30  bg-alert rounded"></div>
                </div>
                <div className="flex gap-1 justify-center w-25 items-end">
                  <div className="w-5 h-40  bg-light-secondary rounded"></div>
                  <div className="w-5 h-30  bg-alert rounded"></div>
                </div>
                <div className="flex gap-1 justify-center w-25 items-end">
                  <div className="w-5 h-40  bg-light-secondary rounded"></div>
                  <div className="w-5 h-30  bg-alert rounded"></div>
                </div>
                <div className="flex gap-1 justify-center w-25 items-end">
                  <div className="w-5 h-40  bg-light-secondary rounded"></div>
                  <div className="w-5 h-30  bg-alert rounded"></div>
                </div><div className="flex gap-1 justify-center w-25 items-end">
                  <div className="w-5 h-40  bg-light-secondary rounded"></div>
                  <div className="w-5 h-30  bg-alert rounded"></div>
                </div>
                
                </div>
                <div className="flex absolute bottom-2 gap-2">
                  {months.map((month, index)=> <span key={index} className="w-25 text-center">{month}</span> ) }
                </div>
              </article>
            </div>
          </div>
            <section className="border border-card-border w-full  rounded-2xl bg-background p-4">
              <h2 className="text-text-secondary">Spending by category</h2>
              <div className="flex flex-col gap-10">
              {categorySpendeng.map(e=> 
            <SpendingCategoryCard 
               limit={e.limit} 
               category={e.name} 
               spended={e.spended}
               key={e.name}
               />)}
              </div>
            </section>
          </section>
      </main>
  );
}
