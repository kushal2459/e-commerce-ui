import React, { useState } from "react"; // Importing icons
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid"; // Importing icons

const FAQ = () => {
  const faqData = [
    {
      id: "1",
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "2",
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: "3",
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      id: "4",
      question: "Where can I get some?",
      answer: "There are many variations of passages of Lorem Ipsum available.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const isAccordionOpen = (id) => {
    return activeId === id;
  };

  return (
    <div className="container mx-auto">
      <div className="flex gap-10 mt-8">
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum placeat nulla veritatis reiciendis, omnis ipsam excepturi tempore ullam esse iusto facilis cupiditate, fugit nisi harum? Illum, officia unde. Nesciunt.</p>
          <button className="bg-blue-500 text-white rounded-md text-lg font-medium my-2 py-2 px-5">Ask a question</button>
        </div>
        <div className="w-1/2">
          {faqData.map((item) => (
            <div key={item.id} className="mb-4">
              <div className="flex items-center justify-between">
                <button
                  className="question-btn w-full text-left font-semibold py-2 px-4 rounded"
                  onClick={() => toggleAccordion(item.id)}
                >
                  {item.question}
                </button>
                {isAccordionOpen(item.id) ? (
                  <ChevronDownIcon className="h-5 w-5 transition duration-1000" />
                ) : (
                  <ChevronUpIcon className="h-5 w-5 transition duration-1000" />
                )}
              </div>
              <p
                className={`${
                  isAccordionOpen(item.id) ? "block" : "hidden"
                } answer bg-gray-100 p-4 transition duration-1000`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
