const App = () => {
  return (
    <main className="p-5">
      <h1>Text to be encrypted</h1>
      <input type="text" className="border-black border-2 outline-none" />
      <h1>Password</h1>
      <input type="password" className="border-black border-2 outline-none" />
      <br />
      <label htmlFor="enc">Encrypt</label>
      <input type="radio" name="enc" />
      <label htmlFor="enc">Decrypt</label>
      <input type="radio" name="enc" />
      <h1>Output</h1>
      <input type="text" disabled className="border-black border-2 outline-none" />
    </main>
  )
}

export default App