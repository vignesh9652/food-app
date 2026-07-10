import emailjs from "@emailjs/browser";

export const sendOrderEmail = async (order: any) => {
  return await emailjs.send(
    "service_a8vdk3r",
    "template_6rmvirm",
    order,
    "NCXtstw66zfLKeNSp",
  );
};