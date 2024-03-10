import Charts from "./charts/Charts";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <main className="w-full h-screen flex flex-row relative">
      <Navigation />

      <div className="flex flex-col p-10 ml-20 w-3/4 gap-5">
        <h1 className="text-4xl text-neutral-200">Data Insights</h1>

        <input
          placeholder="Enter something and press Enter..."
          type="text"
          className="px-3 py-2 tracking-wide rounded-lg bg-neutral-600/40 text-neutral-100"
        />
        <div
          id="result"
          className="w-full h-600 border border-neutral-500/50 bg-neutral-800/20 rounded"
        >
          <Charts></Charts>
        </div>
      </div>
    </main>
  );
};

export default App;
