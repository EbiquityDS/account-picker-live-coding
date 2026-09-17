export async function fetchAccounts() {
  const response = await fetch('/api/accounts')
  if (!response.ok) {
    throw new Error('Failed to load accounts')
  }
  return response.json()
}
