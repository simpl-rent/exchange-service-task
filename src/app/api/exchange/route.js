import { NextResponse } from "next/server";

const getApiEndpoint = (currency) => {
  return `http://api.nbp.pl/api/exchangerates/rates/a/${currency.toLowerCase()}/?format=json`
}

export async function POST(request) {
  const data = await request.json()

  const response = await fetch(getApiEndpoint(data.currency))
  const { rates } = await response.json()

  const { mid } = rates[0]

  return NextResponse.json({ data: (data.amount / mid).toFixed(2) });
}
