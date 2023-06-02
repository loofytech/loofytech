import { useState } from "react";
import Image from "next/image";
import { toastSuccess } from "@/plugins/toast";
import { validEmail, validText } from "@/utils/validations";
import { NextSeo } from "next-seo";

export default function Home() {
  const [send, setSend] = useState<boolean>(false);
  const [stepSend, setStepSend] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [validation, setValidation] = useState<any>({
    name: false,
    email: false,
    phone: true,
    message: false
  });

  const handleSendMessage = async () => {
    setSend(true);
    try {
      const http = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message
        })
      });
      const data = await http.json();

      toastSuccess(data.message);
      setStepSend(1);
      setSend(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setTimeout(() => {
        setStepSend(0);
      }, 3000);
    } catch (error) {
      setSend(false);
      console.log(error);
    }
  }

  const handleName = (evt: any) => {
    const ems = validText(evt.target.value);
    if (ems) {
      setValidation({...validation, name: true});
      setName(evt.target.value);
    } else {
      setValidation({...validation, name: false});
      evt.preventDefault();
    }
    if (evt.target.value == "") {
      setValidation({...validation, name: false});
    }
  }

  const handleEmail = (evt: any) => {
    const ems = validEmail(evt.target.value);
    if (ems) {
      setValidation({...validation, email: true});
    } else {
      setValidation({...validation, email: false});
    }
    if (evt.target.value == "") {
      setValidation({...validation, email: false});
    }
    setEmail(evt.target.value);
  }

  const handleMessage = (evt: any) => {
    const ems = validText(evt.target.value);
    if (ems) {
      setValidation({...validation, message: true});
      setMessage(evt.target.value);
    } else {
      evt.preventDefault();
    }
    if (evt.target.value == "") {
      setValidation({...validation, message: false});
    }
  }

  return <>
    <NextSeo
      title="Loofytech | Providing Industry Leading Solutions for"
      description="Together we create a system that supports the productivity of your company's employees"
      canonical="https://loofytech.com/"
      openGraph={{
        title: "Loofytech | Providing Industry Leading Solutions for",
        description: "Together we create a system that supports the productivity of your company's employees",
        url: "https://loofytech.com/",
        images: [
          {url: "https://loofytech.com/images/heading.png"}
        ],
        siteName: "Loofytech | Providing Industry Leading Solutions for"
      }}
      additionalMetaTags={[{
        property: "keywords",
        content: "consultant it, system management, freelancer, group it, individual it, system integrations"
      }, {
        name: "application-name",
        content: "Loofytech | Providing Industry Leading Solutions for"
      }, {
        httpEquiv: "x-ua-compatible",
        content: "IE=edge; chrome=1"
      }]}
    />
    <div className="mx-5 my-5 md:mx-20 md:my-12">
      <div className="flex items-center gap-1 flex-col md:flex-row">
        <div className="w-full flex flex-col md:w-1/2">
          <Image
            src={"/images/logo.svg"}
            width={91}
            height={68}
            alt="logo"
          />
          <h1 className="text-3xl leading-9 font-bold linear-blue-pink mt-3 md:mt-5 md:text-4.5xl md:leading-11">Providing Industry Leading Solutions for</h1>
          <p className="text-normal text-black mt-3 md:mt-8 md:text-xl">
            Together we create a system that supports the productivity of your company&apos;s employees
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={"/images/heading.svg"}
            width={0}
            height={0}
            className="w-full h-full"
            alt="heading illustration"
          />
        </div>
      </div>
      {/* about company */}
      <div className="h-96 bg-blue-100 rounded-0 mt-16 p-6 md:rounded-full">
        <div className="flex items-start items-center h-full">
          <div
            className="w-80 h-full bg-white rounded-l-0 flex flex-col items-start justify-center border-r-0 border-blue-200 px-5 md:flex-row md:items-center md:rounded-l-full md:border-r-4 md:px-0"
          >
            <h2 className="text-2xl leading-10.5 w-full font-bold text-primary md:w-1/2 md:text-3.5xl">About Loofytech</h2>
            <div className="mt-3 text-sm flex md:hidden">
              Loofytech is a group that does not yet have legality as a company in Indonesia, with the ability of 4 people in it in the Information Technology industry we want to contribute independently to this industry. Therefore, we make continuous improvements to improve the quality of our human resources, business processes, and the quality of the services and products we produce.
            </div>
          </div>
          <div className="flex-1 h-full hidden items-center justify-center md:flex">
            <div className="w-3/4 text-2xl">
              Loofytech is a group that does not yet have legality as a company in Indonesia, with the ability of 4 people in it in the Information Technology industry we want to contribute independently to this industry. Therefore, we make continuous improvements to improve the quality of our human resources, business processes, and the quality of the services and products we produce.
            </div>
          </div>
        </div>
      </div>
      {/* services */}
      <div className="mt-10 md:mt-20">
        <h3 className="text-center text-4xl font-bold text-primary mb-10 md:mb-14">Our Services</h3>
        <div className="flex flex-col gap-6 md:gap-12">
          {/* 1 */}
          <div className="h-auto flex flex-col items-center bg-fuchsia-100 rounded-r-0 py-5 px-5 md:h-96 md:flex-row md:py-0 md:px-28 md:rounded-r-full">
            <div className="flex-1">
              <div className="w-full md:w-3/4">
                <h2 className="text-primary text-2xl leading-6 font-bold">Governance</h2>
                <p className="text-sm mt-2 md:mt-10 md:text-xl">
                  Consulting services for implementing and auditing IT Governance using IT Governance frameworks or frameworks such as: COBIT, ISO38500, ITIL, PMBOK, etc.
                </p>
              </div>
            </div>
            <div className="h-full flex items-center mt-5 md:mt-0">
              <Image
                src={"/images/service-1.svg"}
                width={0}
                height={0}
                className="w-full h-full md:w-374 md:h-305"
                alt="service one"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="h-auto flex flex-col-reverse items-center bg-blue-100 rounded-l-0 py-5 px-5 md:h-96 md:flex-row md:py-0 md:px-28 md:rounded-l-full">
            <div className="h-full flex items-center">
              <Image
                src={"/images/service-2.svg"}
                width={0}
                height={0}
                className="w-full h-full md:w-374 md:h-275"
                alt="service two"
              />
            </div>
            <div className="flex-1">
              <div className="w-full mx-auto md:w-3/4">
                <h2 className="text-primary text-2xl leading-6 font-bold">Information Security</h2>
                <p className="text-sm mt-2 md:text-xl md:mt-10">
                  Consulting services for the implementation and auditing of Information Security Management Systems using ISO27001 standards and the Cybersecurity Framework framework.
                </p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="h-auto flex flex-col items-center bg-fuchsia-100 rounded-r-0 py-5 px-5 md:h-96 md:flex-row md:py-0 md:px-28 md:rounded-r-full">
            <div className="flex-1">
              <div className="w-full md:w-3/4">
                <h2 className="text-primary text-2xl leading-6 font-bold">Master Plan</h2>
                <p className="text-sm mt-2 md:mt-10 md:text-xl">
                  Consulting services for the following planning with the preparation of an IT Master Plan or IT Blueprint using an EA framework or framework such as: TOGAF & SITAP.
                </p>
              </div>
            </div>
            <div className="h-full flex items-center mt-5 md:mt-0">
              <Image
                src={"/images/service-1.svg"}
                width={0}
                height={0}
                className="w-full h-full md:w-374 md:h-305"
                alt="service three"
              />
            </div>
          </div>
          {/* 4 */}
          <div className="h-auto flex flex-col-reverse items-center bg-blue-100 rounded-l-0 py-5 px-5 md:h-96 md:flex-row md:py-0 md:px-28 md:rounded-l-full">
            <div className="h-full flex items-center">
              <Image
                src={"/images/service-2.svg"}
                width={0}
                height={0}
                className="w-full h-full md:w-374 md:h-275"
                alt="service four"
              />
            </div>
            <div className="flex-1">
              <div className="w-full mx-auto md:w-3/4">
                <h2 className="text-primary text-2xl leading-6 font-bold">System Integration Solutions</h2>
                <p className="text-sm mt-2 md:text-xl md:mt-10">
                  Services for designing as well as implementing IT & Telco infrastructure. From solution design to procurement of goods, device settings & configuration, to training & certification.
                </p>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="h-auto flex flex-col items-center bg-fuchsia-100 rounded-r-0 py-5 px-5 md:h-96 md:flex-row md:py-0 md:px-28 md:rounded-r-full">
            <div className="flex-1">
              <div className="w-full md:w-3/4">
                <h2 className="text-primary text-2xl leading-6 font-bold">DMS Software Solutions</h2>
                <p className="text-sm mt-2 md:mt-10 md:text-xl">
                  We have a Document Management System (DMS) software solution to manage documentation in support of the implementation of a management system based on ISO standards.
                </p>
              </div>
            </div>
            <div className="h-full flex items-center mt-5 md:mt-0">
              <Image
                src={"/images/service-1.svg"}
                width={0}
                height={0}
                className="w-full h-full md:w-374 md:h-305"
                alt="service five"
              />
            </div>
          </div>
          {/* 6 */}
          <div className="h-auto flex flex-col-reverse items-center bg-blue-100 rounded-l-0 py-5 px-5 md:h-96 md:flex-row md:py-0 md:px-28 md:rounded-l-full">
            <div className="h-full flex items-center">
              <Image
                src={"/images/service-2.svg"}
                width={0}
                height={0}
                className="w-full h-full md:w-374 md:h-275"
                alt="service six"
              />
            </div>
            <div className="flex-1">
              <div className="w-full mx-auto md:w-3/4">
                <h2 className="text-primary text-2xl leading-6 font-bold">ERP Software Solutions</h2>
                <p className="text-sm mt-2 md:text-xl md:mt-10">
                  Affordable ERP solutions using ERP software that is reliable and widely used by business people. We integrate your business with ERP solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services map */}
      {/* <div className="mt-10 md:mt-20">
        <h3 className="text-center text-4xl font-bold text-primary mb-10 md:mb-14">Service Map</h3>
        <div className="flex flex-col gap-6 md:gap-12">
          <div className="h-96 flex flex-col items-start bg-gray-100 p-5 md:p-28 md:items-center md:flex-row">
            <div className="w-full md:w-96">
              <h2 className="text-primary text-2xl font-bold">IT consulting</h2>
            </div>
            <div className="w-full mt-3 md:mt-0">
              <ul className="list-disc pl-3 md:pl-0">
                <li className="text-sm leading-5 md:text-xl md:leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                </li>
                <li className="text-sm leading-5 md:text-xl md:leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                </li>
                <li className="text-sm leading-5 md:text-xl md:leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                </li>
              </ul>
            </div>
          </div>
          <div className="h-96 flex flex-col items-start bg-gray-100 p-5 md:p-28 md:items-center md:flex-row">
            <div className="w-full md:w-96">
              <div className="w-full md:w-1/2">
                <h2 className="text-primary text-2xl font-bold">Software Development</h2>
              </div>
            </div>
            <div className="w-full mt-3 md:mt-0">
              <ul className="list-disc pl-3 md:pl-0">
                <li className="text-sm leading-5 md:text-xl md:leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                </li>
                <li className="text-sm leading-5 md:text-xl md:leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                </li>
                <li className="text-sm leading-5 md:text-xl md:leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                </li>
              </ul>
            </div>
          </div>
          <div className="h-96 flex flex-col items-start bg-gray-100 p-5 md:p-28 md:items-center md:flex-row">
            <div className="w-full md:w-96">
              <h2 className="text-primary text-2xl font-bold">Testing and QA</h2>
            </div>
            <div className="w-full mt-3 md:mt-0">
              <ul className="list-disc pl-3 md:pl-0">
                <li className="text-sm leading-5 md:text-xl md:leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                </li>
                <li className="text-sm leading-5 md:text-xl md:leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                </li>
                <li className="text-sm leading-5 md:text-xl md:leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit viverra porta tortor, elementum ultrices. Blandit quam nec aliquam.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* contact */}
      <div className="overflow-hidden relative mt-10 md:mt-20">
        <div className="bg-blue-100 py-7 md:py-28">
          <h3 className="text-center text-4xl font-bold text-primary relative mb-5 md:mb-10" style={{zIndex: 1}}>Contact Us</h3>
          <div className="flex flex-col gap-3 w-full px-5 mx-auto relative md:px-0 md:w-1/3" style={{zIndex: 1}}>
            <input
              type="text"
              autoComplete="off"
              className="py-2 px-3 text-sm rounded-md border"
              placeholder="Full Name"
              onChange={(e) => handleName(e)}
              value={name}
            />
            <input
              type="text"
              autoComplete="off"
              className="py-2 px-3 text-sm rounded-md border"
              placeholder="Email Address"
              onChange={(e) => handleEmail(e)}
              value={email}
            />
            <input
              type="text"
              autoComplete="off"
              className="py-2 px-3 text-sm rounded-md border"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <textarea
              autoComplete="off"
              className="py-2 px-3 text-sm rounded-md border h-24"
              placeholder="Message"
              onChange={(e) => handleMessage(e)}
              value={message}
            />
            <div className="text-center mt-4">
              <button
                className={`text-sm text-white font-bold py-3 w-40 rounded-md ${send || stepSend > 0 ? "bg-blue-400" : "bg-primary"}`}
                onClick={handleSendMessage}
                disabled={send || !validation.name || !validation.email || !validation.phone || !validation.message}
              >
                {send ? <div className="flex justify-center items-center gap-3">
                  <div className="relative" style={{top: "-4px", left: "-10px"}}>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                  </div>
                  Process
                </div> : <div>
                  {stepSend > 0 ? "Sent" : "Send"}
                </div>}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -left-8 -top-8 md:top-0 md:left-0">
          <Image
            src={"/images/bubble.svg"}
            width={282}
            height={282}
            alt=""
          />
        </div>
        <div className="absolute rotate-180 -right-8 -bottom-8 md:bottom-0 md:right-0">
          <Image
            src={"/images/bubble.svg"}
            width={282}
            height={282}
            alt=""
          />
        </div>
      </div>
    </div>
  </>;
}
