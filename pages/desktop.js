import React, { useState } from 'react';

const Desktop = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [collegeName, setCollegeName] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCollegeNameChange = (e) => {
    setCollegeName(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-black font-space-grotesk">
      <div className="absolute top-[200px] left-[194px] text-5xl leading-[36px]">
        Let’s get you started
      </div>
      <div className="absolute top-[316px] left-[194px] w-[400px] h-[68px]">
        <div className="absolute top-[0px] left-[0px] leading-[24px]">
          Full name
        </div>
        <input
          className="font-space-grotesk text-xs bg-transparent absolute top-[28px] left-[0px] rounded shadow-[0px 2px 2px 2px rgba(204,204,204,0.1)] box-border w-full h-10 border-[1px] border-solid border-lightgray"
          type="text"
          value={fullName}
          placeholder="Himanshi Agrawal"
          onChange={handleFullNameChange}
          maxLength={255}
          minLength={1}
        />
      </div>
      <div className="absolute top-[408px] left-[194px] w-[400px] h-[68px]">
        <div className="absolute top-[0px] left-[0px] leading-[24px]">
          Email address
        </div>
        <input
          className="font-space-grotesk text-xs bg-transparent absolute top-[28px] left-[0px] rounded shadow-[0px 2px 2px 2px rgba(204,204,204,0.1)] box-border w-full h-10 border-[1px] border-solid border-lightgray"
          type="text"
          value={email}
          placeholder="yourname@email.com"
          onChange={handleEmailChange}
          maxLength={255}
          minLength={1}
        />
      </div>
      <div className="absolute top-[500px] left-[194px] w-[400px] h-[68px]">
        <div className="absolute top-[0px] left-[0px] leading-[24px]">
          Phone number
        </div>
        <input
          className="font-space-grotesk text-xs bg-transparent absolute top-[28px] left-[0px] rounded shadow-[0px 2px 2px 2px rgba(204,204,204,0.1)] box-border w-full h-10 border-[1px] border-solid border-lightgray"
          type="text"
          value={phoneNumber}
          placeholder="+91"
          onChange={handlePhoneNumberChange}
          maxLength={10}
          minLength={1}
        />
      </div>
      <div className="absolute top-[605px] left-[194px] w-[400px] h-[68px]">
        <div className="absolute top-[0px] left-[0px] leading-[24px]">
          College Name
        </div>
        <input
          className="bg-transparent absolute top-[28px] left-[0px] rounded shadow-[0px 2px 2px 2px rgba(204,204,204,0.1)] box-border w-full h-10 border-[1px] border-solid border-lightgray"
          type="text"
          value={collegeName}
          placeholder="Chandigarh University"
          onChange={handleCollegeNameChange}
          maxLength={255}
          minLength={1}
        />
      </div>
      <button
        className="cursor-pointer p-0 bg-darkslategray-200 absolute bottom-[200px] left-[15%] transform [-translate-x-1/2] rounded shadow-[0px 2px 2px 2px rgba(204,204,204,0.1)] box-border w-[400px] h-10 border-[1px] border-solid border-darkslategray-100"
        autoFocus
        style={{ zIndex: 1 }}
        onClick={() => {window.location.href = "/";
      }}
      >
        <b className="absolute top-[8px] left-[165px] text-base leading-[24px] font-space-grotesk text-white text-left">
          Submit
        </b>
      </button>
    </div>
  );
};

export default Desktop;
