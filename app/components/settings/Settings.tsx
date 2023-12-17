"use client";

// import { Button } from "@nextui-org/react";
import Button from "../button/Button";

export default function Settings() {
  return (
    <div className="container mx-auto mt-24 py-5 px-5 md:w-[60rem] bg-gray-50 rounded-lg">
      <div className="flex">
        <Button
          text="Instructions"
          onClick={() => {
            console.log("Restart");
          }}
        />
        <Button
          text="Start"
          onClick={() => {
            console.log("Start");
          }}
        />
        <Button
          text="Restart"
          onClick={() => {
            console.log("Restart");
          }}
        />
        <Button
          text="Draws"
          onClick={() => {
            console.log("Restart");
          }}
        />
        <h1>Koins 5000</h1>
      </div>
    </div>
  );
}
