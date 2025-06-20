import React, { useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import emailjs from '@emailjs/browser'

const News = () => {
  const [email, setEmail] = useState('')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
      setStatusMessage('Please enter your email address.')
      return
    }

    if (!emailRegex.test(email)) {
      setStatusMessage('Please enter a valid email address.')
      return
    }

    const templateParams = {
      user_email: email,
    }

    emailjs
      .send('service_2po88dw', 'template_toayw2a', templateParams, 'aPqX4VKtufXs9NnRl')
      .then(
        (response) => {
          setStatusMessage('Thank you for subscribing!')
          setEmail('') // clear input after success
        },
        (error) => {
          setStatusMessage('Oops, something went wrong. Please try again.')
          console.error('EmailJS Error:', error)
        }
      )
  }

  return (
    <section id="newsletter" className="md:py-16 my-6 px-4 max-w-7xl mx-auto ">
      <div className="bg-violet-600 rounded-3xl overflow-hidden">
        <div className="relative md:px-16 px-6 py-16 md:py-24">
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-800 clip-path-slant hidden md:block"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <div className="text-white max-w-lg text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
                📩 Subscribe to Our Newsletter
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Stay updated with the latest trends in design, development, and digital marketing.
                We share valuable insights, news, case studies, and exclusive offers — all carefully
                selected and spam-free.
              </p>
            </div>

            {/* Email Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-auto"
              noValidate
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none  bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full transition-all duration-200 
           active:scale-95 hover:bg-violet-100 sm:w-auto cursor-pointer bg-white text-violet-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl transition-colors flex items-center justify-center sm:justify-start gap-2"
                >
                  <span>Discover</span>
                  <HiArrowRight className="w-5 h-5" />
                </button>
              </div>
              {statusMessage && (
                <p className="mt-2 text-white text-sm">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  )
}

export default News
