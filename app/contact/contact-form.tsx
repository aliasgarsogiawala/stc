"use client";

import type { FormEvent } from "react";
import { ArrowUpRight } from "../icons";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const product = String(data.get("product") ?? "").trim();
    const quantity = String(data.get("quantity") ?? "").trim();
    const destination = String(data.get("destination") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = product ? `Product enquiry: ${product}` : "Product sourcing enquiry";
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Product / material: ${product}`,
      `Quantity: ${quantity}`,
      `Delivery location: ${destination}`,
      "",
      "Additional details:",
      message,
    ].join("\n");

    window.location.href = `mailto:info@supremetrading.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <span>Product enquiry</span>
        <h2>Send a requirement</h2>
        <p>The form prepares an email in your default mail application.</p>
      </div>

      <div className="contact-form-grid">
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Product or material
          <input name="product" required />
        </label>
        <label>
          Required quantity
          <input name="quantity" placeholder="For example: 500 kg" required />
        </label>
        <label>
          Delivery location
          <input name="destination" autoComplete="shipping locality" required />
        </label>
        <label className="contact-form-message">
          Grade, packing or other details
          <textarea name="message" rows={5} />
        </label>
      </div>

      <button className="button button-honey link-arrow" type="submit">Prepare email <ArrowUpRight /></button>
    </form>
  );
}
