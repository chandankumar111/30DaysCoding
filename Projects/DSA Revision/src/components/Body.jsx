import React from "react";

const Body = () => {
  return (
    <div className="container">
      <section className="hero-section flex">
          <div className="flex-1 mx-36 my-20">
            <h1 className="font-bold text-4xl text-gray-800 m-4 leading-normal">
              Best way to revise for your next coding interview
            </h1>
            <p className="text-xl text-gray-700 m-4 leading-normal w-full ">
              Get everything in a single guide: Data structures, algorithms,
              patterns, visualizers, questions, examples, solutions,
              explanations, and much more!
            </p>
            <button className="bg-orange-600 w-full block text-white font-bold rounded-full m-4 p-4 leading-normal">
              Buy Free Through
            </button>
              <div className="w-full h-32 bg-pink-100 border-l-2 border-orange-700 slider flex-col">
                <p className="text-justify mx-4 italic p-4 ">
                  "Awesome! Love how the concepts are explained + all the
                  wonderful resources mentioned. Having everything in one guide
                  is super helpful."
                </p>
              <ol className="list-disc flex m-4 justify-center">
                <li className="m-2"></li>
                <li className="m-2"></li>
                <li className="m-2"></li>
              </ol>
              </div>
          </div>
          <div className="flex relative sm:flex-col">
            <div className="flex-1 md:flex-col sm:flex-col" >
              <img
                className="h-screen w-full"
                src="./public/assets/images/dsa-main.png"
                alt=""
              />
            </div>
            <div className="new-book bg-green-500 h-[150px] w-[150px] rounded-full absolute ml-96 -mt-6">
              <h1 className="font-bold text-3xl mt-10 text-white text-center">
                New Release
              </h1>
            </div>
          </div>
      </section>
      <section className="SecondPart">
        <div className="Header">
          <h1 className="font-bold text-6xl text-center m-5">
            What's Included
          </h1>
        </div>
        <div className="container m-4 flex my-10 items-center">
          <div className="content flex-1 order-2 m-8">
            <ol className="list-image-[url(./public/assets/images/tick.png)] m-2 text-2xl text-gray-500">
              <li className="leading-normal">15+ algo patterns discussed</li>
              <li className="leading-normal">
                Detailed solutions and explanations
              </li>
              <li className="leading-normal">
                Awesome resources, articles, blogs
              </li>
              <li className="leading-normal">
                Visualizers and animations included
              </li>
              <li className="leading-normal">100 pages of quality content</li>
              <li className="leading-normal">
                Concepts explained for beginners
              </li>
              <li className="leading-normal">All in one revision guide</li>
            </ol>
            <button className="bg-orange-600 block text-white font-bold rounded-full my-8 py-4 px-20 leading-normal">
              Download For Free
            </button>
          </div>
          <div className="Image flex-1 order-1 mx-20 mb-4">
            <img
              className="h-screen w-screen"
              src="./public/assets/images/dsa-2.png"
              alt="Containts"
            />
          </div>
        </div>
      </section>
      <section className="Testimonial flex flex-wrap justify-center mb-5">
        <div className="testicards border-gray-200 border-2 mx-2 w-2/5 px-2 mb-10 py-8">
          <p className="discription text-gray-500 text-xl text-justify mx-4">
            “Walling helps us visually organise ideas and tasks, work
            collaboratively and efficiently within our team. The visual
            experience makes it so easy to plan content and stay on track with
            our projects and campaigns.”
          </p>
          <div className="author flex mt-4">
            <img className="h-20" src="./public/assets/images/profiles/profile-1.png" alt="Profile1" />
            <div className="authorcolms my-4 mx-2">
              <p className="AuthorName font-bold text-blue-600">Chandan Kumar</p>
              <p className="post font-bold text-gray-500">Head of Department</p>
            </div>
          </div>
        </div>
        <div className="testicards border-gray-200 border-2 mx-2 w-2/5 mb-10 px-2 py-8">
          <p className="discription text-gray-500 text-xl text-justify mx-4">
            “Walling helps us visually organise ideas and tasks, work
            collaboratively and efficiently within our team. The visual
            experience makes it so easy to plan content and stay on track with
            our projects and campaigns.”
          </p>
          <div className="author flex mt-4">
            <img className="h-20" src="./public/assets/images/profiles/profile-1.png" alt="Profile1" />
            <div className="authorcolms my-4 mx-2">
              <p className="AuthorName font-bold text-blue-600">Chandan Kumar</p>
              <p className="post font-bold text-gray-500">Head of Department</p>
            </div>
          </div>
        </div>
        <div className="testicards border-gray-200 border-2 mx-2 w-2/5 mb-10 px-2 py-8">
          <p className="discription text-gray-500 text-xl text-justify mx-4">
            “Walling helps us visually organise ideas and tasks, work
            collaboratively and efficiently within our team. The visual
            experience makes it so easy to plan content and stay on track with
            our projects and campaigns.”
          </p>
          <div className="author flex mt-4">
            <img className="h-20" src="./public/assets/images/profiles/profile-1.png" alt="Profile1" />
            <div className="authorcolms my-4 mx-2">
              <p className="AuthorName font-bold text-blue-600">Chandan Kumar</p>
              <p className="post font-bold text-gray-500">Head of Department</p>
            </div>
          </div>
        </div>
        <div className="testicards border-gray-200 border-2 mx-2 w-2/5 mb-10 px-2 py-8">
          <p className="discription text-gray-500 text-xl text-justify mx-4">
            “Walling helps us visually organise ideas and tasks, work
            collaboratively and efficiently within our team. The visual
            experience makes it so easy to plan content and stay on track with
            our projects and campaigns.”
          </p>
          <div className="author flex mt-4">
            <img className="h-20" src="./public/assets/images/profiles/profile-1.png" alt="Profile1" />
            <div className="authorcolms my-4 mx-2">
              <p className="AuthorName font-bold text-blue-600">Chandan Kumar</p>
              <p className="post font-bold text-gray-500">Head of Department</p>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Body;
