import Question from "./Question";
import Question2 from "./Question2";
import "./Faq.css";
import { useState, useEffect } from "react";

const Faq = () => {
  const [email2, setEmail2] = useState("");

  function handleChange(e) {
    setEmail2(e.target.value);
  }

  // useEffect((e){
  //   e.preventDefault();
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });

  return (
    <div className="min-h-[98vh] w-full flex flex-col items-center justify-evenly border-b-[8px] border-b-[#222] bg-[#000] quest-holder">
      <h1 className="text-[#fff] text-[3.125rem] text-center font-medium leading-[4rem] mb-[1.5rem]">
        Frequently Asked Questions
      </h1>
      <div className="min-h-[53.5vh] w-[44.5%] flex flex-col sub-quest-holder">
        <Question2
          id="1"
          question="What is Banjoflix?"
          answer1="Banjoflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
          answer2="You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        />

        <Question
          id="2"
          question="How much does Banjoflix cost?"
          answer="Watch Banjoflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$3.99 to US$11.99 a month. No extra costs, no contracts."
        />

        <Question2
          id="3"
          question="Where can I watch?"
          answer1="Watch anywhere, anytime. Sign in with your Banjoflix account to watch instantly on the web at banjoflix.com from your personal computer or on any internet-connected device that offers the Banjoflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          answer2="You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Banjoflix with you anywhere."
        />

        <Question
          id="4"
          question="How do I cancel?"
          answer="Banjoflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        />

        <Question
          id="5"
          question="What can I watch on Banjoflix"
          answer="Banjoflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Banjoflix originals, and more. Watch as much as you want, anytime you want."
        />

        <Question2
          id="6"
          question="Is Banjoflix good for kids?"
          answer1="The Banjoflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
          answer2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
        />
      </div>
      <div className="h-[16vh] w-[44.5%] flex flex-col justify-around form-2">
        <h3 className="text-[1.2rem] text-center text-[#fff] mt-[1rem] email-descr">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form className="h-[75%] w-full flex items-center justify-center text-[#fff] real-form">
          <input
            onChange={handleChange}
            className="h-[62%] w-[66%] text-[#000] placeholder:text-[#8c8c8c] border-[1px] border-[#8c8c8c] indent-2 outline-none"
            placeholder="Email address"
            value={email2}
          ></input>
          <button className="h-[62%] w-[25%] bg-[#f40612]">
            <span className="text-[1.8rem]">Get Started</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Faq;
