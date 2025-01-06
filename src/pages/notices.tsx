import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const AddNotice: React.FC = () => {
  const [noticeData, setNoticeData] = useState({
    title: "",
    description: "",
  });
  const [message, setMessage] = useState<string>("");
  const quillRef = useRef<Quill | null>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  const webAppUrl =
    "https://script.google.com/macros/s/AKfycbxwJ9WPzvlfxvV_1hlAEOu0se6nWykT1gSgmKlkRmITx5dZaMjiAHwtJokfvealsOc/exec"; // Replace with your actual Web App URL

  useEffect(() => {
    if (editorContainerRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorContainerRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
            [{ align: [] }],
          ],
        },
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNoticeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", noticeData.title);
    formData.append("description", quillRef.current?.root.innerHTML || "");
    formData.append("action", "submit");

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.status === "success") {
        setMessage("Notice added successfully!");
        setNoticeData({ title: "", description: "" });
        if (quillRef.current) quillRef.current.root.innerHTML = ""; // Reset editor
      } else {
        setMessage("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Notice </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={noticeData.title}
            onChange={handleInputChange}
            required
            className="border rounded px-2 py-1 w-full"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium">
            Description:
          </label>
          <div ref={editorContainerRef} className="h-40 border rounded"></div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {message && <p className="mt-4 text-green-500">{message}</p>}

    </div>
  );
};

export default AddNotice;
