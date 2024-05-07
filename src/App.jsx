import { useState } from "react"
import CryptoJS from "crypto-js"

const App = () => {
  const [input, setInput] = useState("")
  const [password, setPassword] = useState("")
  const [option, setOption] = useState("encrypt")
  const [value, setValue] = useState("")

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleRadio = (event) => {
    setOption(event.target.value)
  }

  const handleOutput = () => {
    if (option === "encrypt") {
      let ciphertext = CryptoJS.AES.encrypt(input, password).toString()
      setValue(ciphertext)
    }

    if (option === "decrypt") {
      let bytes = CryptoJS.AES.decrypt(input, password);
      let originalText = bytes.toString(CryptoJS.enc.Utf8);
      setValue(originalText);
    }
  }

  return (
    <main className="p-5 grid content-center h-screen">
      <h1>Text to be encrypted/decrypted</h1>
      <input type="text" className="border-black border-2 outline-none px-2 h-12 rounded-xl my-2" onChange={handleInput} />
      <h1>Password</h1>
      <input type="password" className="border-black border-2 outline-none px-2 h-12 rounded-xl my-2" onChange={handlePassword} />
      <br />
      <div className="flex gap-5 items-center my-5">
        <label htmlFor="enc">Encrypt</label>
        <input type="radio" name="enc" value="encrypt" onChange={handleRadio} checked={option === "encrypt"} />

        <label htmlFor="enc">Decrypt</label>
        <input type="radio" name="enc" value="decrypt" onChange={handleRadio} checked={option === "decrypt"} />
      </div>
      <h1>Output</h1>

      <input type="text" disabled placeholder="Your output will be displayed here" value={value} className="border-black border-2 outline-none px-2 h-12 rounded-xl my-2" />

      <button className="bg-red-500 h-12 rounded-full font-semibold text-white my-5" onClick={handleOutput}>Output</button>
    </main>
  )
}

export default App