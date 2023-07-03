"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-3 text-lg font-bold">Exchange Panel</h1>
      <form className="flex flex-col mb-6">
        <label>Amount in PLN</label>
        <input className="mt-1 py-2 px-4 rounded" />
        <select className="mt-2 py-2 px-4 rounded">
          <option>EUR</option>
          <option>USD</option>
        </select>
        <button
          type="submit"
          className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Calculate
        </button>
        <label className="mt-4">Result</label>
        <input className="mt-1 py-2 px-4 rounded" />
      </form>
    </main>
  );
}
