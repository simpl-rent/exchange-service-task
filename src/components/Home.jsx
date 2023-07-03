"use client";

import { useEffect, useState } from "react";

const api = 'https://kopecms-cuddly-adventure-pjg6p7q69qwcrpgp-3000.preview.app.github.dev'

export default function Home() {
  const [curriencies, setCurriencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [amount, setAmount] = useState(0)
  const [output, setOutput] = useState(0)

  useEffect(() => {
    (async () => {
      const response = await fetch(api + '/api/currencies')
      const { data } = await response.json()
      setCurriencies(data)
    })()
  }, [])

  const submit = async (e) => {
    e.preventDefault()

    const response = await fetch(api + '/api/exchange', { method: 'POST', body: JSON.stringify({ currency: selectedCurrency, amount }) })
    const { data } = await response.json()
    setOutput(data)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-3 text-lg font-bold">Exchange Panel</h1>
      <form onSubmit={submit} className="flex flex-col mb-6">
        <label>Amount in PLN</label>
        <input className="mt-1 py-2 px-4 rounded" onChange={(e) => setAmount(e.target.value)} />
        <select className="mt-2 py-2 px-4 rounded" onChange={e => setSelectedCurrency(e.target.value)}>
          {curriencies.map((currency, index) => <option key={index}>{currency}</option>)}
        </select>
        <button
          type="submit"
          className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Calculate
        </button>
        <label className="mt-4">Result</label>
        <input className="mt-1 py-2 px-4 rounded" defaultValue={0} value={output} />
      </form>
    </main>
  );
}
