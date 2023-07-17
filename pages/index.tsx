import { useEffect, useState } from "react";
import Image from "next/image";
import { toastSuccess } from "@/plugins/toast";
import { validEmail, validText } from "@/utils/validations";
import { NextSeo } from "next-seo";
import ContentOne from "@/components/ContentOne";
import ContentTwo from "@/components/ContentTwo";
import { useSelector } from "react-redux";
import ContentThree from "@/components/ContentThree";

export default function Home() {
  // const [loading, setLoading] = useState<boolean>(true);
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

  const {PAGE_ONE, PAGE_TWO, PAGE_THREE} = useSelector((state: any) => state.page);

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

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
    {PAGE_ONE && <ContentOne />}
    {PAGE_TWO && <ContentTwo />}
    {PAGE_THREE && <ContentThree />}
  </>;
}
