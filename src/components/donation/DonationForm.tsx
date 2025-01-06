import React, { useState } from "react";

interface DonationFormData {
  amount: string;
  fullName: string;
  email: string;
}

const DonationForm: React.FC = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    amount: "",
    fullName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">

      <div className="mt-6">
        <h4 className="text-lg text-center font-bold text-green-700 mb-4">
          Bank Transfer Details
        </h4>
        <p className="text-gray-600">
          Please use the following bank details to make your donation:
        </p>
        <ul className="mt-2 font-semibold text-gray-700">
          <li>Bank Name: NIC ASIA Bank Limited</li>
          <li>Account Number: 123456789778655</li>
          <li>Swift Code: NICENPKA</li>
          <li>Account Holder: Nepal Ram Gram Foundation</li>
        </ul>
        <p className="text-sm text-gray-500 mt-4">
          After completing the transfer, email your receipt to{" "}
          <a
            href="mailto:nepalramgram@gmail.com"
            className="text-blue-500 underline"
          >
            nepalramgram@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default DonationForm;
