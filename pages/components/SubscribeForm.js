import Mailchimp from "react-mailchimp-form";

export default function SubscribeForm() {
  return (
    <Mailchimp
      action="https://izem.us14.list-manage.com/subscribe/post?u=609d418efe3e2644069e91d0b&amp;id=80d9be0cb3"
      fields={[
        {
          name: "FNAME",
          placeholder: "Your Name",
          type: "text",
          required: false,
        },
        {
          name: "EMAIL",
          placeholder: "Your Email",
          type: "email",
          required: true,
        },
      ]}
      className="p-10"
    />
  );
}
