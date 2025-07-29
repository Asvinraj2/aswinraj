import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import Swal from 'sweetalert2';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [result, setResult] = useState("");

  const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
      setSuccessMsg("");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      setSuccessMsg("");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
      setSuccessMsg("");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
      setSuccessMsg("");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
      setSuccessMsg("");
    } else if (message === "") {
      setErrMsg("Message is required!");
      setSuccessMsg("");
    } else {
      // If all validations pass, proceed with Web3Forms submission
      onSubmit(e);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setErrMsg("");
    setSuccessMsg("");

    const formData = new FormData();
    formData.append("name", username);
    formData.append("email", email);
    formData.append("phone", phoneNumber);
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("access_key", "011963cb-1798-479b-8a83-a1d520e48f01");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        setSuccessMsg(`Thank you dear ${username}, Your message has been sent successfully!`);
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
        setResult("");
      } else {
        // Handle specific error messages
        let errorMessage = "Something went wrong!";

        if (data.message && data.message.includes("spam")) {
          errorMessage = "Sorry, This message has been marked as spam by our server. Contact support if the issue persist.";
        } else if (data.message) {
          errorMessage = data.message;
        }

        Swal.fire({
          title: "Error!",
          text: errorMessage,
          icon: "error",
        });

        // Also show inline error message
        setErrMsg(errorMessage);
        setSuccessMsg("");
        setResult("");
      }
    } catch (error) {
      const networkError = "Failed to send. Please check your internet connection and try again.";

      Swal.fire({
        title: "Error!",
        text: networkError,
        icon: "error",
      });

      // Also show inline error message
      setErrMsg(networkError);
      setSuccessMsg("");
      setResult("");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-10 sm:py-16 md:py-20 border-b border-b-black px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-[var(--color-design)] flex justify-center items-center text-center mb-8 sm:mb-12 lg:mb-16">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col xl:flex-row justify-between gap-6 sm:gap-8 lg:gap-10">
            <ContactLeft />

            {/* Contact Form Section */}
            <div className="w-full xl:w-[60%] h-full py-6 sm:py-8 lg:py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg shadow-gray-600/30">

              {/* Error message on top with bounce animation */}
              {errMsg && (
                <div className="text-center text-sm sm:text-base text-orange-500 bg-[#1a1d20] px-4 py-2 rounded-md shadow-md shadow-gray-400/30 animate-bounce">
                  {errMsg}
                </div>
              )}

              {/* Success message with bounce animation */}
              {successMsg && (
                <div className="text-center text-sm sm:text-base text-green-400 bg-[#1a1d20] px-4 py-2 rounded-md shadow-md shadow-green-500/30 animate-bounce">
                  {successMsg}
                </div>
              )}

              <form onSubmit={handleSend} className="w-full flex flex-col gap-4 sm:gap-5 lg:gap-6 py-2 sm:py-3 lg:py-5">

                {/* Name & Phone Row */}
                <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
                  {/* Name */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4">
                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className={`contactInput w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#191b1e] border ${errMsg === "Username is required!"
                          ? "border-red-500 shadow-md shadow-red-500/50"
                          : "border-gray-600"
                        } rounded-md text-white text-sm sm:text-base focus:outline-none focus:border-red-500 focus:shadow-lg focus:shadow-[#1a1d20]/50 transition-all duration-300`}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4">
                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                    <input
                      name="phone"
                      type="text"
                      placeholder="Enter your Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className={`contactInput w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#191b1e] border ${errMsg === "Phone number is required!"
                          ? "border-red-500 shadow-md shadow-red-500/50"
                          : "border-gray-600"
                        } rounded-md text-white text-sm sm:text-base focus:outline-none focus:border-red-500 focus:shadow-lg focus:shadow-[#1a1d20]/50 transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Email</p>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`contactInput w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#191b1e] border ${errMsg === "Please give your Email!" || errMsg === "Give a valid Email!"
                        ? "border-red-500 shadow-md shadow-red-500/50"
                        : "border-gray-600"
                      } rounded-md text-white text-sm sm:text-base focus:outline-none focus:border-red-500 focus:shadow-lg focus:shadow-[#1a1d20]/50 transition-all duration-300`}
                    required
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Enter Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`contactInput w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#191b1e] border ${errMsg === "Please give your Subject!"
                        ? "border-red-500 shadow-md shadow-red-500/50"
                        : "border-gray-600"
                      } rounded-md text-white text-sm sm:text-base focus:outline-none focus:border-red-500 focus:shadow-lg focus:shadow-[#1a1d20]/50 transition-all duration-300`}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Message</p>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`contactTextArea w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#191b1e] border ${errMsg === "Message is required!"
                        ? "border-red-500 shadow-md shadow-red-500/50"
                        : "border-gray-600"
                      } rounded-md text-white text-sm sm:text-base focus:outline-none focus:border-red-500 focus:shadow-lg focus:shadow-[#1a1d20]/50 transition-all duration-300 resize-none`}
                    cols="30"
                    rows="6"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="w-full">
                  <button
                    type="submit"
                    disabled={result === "Sending..."}
                    className="w-full h-10 sm:h-12 bg-[#141518] rounded-lg text-sm sm:text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border hover:border-[var(--color-design)] border border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {result || "Send Message"}
                  </button>
                </div>

                {/* Error message below button with bounce animation */}
                {errMsg && (
                  <div className="text-center text-sm sm:text-base text-orange-500 bg-[#1a1d20] px-4 py-2 rounded-md shadow-md shadow-gray-400/30 animate-bounce">
                    {errMsg}
                  </div>
                )}

                {/* Success message below button with bounce animation */}
                {successMsg && (
                  <div className="text-center text-sm sm:text-base text-green-400 bg-[#1a1d20] px-4 py-2 rounded-md shadow-md shadow-green-500/30 animate-bounce">
                    {successMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

