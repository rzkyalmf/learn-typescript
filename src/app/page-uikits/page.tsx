"use client";

import { Button } from "@/components/isomorphic/button";
import { Input } from "@/components/isomorphic/input";

export default function Page() {
  return (
    <div>
      <Input />
      <Button onClick={() => console.log("Hey!")}>Submit</Button>
    </div>
  );
}
