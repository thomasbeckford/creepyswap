import { AppConfig } from "@/config";
import React from "react";
import Card from "../Card";

export default function Footer() {
  return <Card>Powered by {AppConfig.site_name}</Card>;
}
