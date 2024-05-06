import { useState } from "react"
import CryptoJS from "crypto-js"

const App = () => {
  const [input, setInput] = useState("")
  const [password, setPassword] = useState("")
  const [option, setOption] = useState("encrypt")

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleRadio = (event) => {
    setOption(event.target.value)
    console.log(event.target.value)
  }

  const handleOutput = () => {
    if (option === "encrypt") {
      let ciphertext = CryptoJS.AES.encrypt(input, password).toString()
      console.log(ciphertext)
    }

    if (option === "decrypt") {
      // Decrypt
      var bytes = CryptoJS.AES.decrypt(input, password);
      var originalText = bytes.toString(CryptoJS.enc.Utf8);

      console.log(originalText);
    }
  }

  return (
    <main className="p-5">
      <h1>Text to be encrypted</h1>
      <input type="text" className="border-black border-2 outline-none" onChange={handleInput} />
      <h1>Password</h1>
      <input type="password" className="border-black border-2 outline-none" onChange={handlePassword} />
      <br />
      <label htmlFor="enc">Encrypt</label>
      <input type="radio" name="enc" value="encrypt" onChange={handleRadio} checked={option === "encrypt"} />
      <label htmlFor="enc">Decrypt</label>
      <input type="radio" name="enc" value="decrypt" onChange={handleRadio} checked={option === "decrypt"} />
      <h1>Output</h1>
      <input type="text" disabled placeholder="check console 😒" className="border-black border-2 outline-none" />

      <button onClick={handleOutput}>find</button>
    </main>
  )
}

export default App