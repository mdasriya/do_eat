

// import { motion } from "framer-motion";
// import React, { useState } from "react";

// const Contact = () => {
//   const text = "Say Hello";
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <motion.div
//       className="h-full flex justify-center"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 m-24">

//         <div className="h-1/2 lg:h-full lg:w-full flex flex-row items-center justify-center text-2xl lg:text-5xl xl:text-5xl">
//           <div>
//             {text.split("").map((letter, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: 0 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   delay: index * 0.1,
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//             😊
//           </div>
//         </div>

// {/* form container */}
//         <div className="flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 border-2 border-white rounded-xl">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-start text-2xl font-extrabold text-gray-900">
//             Contact Us
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <input type="hidden" name="remember" value="true" />
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="name" className="sr-only">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 autoComplete="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Name"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="message" className="sr-only">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-2 h-24 rounded border border-black bg-transparent text-gray-800"
//               placeholder="Message"
//             ></textarea>
//           </div>

//           <div>
//           <motion.button
//                   type="button"
//                   onClick={handleSubmit}
//                   className=" py-2 px-4 bg-purple-200 rounded font-semibold text-gray-600 hover:bg-purple-300"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   Submit
//                 </motion.button>
//           </div>
//         </form>
//       </div>
//     </div>



//              </div>
//     </motion.div>
//   );
// };

// export default Contact; 


import { motion } from "framer-motion";
import React, { useState } from "react";

const Contact = () => {
  const text = "Say Hello";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };


  return (
    <motion.div
      className="h-full flex justify-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 m-24">

        <div className="h-1/2 lg:h-full lg:w-full flex items-center justify-center text-6xl lg:mb-0">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

{/* form container */}
        <div className="flex items-center justify-center bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 border-2 border-white rounded-xl">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-start text-2xl font-extrabold text-gray-900">
            Contact Us
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 h-24 rounded border border-black bg-transparent text-gray-800"
              placeholder="Message"
            ></textarea>
          </div>

          <div>
          <motion.button
                  type="button"
                  onClick={handleSubmit}
                  className=" py-2 px-4 bg-purple-200 rounded font-semibold text-gray-600 hover:bg-purple-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  Submit
                </motion.button>
          </div>
        </form>
      </div>
    </div>



             </div>
    </motion.div>
  );
};

export default Contact; 