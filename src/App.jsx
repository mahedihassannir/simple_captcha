import { useEffect, useRef } from 'react';
import { useState } from 'react';

// here is teh captcha system imports

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

// here is teh captcha system imports ends



const App = () => {

  const CaptchaRef = useRef()


  const handleLogin = (e) => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const password = form.password.value

    console.log(email, password);


  }



  const [Disable, SetDisable] = useState(true)

  const handleValidateCaptcha = () => {

    const user_captcha_value = CaptchaRef.current.value

    if (validateCaptcha(user_captcha_value)) {
      SetDisable(false)
    }
    else {
      SetDisable(true)
    }


  }

  useEffect(() => {

    loadCaptchaEnginge(6);

  }, [])


  return (
    <div className="flex items-center justify-center h-screen">


      <form onSubmit={handleLogin} className="bg-white w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-400">
        <h2 className="text-2xl mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="Enter your username"
            name="email"
          />

        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <div className='mt-10'>


            <LoadCanvasTemplate />
            <button onClick={handleValidateCaptcha} className='btn btn-xs'>
              validate
            </button>

          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            validate
          </label>
          <input

            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="validate"
            ref={CaptchaRef}
            type="text"
            placeholder="validate"
            name="validate"
          />

        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={Disable}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>



        </div>
      </form>

    </div>
  );
};

export default App;